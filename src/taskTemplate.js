export default (task, index) => {
  const checkingControl = task.completed ? 'checked' : '';

  return `<li class='task-item'><input type='checkbox' class='status' ${checkingControl} data-index="${index}"><input type="text" class="textBox" id="todo${index + 1}" value="${task.description}" readonly data-index="${index}"><i class='fa-solid fa-ellipsis-vertical icon move'></i><i class='fa-regular fa-trash-can icon remove hidden' data-index="${index}"></i></li>`;
};
