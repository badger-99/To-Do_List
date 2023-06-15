// Heading
const heading = document.createElement('div');
heading.setAttribute('id', 'heading');
heading.innerHTML =
  '<h4>Today\'s To Do</h4><i class="fa-solid fa-arrows-rotate"></i>';

// Clear button
const clear = document.createElement('button');
clear.innerHTML = 'Clear all completed';
clear.setAttribute('id', 'clear');

export{heading, clear}
