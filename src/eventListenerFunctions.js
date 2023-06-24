import UtilityFunctions from './utilityFunctions.js';
import Task from './task.js';

// Add new task to list
export const addNewTaskToList = (entry, array, ul, template) => {
  const newTask = new Task(entry.value);
  const task = newTask.getTask();
  UtilityFunctions.addTask(array, task);
  UtilityFunctions.showTasks(ul, template);
  UtilityFunctions.applyCompletedClass(array);
};

// Update task status
export const statusUpdate = (checkbox, array) => {
  if (checkbox.classList.contains('status')) {
    const label = checkbox.nextElementSibling;
    const taskNum = checkbox.dataset.index;
    const idx = parseInt(taskNum, 10);
    if (checkbox.checked === true) {
      label.classList.add('completed');
      array[idx].completed = true;
    } else {
      label.classList.remove('completed');
      array[idx].completed = false;
    }
    UtilityFunctions.setStorage(array);
  }
};

// Edit and delete tasks
export const editAndDeleteTasks = (textBox, taskArray, ul, template) => {
  if (textBox.classList.contains('textBox')) {
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
        UtilityFunctions.removeTask(taskArray, idx);
        UtilityFunctions.showTasks(ul, template);
        UtilityFunctions.applyCompletedClass(taskArray);
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
};

// Clear all completed tasks
export const clearCompleted = (array, moddedArray, ul, template) => {
  moddedArray = array.filter((item) => item.completed === false);
  moddedArray = UtilityFunctions.addIndex(moddedArray);
  UtilityFunctions.setStorage(moddedArray);
  UtilityFunctions.showTasks(ul, template);
  return moddedArray;
};
