document.getElementById('addItemButton').onclick = () => {
  var newItem = prompt('What do you want to do');

  let newObject = {
    task: newItem,
    completed: false
  };

  displayTodoList.push(newObject);
  window.localStorage.setItem('TODO_LIST', JSON.stringify(displayTodoList));

  location.reload();
};

document.getElementById('clearItemButton').onclick = () => {
  window.localStorage.removeItem('TODO_LIST');

  location.reload();
};

var toDoList = JSON.parse(window.localStorage.getItem('TODO_LIST'));
var toDoListParent = document.getElementById('toDoListParent');

var displayTodoList;

var exampleTodoList = [
  {
    task: 'Do Laundry',
    completed: false
  },
  {
    task: 'Wash Dog',
    completed: false
  },
  {
    task: 'Make Dinner',
    completed: false
  },
  {
    task: 'Play Games',
    completed: false
  }
];

if (toDoList) {
  displayTodoList = toDoList;
} else {
  displayTodoList = exampleTodoList;
}

for (let i = 0; i < displayTodoList.length; i++) {
  var tempDiv = document.createElement('div');
  tempDiv.className = 'taskItem';
  tempDiv.innerHTML = displayTodoList[i].task;
  toDoListParent.appendChild(tempDiv);
}

var taskItems = document.getElementsByClassName('taskItem');
for (let i = 0; i < taskItems.length; i++) {
  taskItems[i].onclick = () => {
    taskItems[i].classList.add('task-complete');
  };
}
