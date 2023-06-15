// Task object array
const tasks = [
  {
    description: 'Go to the Gym',
    completed: true,
  },
  {
    description: 'Make breakfast',
    completed: true,
  },
  {
    description: 'Clean Room',
    completed: false,
  },
];

export const addindex = (array) => {
  const returnArr = array.map((item, index) => ({ ...item, index }));
  returnArr.forEach((item, index) => (item.index = index + 1));
  return returnArr;
};

export const addTask = (string) => {
  const item = {
    descriotion: string,
    completed: false,
  };
  tasks.push(item);
};

const returnTasks = addindex(tasks);
export default returnTasks;
