let ordenedList = document.getElementById('lista-tarefas');
let buttonTask = document.getElementById('criar-tarefa');
let buttonClear = document.getElementById('apaga-tudo')
let textTask = document.getElementById('texto-tarefa');
let colorButton = document.getElementById('colorirb')

function addTask() {
  let listItem = document.createElement('li');
  listItem.setAttribute('class', 'completed');
  listItem.innerHTML = textTask.value;
  if(textTask.value == '' ) {
    alert('Escreva algo para adicionar');
  } else{
    ordenedList.appendChild(listItem);
    textTask.value = '';
  }
  addEvents(listItem);
}

function clearAllTask() {
  ordenedList.innerHTML = '';
}

function addEvents(listItem) {
  listItem.addEventListener('click', function(){
    listItem.style.backgroundColor = corCinza();
  });
  listItem.addEventListener('dblclick', function (){
    if(listItem.style.textDecoration == 'line-through') {
      listItem.style.textDecoration = 'none';
    } else{
      listItem.style.textDecoration = 'line-through';
    }
  });

}

function corCinza() {
  return "rgb(128, 128, 128)";
}

buttonClear.addEventListener('click', clearAllTask);
buttonTask.addEventListener('click', addTask);
