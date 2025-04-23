let listaDeTarefas = []

listaDeTarefas.push('Estudar');
listaDeTarefas.push('Fazer Exercicios');
listaDeTarefas.push('Ler');
listaDeTarefas.unshift('Compras');
listaDeTarefas.splice(2,0, 'Reunião');
listaDeTarefas.push('Pagar')



console.log('Numero total de tarefas: ', listaDeTarefas.length);
console.log(listaDeTarefas);
