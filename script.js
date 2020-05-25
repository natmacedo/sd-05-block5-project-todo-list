// add a event listener to the button to create a list item
const btn = document.getElementById('criar-tarefa');
const task = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

btn.addEventListener('click', function () {
  const listItemToBeCreated = document.createElement('li');
  listItemToBeCreated.innerHTML = task.value;
  taskList.appendChild(listItemToBeCreated);
  task.value = '';
});

// add event listener to complete (strikethrough) and select (change color) a list item
let clickCount = 0;
taskList.addEventListener('click', function (event) {
  clickCount += 1;
  setTimeout(function () {
    if (clickCount === 1) {
      clickCount = 0;
      if (event.target.className.includes('selected')) {
        event.target.classList.remove('selected');
        event.target.style.backgroundColor = 'rgb(255,255,255)';
      } else {
        event.target.classList.add('selected');
        event.target.style.backgroundColor = 'rgb(128,128,128)';
      }
    } else if (clickCount === 2) {
      clickCount = 0;
      if (event.target.className.includes('completed')) {
        event.target.classList.remove('completed');
      } else {
        event.target.classList.add('completed');
      }
    }
  }, 400);
});

// add a button the clears all list itens
const clearTasks = document.getElementById('apaga-tudo');
clearTasks.addEventListener('click', function () {
  taskList.innerHTML = '';
});

// add a button the clears completed items
const clearCompletedTasks = document.getElementById('remover-finalizados');
clearCompletedTasks.addEventListener('click', function () {
  // create array with list items
  const taskItems = document.getElementsByClassName('completed');
  for (let i = taskItems.length - 1; i >= 0; i -= 1) {
    taskItems[i].remove();
  }
});

// add a button that clears selected items
const clearSelectedTasks = document.getElementById('remover-selecionado');
clearSelectedTasks.addEventListener('click', function () {
  // create array with list items
  const taskItems = document.getElementsByClassName('selected');
  for (let i = taskItems.length - 1; i >= 0; i -= 1) {
    taskItems[i].remove();
  }
});

// add a buttom that saves de list created
const saveButton = document.getElementById('salvar-tarefas');
saveButton.addEventListener('click', function () {
  //create array with list items
  let tasksSaved = document.getElementById('lista-tarefas');
  localStorage.setItem('tasks', tasksSaved.innerHTML);
  
});

// created the ol with the items saved
window.onload = function () {
  document.querySelector('ol').innerHTML = localStorage.getItem('tasks');
  console.log(document.querySelector('ol').innerHTML);
  console.log(localStorage.getItem('tasks'));
}
