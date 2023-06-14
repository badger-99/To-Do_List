import Icon2 from './vertical-dots.svg'
export default (task) => {
  const checkingControl = task.completed ? 'checked' : '';

  const icon2 = new Image();
  icon2.src = Icon2;

  const i = document.createElement('i')
  i.classList.add('vertDot', 'icon');
  i.appendChild(icon2)
  
  return `<li class='li'><span><input type='checkbox' id='status' ${checkingControl}> ${task.description}</span><span><a href='#'><i class='vertDot'>${i.outerHTML}</i></a></span></li>`;
};
