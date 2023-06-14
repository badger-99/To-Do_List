import taskTemplate from './taskTemplate.js';
import './style.css';

function component() {
  const container = document.getElementById('toDo');
  const heading = document.createElement('h3');
  const entry = document.createElement('input');
  const list = document.createElement('ul');
  const clear = document.createElement('button');

  // Heading
  heading.innerHTML = "Today's To Do";
  container.appendChild(heading);

  // Task input field
  entry.setAttribute('id', 'input');
  entry.setAttribute('type', 'text');
  entry.setAttribute('placeholder', 'Add to your list');
  container.appendChild(entry);

  // Task object array
  const tasks = [
    {
      description: 'Go to the Gym',
      completed: true,
    },
    {
      description: 'Make breakfast',
      completed: true,
    },
    {
      description: 'Clean Room',
      completed: false,
    },
  ];

  tasks.forEach((item, index) => (item.index = index));

  list.innerHTML = tasks.map((task) => taskTemplate(task)).join('');
  container.appendChild(list);

  // Clear button
  clear.innerHTML = 'Clear all completed';
  clear.classList.add('clear');
  container.appendChild(clear);

  return container;
}

document.body.appendChild(component());
