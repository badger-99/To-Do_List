class UtilityFunctions {
  // Saving to Local Storage -> uses taskArray
  static setStorage = (array) => {
    localStorage.setItem('toDo-list', JSON.stringify(array));
  };

  // Getting from Local Storage
  static getStorage = () => {
    const retrievedTasks = JSON.parse(localStorage.getItem('toDo-list'));
    if (retrievedTasks && Array.isArray(retrievedTasks)) {
      return retrievedTasks;
    }
    return []; // Return an empty array if storage is empty or not an array
  };

  // Showing books on browser  -> uses container
  static showTasks = (element, template) => {
    const retrievedTasks = this.getStorage();
    if (retrievedTasks.length > 0) {
      element.innerHTML = retrievedTasks
        .map((task, index) => template(task, index))
        .join('');
    } else {
      element.innerHTML = `<h4 id='empty'>there is nothing To Do</h4>`;
    }
  };

  static addIndex = (array) => {
    array = array.map((item, index) => ({
      ...item,
      index: index + 1,
    }));
    return array;
  };

  static addTask = (array, task) => {
    array.push(task);
    this.setStorage(this.addIndex(array));
  };

  static removeTask = (array, idx) => {
    array.splice(idx, 1);
    this.setStorage(this.addIndex(array));
  };

  static modifyTask = (array, idx, value) => {
    return array[idx].description = value
    
  };
}

export default UtilityFunctions;
