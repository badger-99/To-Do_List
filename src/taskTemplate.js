export default (task) => {
  const checkingControl = task.completed ? 'checked' : '';
  return `<li><input type='checkbox' id='status' ${checkingControl}> ${task.description}</li>`;
};
