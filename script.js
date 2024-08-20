document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskActions);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task">${taskText}</span>
            <div>
                <button class="edit">Edit</button>
                <button class="complete">Complete</button>
                <button class="delete">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }

    function handleTaskActions(e) {
        if (e.target.classList.contains('delete')) {
            deleteTask(e.target.parentElement.parentElement);
        } else if (e.target.classList.contains('complete')) {
            toggleComplete(e.target.parentElement.parentElement);
        } else if (e.target.classList.contains('edit')) {
            editTask(e.target.parentElement.parentElement);
        }
    }

    function deleteTask(task) {
        task.remove();
    }

    function toggleComplete(task) {
        task.classList.toggle('completed');
    }

    function editTask(task) {
        const taskText = task.querySelector('.task').textContent;
        taskInput.value = taskText;
        task.remove();
    }
});
