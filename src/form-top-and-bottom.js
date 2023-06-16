// Heading
const heading = document.createElement('div');
heading.setAttribute('id', 'heading');
heading.innerHTML = `<h4>Today's To Do</h4><a href='#' id='refresh'><i class="fa-solid fa-arrows-rotate"></i></a>`;

// Clear button
const clear = document.createElement('button');
clear.innerHTML = 'Clear all completed';
clear.setAttribute('id', 'clear');

export { heading, clear };
