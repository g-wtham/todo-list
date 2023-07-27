const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

function addTask() {

    const taskValue = taskInput.value;

    if (taskValue.trim() !== '') {

        const listItem = document.createElement('li');
        listItem.textContent = taskValue;
        listItem.classList.add('liClass');
        taskList.appendChild(listItem);

        const deleteButton = document.createElement('button');  
        deleteButton.textContent = "Delete Button";
        deleteButton.classList.add('deleteButton');
        listItem.appendChild(deleteButton);

        const taskCountFunc = () => {
            const taskCount = document.getElementById('taskCount');
            const selectTasks = document.querySelectorAll('li');
            const countTasks = selectTasks.length;
            taskCount.textContent = countTasks;
        }
        
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
            taskCountFunc();
        })

        taskCountFunc();

        taskInput.value = '';
    }

}

addButton.onclick = addTask;