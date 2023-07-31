let allTasks = document.querySelector('#allTasks');
allTasks.innerHTML = '';

let addTaskButton = document.querySelector('#addTask__button');
addTaskButton.addEventListener('click', addTask);

const taskInput = document.querySelector('#taskInput');

let allTasksArray = [];

document.addEventListener("DOMContentLoaded", function (event) {
    allTasksArray = JSON.parse(localStorage.getItem('tasks'));
    if (allTasksArray !== null) {
        document.querySelector('#noTask').innerHTML = '';
    }
    for (let task of allTasksArray) {
        allTasks.innerHTML += `<div class = "taskItem"><input class="checkbox" type="checkbox"><span class = "taskItem__text">${task}</span></div> `
    }
    clearTaskButton.disabled = false;
});

function addTask() {
    if (taskInput.value) {
        document.querySelector('#noTask').innerHTML = '';
        allTasks.innerHTML += `<div class = "taskItem"><input class="checkbox" type="checkbox"><span class = "taskItem__text">${taskInput.value}</span></div> `;
        let taskItem = document.querySelector('.taskItem');
        allTasksArray.push(taskInput.value);
        localStorage.setItem('tasks', JSON.stringify(allTasksArray));

        taskInput.value = '';
        clearTaskButton.disabled = false;
    }
}

let clearTaskButton = document.querySelector('#clearTasks__button');
clearTaskButton.setAttribute('disabled', '');
clearTaskButton.addEventListener('click', clearTask);

function clearTask () {
    allTasks.innerHTML = '';
    document.querySelector('#noTask').innerHTML = 'Нет задач';
    clearTaskButton.disabled = true;
    allTasksArray = [];
    localStorage.clear();
}