import UtilityFunctions from "../src/utilityFunctions";

describe('addTask', () => {
  test('Array should receive an object', () => {
    const testArray = []
    UtilityFunctions.addTask(testArray, 'random task')
    expect(testArray.length).toBe(1)
  })
})