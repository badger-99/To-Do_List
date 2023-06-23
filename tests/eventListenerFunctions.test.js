/**
 * @jest-environment jsdom
 */

import { editAndDeleteTasks, statusUpdate, clearCompleted } from '../src/eventListenerFunctions.js';

describe('testing "edit" from editAndDeleteTasks', () => {
  test('task description changes after user input', () => {
    const task = {
      description: 'Change this!',
      completed: false,
      index:1,
    }

    const taskArray = [task]
    const container = document.createElement('ul')
    const li = document.createElement('li')
    const textBox = document.createElement('input')
    textBox.type = 'text'
    textBox.className = 'textBox'
    textBox.id = 'todo1'
    textBox.value = 'Change This!'
    textBox.setAttribute('readonly','readonly')
    textBox.setAttribute('data-index', '0')
    
    li.appendChild(textBox)
    container.appendChild(li)

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
      if (e.target.classList.contains('textBox')) {
        const textBox = e.target;
        editAndDeleteTasks(textBox, taskArray, container, template);
      }
    });

    const mockClick = new Event('click')
    const mockBlur = new Event('blur')

    container.dispatchEvent(mockClick)
    textBox.value = 'New Changed Value'
    textBox.dispatchEvent(mockBlur)
    
    expect(taskArray[0].description).toBe('New Changed Value');
    
    // fireEvent.change(textBox, {
    //   target: { value: 'Another New Changed Value' },
    // });

  })
})