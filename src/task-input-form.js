const form = document.createElement('form');
const entry = document.createElement('input');
const submit = document.createElement('button');

// Task input field
form.setAttribute('id', 'form');

// input field
entry.setAttribute('id', 'input');
entry.setAttribute('type', 'text');
entry.setAttribute('required', 'required');
entry.setAttribute('placeholder', 'Add to your list...');

// submit button
submit.setAttribute('type', 'submit');
submit.setAttribute('id', 'submit');
submit.innerHTML = `<i class="fa-solid fa-arrow-turn-down fa-rotate-90" id='arrow'></i>`;
form.appendChild(entry);
form.appendChild(submit);

export {form, entry}
