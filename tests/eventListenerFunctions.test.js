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
      'hidden',
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
      if (e.target.classList.contains('textBox')) {
        const textbox = e.target;
        editAndDeleteTasks(textbox, taskArray, container, template);
      }
    });

    const mockClick = new Event('click', { bubbles: true });
    const mockBlur = new Event('blur');

    textBox.dispatchEvent(mockClick);
    fireEvent.change(textBox, { target: { value: 'New Changed Value' } });
    textBox.dispatchEvent(mockBlur);

    expect(taskArray[0].description).toBe('New Changed Value');
  });
});

describe('testing status changes,', () => {
  test('should flag task as completed.', () => {
    const taskArray = [
      {
        index: 0,
        completed: false,
        description: 'test desc',
      },
    ];
    const container = document.createElement('div');
    const checkbox = document.createElement('input');
    const input = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('data-index', '0');
    checkbox.classList.add('status');

    container.appendChild(checkbox);
    container.appendChild(input);

    checkbox.addEventListener('change', (e) => {
      statusUpdate(e.target, taskArray);
    });
    checkbox.checked = true;
    const mockChange = new Event('change');
    checkbox.dispatchEvent(mockChange);
    expect(taskArray[0].completed).toBe(true);
  });
});

describe('Clear all completed tasks', () => {
  test('Objects with completed:true removed from array', () => {
    const task1 = {
      completed: true,
    };
    const task2 = {
      completed: false,
    };
    const task3 = {
      completed: true,
    };
    const task4 = {
      completed: false,
    };
    const task5 = {
      completed: true,
    };

    let taskArray = [task1, task2, task3, task4, task5];
    const clear = document.createElement('button');
    const container = document.createElement('ul');

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

    clear.addEventListener('click', (e) => {
      e.preventDefault();
      const moddedArray = [];
      taskArray = clearCompleted(taskArray, moddedArray, container, template);
    });

    const mockClick = new Event('click');
    clear.dispatchEvent(mockClick);

    let cleared;
    if (taskArray.length === 2) {
      let statusCheck = 0;
      taskArray.forEach((task) => {
        if (task.completed === false) {
          statusCheck += 1;
        }
      });
      if (statusCheck === 2) {
        cleared = true;
      } else {
        cleared = false;
      }
    } else {
      cleared = false;
    }

    expect(cleared).toBe(true);
  });
});