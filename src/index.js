import { form, entry } from './task-input-form.js';
import { heading, clear } from './form-top-and-bottom.js';
import taskTemplate from './taskTemplate.js';
import TaskList from './taskList.js';
import Task from './task.js';
import UtilityFunctions from './utilityFunctions.js';
import './style.css';

const container = document.getElementById('toDo');
const list = document.createElement('ul');
list.setAttribute('id', 'ul');

container.appendChild(heading);
container.appendChild(form);
container.appendChild(list);

const tasklist = new TaskList();
let taskArray = tasklist.getArray();
taskArray = [...UtilityFunctions.getStorage()];
UtilityFunctions.showTasks(list, taskTemplate);

container.appendChild(clear);

// Adding a task
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTask = new Task(entry.value);
  const task = newTask.getTask();
  UtilityFunctions.addTask(taskArray, task);
  UtilityFunctions.showTasks(list, taskTemplate);
  form.reset();
});

document.body.appendChild(component());
