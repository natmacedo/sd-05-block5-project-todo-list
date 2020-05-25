//Definição das variáveis básicas
let addItem = document.getElementById('criar-tarefa');
let olList = document.getElementById('lista-tarefas');
let textList = document.getElementById('texto-tarefa');
let clearAll = document.getElementById('apaga-tudo');
//Variáveis demais funcionalidades
let clearFinish = document.getElementById('remover-finalizados');
let clearSelect = document.getElementById('remover-selecionado');
let saveList = document.getElementById('salvar-tarefas');
let moveDown = document.getElementById('mover-baixo');
let moveUp = document.getElementById('mover-cima');
let lines = document.getElementById('linhas');

//Funções
function adicionaItem () {
  let li = document.createElement("li");
  olList.appendChild(li);
  li.innerText = textList.value;
  textList.value = ""

}

function apagaTarefa () {
  target = event.target;
  if (target.classList.contains('completed')) {
    target.classList.remove('completed');
  } else {
    target.classList.add('completed');
  }
}

//Função para riscar item já concluído
function itemFinish() {
  target = event.target; // seta o target
  if (target.classList.contains('completed')) {
    // se o target já tem a classe completed
    target.classList.remove('completed'); // remove a classe completed
  } else {
    // se o target não tem a classe completed
    target.classList.add('completed'); // adiciona a classe completed
  }
}

//Apaga todos os itens da lista
function clear () {
  olList.innerText = "";
}

//Função para salvar a lista de tarefas
function save () {
  localStorage.clear();
  localStorage.setItem('saved tasks', olList.innerHTML);
}

//Event Listners
addItem.addEventListener("click", adicionaItem);
clearAll.addEventListener('click', clear);
olList.addEventListener('dblclick', apagaTarefa);
saveList.addEventListener('click', save); // listener para salvar tasks no localstorage
olList.addEventListener('dblclick', itemFinish); 