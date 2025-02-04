function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function () {
        li.classList.toggle('done');
    };

    const span = document.createElement('span');
    span.textContent = taskText;

    const deleteButton = document.createElement('span');
    deleteButton.textContent = '🗑';
    deleteButton.className = 'delete';
    deleteButton.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
}