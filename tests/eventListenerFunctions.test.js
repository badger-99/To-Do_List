/**
 * @jest-environment jsdom
 */
import { fireEvent } from '@testing-library/dom';
import { editAndDeleteTasks, statusUpdate, clearCompleted } from '../src/eventListenerFunctions.js';

describe('testing "edit" from editAndDeleteTasks', () => {
  test('task description changes after user input', () => {
    const task = {
      description: 'Change this!',
      completed: false,
      index: 1,
    };

    const taskArray = [task];
    const container = document.createElement('ul');
    const li = document.createElement('li');

    const textBox = document.createElement('input');
    textBox.type = 'text';
    textBox.className = 'textBox';
    textBox.id = 'todo1';
    textBox.value = 'Change This!';
    textBox.setAttribute('readonly', 'readonly');
    textBox.setAttribute('data-index', '0');

    const move = document.createElement('i');
    move.classList.add('fa-solid', 'fa-ellipsis-vertical', 'icon', 'move');

    const remove = document.createElement('i');
    remove.classList.add(
      'fa-regular',
      'fa-trash-can',
      'icon',
      'remove',
      'hidden'
    );

    li.appendChild(textBox);
    li.appendChild(move);
    li.appendChild(remove);
    container.appendChild(li);

    const template = (task, index) => {
      const checkingControl = task.completed ? 'checked' : '';

      return `<li class='task-item'>
      <input type='checkbox' class='status' ${checkingControl} data-index="${index}">
      <input type="text" class="textBox" id="todo${index + 1}" value="${
        task.description
      }" readonly data-index="${index}">
      <i class='fa-solid fa-ellipsis-vertical icon move'></i>
      <i class='fa-regular fa-trash-can icon remove hidden' data-index="${index}"></i>
      </li>`;
    };

    container.addEventListener('click', (e) => {
      console.log('click heard', e.target);
      if (e.target.classList.contains('textBox')) {
        const textbox = e.target;
        console.log('text box found');
        editAndDeleteTasks(textbox, taskArray, container, template);
        console.log('changes complete');
      }
      // console.log('event done');
    });

    const mockClick = new Event('click', { bubbles: true });
    const mockBlur = new Event('blur');

    textBox.dispatchEvent(mockClick);
    fireEvent.change(textBox, { target: { value: 'New Changed Value' } });
    textBox.dispatchEvent(mockBlur);

    expect(taskArray[0].description).toBe('New Changed Value');
  })
})