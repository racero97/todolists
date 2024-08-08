document.addEventListener('DOMContentLoaded', (event) => {
    const tasks = document.querySelectorAll('.task');
    const lists = document.querySelectorAll('.list');

    tasks.forEach(task => {
        task.addEventListener('dragstart', dragStart);
        task.addEventListener('dragend', dragEnd);
    });

    lists.forEach(list => {
        list.addEventListener('dragover', dragOver);
        list.addEventListener('drop', drop);
    });

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => {
            e.target.classList.add('hide');
        }, 0);
    }

    function dragEnd(e) {
        e.target.classList.remove('hide');
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function drop(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);
        e.target.appendChild(draggable);
    }
});
