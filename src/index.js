import taskTemplate from './taskTemplate.js';
import './style.css';

function component() {
  const container = document.getElementById('toDo');
  const heading = document.createElement('div');
  const form = document.createElement('form')
  const entry = document.createElement('input');
  const submit = document.createElement('button')
  const list = document.createElement('ul');
  const clear = document.createElement('button');

  // Heading
  heading.setAttribute('id', 'heading');
  heading.innerHTML = '<h4>Today\'s To Do</h4><i class="fa-solid fa-arrows-rotate"></i>';
  container.appendChild(heading);

  // Task input field
  form.setAttribute('id', 'form')
  entry.setAttribute('id', 'input');
  entry.setAttribute('type', 'text');
  entry.setAttribute('placeholder', 'Add to your list...');
  submit.setAttribute('type','button')
  submit.setAttribute('id', 'submit')
  form.appendChild(entry)
  form.appendChild(submit)
  container.appendChild(form);

  list.innerHTML = tasks.map((task) => taskTemplate(task)).join('');
  container.appendChild(list);

  // Clear button
  clear.innerHTML = 'Clear all completed';
  clear.setAttribute('id', 'clear');
  container.appendChild(clear);

  return container;
}

document.body.appendChild(component());
