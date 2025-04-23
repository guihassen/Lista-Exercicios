//adicionando notas do aluno
var notas = [8.5, 9.0, 10];

var indice = 0;

var soma = 0;

// calculando medias

for (indice; indice < notas.length; indice++){

    //somando as notas
    soma += notas[indice] ;
}

//calculo da media final do aluno
media = soma/notas.length

aprovado = media >= 7;

if ('aprovado == true'){
    console.log('Suas notas foram: ', notas); 
    console.log('Parabéns! Voce foi aprovado com média: ', media.toFixed(2));
} else {
    console.log("Suas notas foram: ", notas);
    console.log("Infelizmente você não foi aprovado! Sua média foi: ",media.toFixed(2));
}