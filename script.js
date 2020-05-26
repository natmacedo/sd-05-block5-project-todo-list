const botaoCriarTarefa = document.getElementById('criar-tarefa');
// Essa função cria um item na lista de tarefas e insere o texto do input
function criarTarefa() {
  const listaTarefas = document.getElementById('lista-tarefas');
  const elementoLista = document.createElement('li');
  const tarefa = document.getElementById('texto-tarefa').value;
  document.getElementById('texto-tarefa').value = '';
  listaTarefas.appendChild(elementoLista);
  listaTarefas.lastChild.innerHTML = tarefa;
}
// Função para verificar se o input está vazio antes de adicionar um item
function verificaInput() {
  if (document.getElementById('texto-tarefa').value === '') {
    alert('Insira alguma tarefa para adicionar à sua Lista!!!');
  } else {
    criarTarefa();
  }
}
botaoCriarTarefa.addEventListener('click', verificaInput);

const itemLista = document.getElementById('lista-tarefas');
// adiciona a classe 'selected' ao item clicado
function selecionaItem(e) {
  const itemSelecionado = e.target;
  itemSelecionado.classList.toggle('selected');
}
itemLista.addEventListener('click', selecionaItem);

// risca o item clicado duas vezes
function riscaItem(e) {
  const itemSelecionado = e.target;
  itemSelecionado.classList.toggle('completed');
}
itemLista.addEventListener('dblclick', riscaItem);

const botaoApagaTudo = document.getElementById('apaga-tudo');
// função para limpar todos os itens
function apagaTudo() {
  document.getElementById('lista-tarefas').innerHTML = '';
}
botaoApagaTudo.addEventListener('click', apagaTudo);

const botaoRemoveFinalizados = document.getElementById('remover-finalizados');
// função para remover os itens com a classe 'completed'
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
// função que remove os itens com a classe 'selected'
function removerSelecionado() {
  const listaTarefas = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < listaTarefas.length; i += 1) {
    if (listaTarefas[i].classList.contains('selected')) {
      listaTarefas[i].remove();
    }
  }
}
botaoRemoveSelecionado.addEventListener('click', removerSelecionado);

// Função para armazenar a lista no localStorage
const botaoSalvarTarefas = document.getElementById('salvar-tarefas');
function salvarTarefas() {
  const listaTarefas = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('tarefas', listaTarefas);
  alert('Lista Salva com Sucesso!!!');
}
botaoSalvarTarefas.addEventListener('click', salvarTarefas);

// Função para mudar a ordem de algum item na lista
const botaoParaCima = document.getElementById('mover-cima');
let qtdSelecionado = 0;
function verificaQtdeSelecionados() {
  qtdSelecionado = 0;
  const listaTarefas = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < listaTarefas.length; i += 1) {
    if (listaTarefas[i].classList.contains('selected')) {
      qtdSelecionado += 1;
    }
  }
}
function moverParaCima(e) {
  verificaQtdeSelecionados();
  if (qtdSelecionado > 1) {
    alert("Selecione apenas um item para mover");
  } else {
    const itemSelecionado = document.querySelector('#lista-tarefas .selected');
    if (itemSelecionado.previousElementSibling !== null) {
      const itemAnterior = itemSelecionado.previousElementSibling;
      const conteudoAnterior = itemAnterior.innerText;
      itemAnterior.innerText = itemSelecionado.innerText;
      itemSelecionado.innerText = conteudoAnterior;
      itemSelecionado.classList.toggle('selected');
      itemAnterior.classList.toggle('selected');
    } else {
      alert('O ítem selecionado já é o primeiro da lista');
    }
  }
}
botaoParaCima.addEventListener('click', moverParaCima);

const botaoParaBaixo = document.getElementById('mover-baixo');
function moverParaBaixo(e) {
  verificaQtdeSelecionados();
  if (qtdSelecionado > 1) {
    alert("Selecione apenas um item para mover");
  } else {
    const itemSelecionado = document.querySelector('#lista-tarefas .selected');
    if (itemSelecionado.nextElementSibling !== null) {
      const itemPosterior = itemSelecionado.nextElementSibling;
      const conteudoPosterior = itemPosterior.innerText;
      itemPosterior.innerText = itemSelecionado.innerText;
      itemSelecionado.innerText = conteudoPosterior;
      itemSelecionado.classList.toggle('selected');
      itemPosterior.classList.toggle('selected');
    } else {
      alert('O ítem selecionado já é o último da lista');
    }
  }
}
botaoParaBaixo.addEventListener('click', moverParaBaixo);

// carrega a lista salva no local storage, se houver
function initi() {
  document.getElementById('lista-tarefas').innerHTML = localStorage.getItem('tarefas');
}
window.onload = initi;
