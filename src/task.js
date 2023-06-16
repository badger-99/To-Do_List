class Task {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.index = 0;
  }

  getTask() {
    return {
      description: this.description,
      completed: this.completed,
      index: this.index,
    };
  }
}

export default Task;
