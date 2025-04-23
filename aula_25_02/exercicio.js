

class Carro {
    constructor(marca, ano, cor, modelo, preco) {
        this.marca = marca;
        this.ano = ano;
        this.cor = cor;
        this.modelo = modelo;
        this.preco = preco;
    }

    ligar() {
        console.log(`${this.marca} está ligado!`);
    }
}

// Herança: CarroEletrico herda de Carro
class CarroEletrico extends Carro {
    constructor(marca, ano, cor, modelo, preco, nivel) {
        super(marca, ano, cor, modelo, preco); // Chama o construtor da classe pai
        this.nivel = nivel; // Novo atributo exclusivo do carro elétrico
    }

    carregarBateria() {
        console.log(`A bateria de ${this.marca} está carregando! 🔋`);
    }

    nivelBateria(){
        console.log(`O nivel da sua bateria é ${this.nivel}`);
    }
    
    listar(){
        console.log(`Este é um ${this.marca}, modelo: ${this.modelo}, ano: ${this.ano}, cor: ${this.cor} e custa: R$ ${this.preco}`);
    }
}

// Criando um carro elétrico
let meuTesla = new CarroEletrico("Tesla", 2023, "Cinza", "Model X","50.000", "100%");

meuTesla.listar();