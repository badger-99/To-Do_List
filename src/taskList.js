// Task object array

class TaskList {
  constructor() {
    this.array = [];
  }

  getArray() {
    return this.array;
  }

  addIndex = () => {
    this.array = this.array.map((item, index) => ({
      ...item,
      index: index + 1,
    }));
    return this.array;
  };
}

export default TaskList;
