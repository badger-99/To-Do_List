import './style.css';
import { form, entry } from './task-input-form.js';
import { heading, clear } from './form-top-and-bottom.js';
import taskTemplate from './taskTemplate.js';
import TaskList from './taskList.js';
import UtilityFunctions from './utilityFunctions.js';
import {
  addNewTaskToList,
  statusUpdate,
  editAndDeleteTasks,
  clearCompleted,
} from './eventListenerFunctions.js';

const container = document.getElementById('toDo');
const list = document.createElement('ul');
list.setAttribute('id', 'ul');

container.appendChild(heading);
container.appendChild(form);
container.appendChild(list);

// Show list on browser
const tasklist = new TaskList();
let taskArray = tasklist.getArray();
taskArray = [...UtilityFunctions.getStorage()];
UtilityFunctions.showTasks(list, taskTemplate);
UtilityFunctions.applyCompletedClass(taskArray);

container.appendChild(clear);

// Adding a task
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addNewTaskToList(entry, taskArray, list, taskTemplate);
  form.reset();
});

// Checkbox functionality
container.addEventListener('change', (e) => {
  if (e.target.classList.contains('status')) {
    const checkbox = e.target;
    statusUpdate(checkbox, taskArray);
  }
});

// Editing and deleting tasks
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('textBox')) {
    const textBox = e.target;
    editAndDeleteTasks(textBox, taskArray, list, taskTemplate);
  }
});

// Clear completed tasks
clear.addEventListener('click', (e) => {
  e.preventDefault();
  let moddedArray = [];
  taskArray = clearCompleted(taskArray, moddedArray, list, taskTemplate);
  UtilityFunctions.applyCompletedClass(taskArray);
});
