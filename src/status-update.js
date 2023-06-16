import UtilityFunctions from './utilityFunctions.js';

export default (checkbox, array) => {
  const label = checkbox.nextElementSibling;
  const taskNum = checkbox.dataset.index;
  const idx = parseInt(taskNum, 10);
  if (checkbox.checked === true) {
    label.style.textDecoration = 'line-through';
    array[idx].completed = true;
    UtilityFunctions.setStorage(array);
  } else {
    label.style.textDecoration = 'none';
    array[idx].completed = false;
    UtilityFunctions.setStorage(array);
  }
};
