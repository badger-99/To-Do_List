class UtilityFunctions {
  // Saving to Local Storage -> uses bookArray
  static setStorage = (array) => {
    localStorage.setItem('toDo-list', JSON.stringify(array));
  };

  // Getting from Local Storage
  static getStorage = () => {
    const retrievedBooks = JSON.parse(localStorage.getItem('toDo-list'));
    if (retrievedBooks && Array.isArray(retrievedBooks)) {
      return retrievedBooks;
    }
    return []; // Return an empty array if storage is empty or not an array
  };

  // Showing books on browser  -> uses container
  static showTasks = (element, template) => {
    const retrievedBooks = this.getStorage();
    if (retrievedBooks.length > 0) {
      element.innerHTML = retrievedBooks
        .map((book, index) => template(book, index))
        .join('');
    } else {
      element.innerHTML = '<h2>There is nothing to do.</h2>';
    }
  };

  static addTask(array, book) {
    array.push(book);
    this.setStorage(array);
  }

  static removeTask(array, idx) {
    array.splice(idx, 1);
    this.setStorage(array);
  }
}

export default UtilityFunctions;
