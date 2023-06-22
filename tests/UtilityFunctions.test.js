import UtilityFunctions from '../src/utilityFunctions.js';

describe('addTask', () => {
  test('Array should receive an object', () => {
    const testArray = [];
    UtilityFunctions.addTask(testArray, 'random task');
    expect(testArray.length).toBe(1);
  });
});

describe('remove task', () => {
  test('it should remove a task from an array.', () => {
    const testArray = [
      {
        index: 1,
        completed: false,
        description: 'task one',
      },
      {
        index: 2,
        completed: false,
        description: 'task two',
      },
      {
        index: 3,
        completed: false,
        description: 'task three',
      },
    ];
    UtilityFunctions.removeTask(testArray, 2);
    expect(testArray.length).toBe(2);
  });
});