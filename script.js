const botaoCriarTarefa = document.getElementById('criar-tarefa');
function criarTarefa() {
  const listaTarefas = document.getElementById('lista-tarefas');
  const elementoLista = document.createElement('li');
  const tarefa = document.getElementById('texto-tarefa').value;
  document.getElementById('texto-tarefa').value = '';
  listaTarefas.appendChild(elementoLista);
  listaTarefas.lastChild.innerHTML = tarefa;
}
function verificaInput() {
  if (document.getElementById('texto-tarefa').value === '') {
    alert('Insira alguma tarefa para adicionar à sua Lista!!!');
  } else {
    criarTarefa();
  }
}
botaoCriarTarefa.addEventListener('click', verificaInput);

const itemLista = document.getElementById('lista-tarefas');
function selecionaItem(e) {
  const itemSelecionado = e.target;
  itemSelecionado.classList.toggle('selected');
}
itemLista.addEventListener('click', selecionaItem);

function riscaItem(e) {
  const itemSelecionado = e.target;
  itemSelecionado.classList.toggle('completed');
}
itemLista.addEventListener('dblclick', riscaItem);

const botaoApagaTudo = document.getElementById('apaga-tudo');
function apagaTudo() {
  document.getElementById('lista-tarefas').innerHTML = '';
}
botaoApagaTudo.addEventListener('click', apagaTudo);

const botaoRemoveFinalizados = document.getElementById('remover-finalizados');
function removerFinalizados() {
  const listaTarefas = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < listaTarefas.length; i += 1) {
    if (listaTarefas[i].classList.contains('completed')) {
      listaTarefas[i].remove();
    }
  }
}
botaoRemoveFinalizados.addEventListener('click', removerFinalizados);

const botaoRemoveSelecionado = document.getElementById('remover-selecionado');
function removerSelecionado() {
  const listaTarefas = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < listaTarefas.length; i += 1) {
    if (listaTarefas[i].classList.contains('selected')) {
      listaTarefas[i].remove();
    }
  }
}
botaoRemoveSelecionado.addEventListener('click', removerSelecionado);
