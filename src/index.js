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

// Show list on browser
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

// Checkbox functionality
const checkboxes = container.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    const label = checkbox.nextElementSibling;
    const taskNum = checkbox.dataset.index;
    const idx = parseInt(taskNum, 10);
    if (checkbox.checked) {
      console.log("I'm checked", idx);
      label.style.textDecoration = 'line-through';
    } else {
      label.style.textDecoration = 'none';
      console.log("I'm un-checked");
    }
  });
});

// Editing and deleting tasks
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('textBox')) {
    const textBox = e.target;
    const moveBtn = textBox.nextElementSibling;
    const removeBtn = moveBtn.nextElementSibling;
    const taskNum = textBox.dataset.index;
    const idx = parseInt(taskNum, 10);

    textBox.readOnly = false; // Allowing task to be edited
    moveBtn.classList.add('hidden');
    removeBtn.classList.remove('hidden');

    textBox.addEventListener('blur', () => {
      textBox.readOnly = true;

      // Saving edited task
      taskArray[idx].description = textBox.value;
      const moddedArray = UtilityFunctions.addIndex(taskArray);
      UtilityFunctions.setStorage(moddedArray);

      // Deleting a task
      removeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(`remove ${idx}`);
        UtilityFunctions.removeTask(taskArray, idx);
        UtilityFunctions.showTasks(list, taskTemplate);
      });
    });

    // Resetting icons
    document.body.addEventListener('click', (e) => {
      if (e.target === document.body) {
        moveBtn.classList.remove('hidden');
        removeBtn.classList.add('hidden');
      }
    });
  }
});
