export default (task) => {
  const checkingControl = task.completed ? 'checked' : '';

  return `<li class='li'><span class='label'><input type='checkbox' class='status' ${checkingControl}> ${task.description}</span><span><a href='#' id='move'><i class="fa-solid fa-ellipsis-vertical"></i></a></span></li>`;
};
