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

// move buttons
// const moveBtns = document.querySelectorAll('.move');
// moveBtns.forEach((moveBtn) => {
//   moveBtn.addEventListener('click', (e) => {
//     const remove = moveBtn.nextElementSibling;
//     e.preventDefault;
//     moveBtn.classList.toggle('hidden');
//     remove.classList.toggle('hidden');
//   });
// });

// editing and deleting tasks
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('textBox')) {
    const textBox = e.target;
    const moveBtn = textBox.nextElementSibling;
    const removeBtn = moveBtn.nextElementSibling;
    const taskNum = textBox.dataset.index;
    const idx = parseInt(taskNum, 10);

    textBox.readOnly = false; // allowing task to be edited
    moveBtn.classList.add('hidden');
    removeBtn.classList.remove('hidden');

    textBox.addEventListener('blur', () => {
      textBox.readOnly = true;

      // saving edited task
      taskArray[idx].description = textBox.value;
      const moddedArray = UtilityFunctions.addIndex(taskArray);
      UtilityFunctions.setStorage(moddedArray);

      // deleting a task
      removeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(`remove ${idx}`);
        UtilityFunctions.removeTask(taskArray, idx);
        UtilityFunctions.showTasks(list, taskTemplate);
      });
    });

    // resetting icons
    document.body.addEventListener('click', (e) => {
      if (e.target === document.body) {
        moveBtn.classList.remove('hidden');
        removeBtn.classList.add('hidden');
      }
    });
  }

  // if (e.target.classList.contains('remove')) {
  //   const removeBtn = e.target;
  //   const taskNum = removeBtn.dataset.index;
  //   const idx = parseInt(taskNum, 10);
  //   console.log(`remove ${idx}`)
  // }
});

// UtilityFunctions.modifyTask(taskArray, idx, textBox.value);
// UtilityFunctions.setStorage(taskArray)
// UtilityFunctions.showTasks(list, taskTemplate);

// remove buttons
// const removeBtns = document.querySelectorAll('.remove');
// removeBtns.forEach((removeBtn) => {
//   removeBtn.addEventListener('click', (e) => {
//     const taskNum = removeBtn.dataset.index;
//           const idx = parseInt(taskNum, 10);
//     console.log(idx);
//     UtilityFunctions.removeTask(taskArray, idx)
//     UtilityFunctions.showTasks(list, taskTemplate);

//   })
// })

// list.addEventListener('change', (e) => {
//   if (e.target.type === 'checkbox') {
//     const checkbox = e.target;
//     const label = checkbox.parentNode
//     if (checkbox.checked) {
//       console.log("I'm checked");
//       label.style.textDecoration = 'line-through'
//     } else {
//       label.style.textDecoration = 'none';
//       console.log("I'm un-checked");
//     }
//   }
// });

// list.addEventListener('click', (e) => {
//   e.preventDefault();
//   const icon = e.target
//   if (icon.classList.contains('move')) {
//     console.log('move');
//     move.classList.toggle('hidden');
//     remove.classList.toggle('hidden');
//     if (icon.classList.contains('remove')) {
//       const taskNum = remove.dataset.index;
//       const idx = parseInt(taskNum, 10);
//       console.log(idx);
//       move.classList.toggle('hidden');
//       remove.classList.toggle('hidden');
//     }
//   }
// });

// list.addEventListener('click', (e) => {
//   e.preventDefault();
//   const icon = e.target
//   if (icon.classList.contains('remove')) {
//     const taskNum = remove.dataset.index;
//     const idx = parseInt(taskNum, 10);
//     console.log(idx);
//     move.classList.toggle('hidden');
//     remove.classList.toggle('hidden');
//   }
// });

// // Selecting completed tasks
// const checkbox = document.querySelector('.status');
// checkbox.addEventListener('change', (e) => {
//   e.preventDefault();
//   if (e.target.classList.contains('status')) {
//     if (checkbox.checked) {
//       console.log("I'm checked");
//       label.style.textDecoration = 'line-through'
//     } else {
//       label.style.textDecoration = 'none';
//       console.log("I'm un-checked");
//     }
//   }
// });

// Removing tasks
// container.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (e.target.classList.contains('remove')) {

//   }
//   const taskNum = remove.dataset.index;
//   const idx = parseInt(taskNum, 10);
//   console.log(idx)
// })
