import UtilityFunctions from './utilityFunctions.js';

export default (checkbox, array) => {
  const label = checkbox.nextElementSibling;
  const taskNum = checkbox.dataset.index;
  const idx = parseInt(taskNum, 10);
  if (checkbox.checked === true) {
    array[idx].completed = true;
  } else {
    array[idx].completed = false;
  }
  UtilityFunctions.setStorage(array);
};
