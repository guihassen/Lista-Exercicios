var banana = 17 ;
var desconto_1 = 0.25

var maca= 20 ;
var desconto_2 = 0.15

var pera = 6 ;
var desconto_3 = 0.07 ;

var laranja = 12;
var desconto_4 = 0.13 ;

function calcularDesconto(preco, desconto){
    descontoFinal = preco - preco * desconto ;
    return descontoFinal ;
}

console.log("ORIGINAL: ", banana, "Desconto:", desconto_1, "Preço Final:", calcularDesconto(banana,desconto_1));
console.log("ORIGINAL: ", maca, "Desconto:", desconto_2, "Preço Final:", calcularDesconto(maca,desconto_2));
console.log("ORIGINAL: ", pera, "Desconto:", desconto_3, "Preço Final:", calcularDesconto(pera,desconto_3));
console.log("ORIGINAL: ", laranja, "Desconto:", desconto_4, "Preço Final:", calcularDesconto(laranja,desconto_4));