// criar tarefa
// criar elemento li filho do ol
// inserir html do input
// limpar input
console.log("link on?")

function criarTarefas () {
	let filha = document.createElement("li");
	const tarefa = document.querySelector("#texto-tarefa").value;
	filha.innerHTML = tarefa;
 	document.getElementById("lista-tarefas").appendChild(filha);
	document.querySelector("#texto-tarefa").value="";
};

document.getElementById("criar-tarefa").addEventListener("click", criarTarefas);

// clicar elemento da lista (selecionado) alterar fundo para cinza rgb(128,128,128) e voltar

function selecaoitem (event){
	let item = event.target;
	if(item.classList.contains('selected')){
		item.classList.remove('selected');
	}
	else{item.classList.add('selected')};
};

document.getElementById("lista-tarefas").addEventListener("click", selecaoitem);

// clicar duas vezes no elemento comlpetado da lista riscar ele e conseguir voltar

function completedItem (event){
	let Citem = event.target;
	if(Citem.classList.contains('completed')){
		Citem.classList.remove('completed');
	}
	else{Citem.classList.add('completed')};
};

document.getElementById("lista-tarefas").addEventListener("dblclick", completedItem);

// criar botão que apaga completos

function apagaCompletos () {
	let completosFim = document.getElementsByClassName("completed");
	for (let i = completosFim.length -1; i >= 0; i -=1){
		completosFim[i].remove();
	}
};

document.getElementById("remover-finalizados").addEventListener("click", apagaCompletos);
