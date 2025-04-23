class Veiculo {
    constructor(modelo, ano) {
        this.modelo = modelo;
        this.ano = ano;
    }
}

class Carro extends Veiculo {
    constructor(modelo, ano, marca, quilometragem, eficiencia) {
        super(modelo, ano);
        this.marca = marca;
        this.quilometragem = quilometragem; // Quilometragem total percorrida
        this.eficiencia = eficiencia; // Eficiência em km/L
        this.consumo = this.calcularConsumo(); // Calcular consumo no construtor
    }

    calcularConsumo() {
        return this.quilometragem / this.eficiencia; // Consumo em litros
    }

    exibirInformacoes() {
        console.log(`Este é um ${this.marca}, modelo: ${this.modelo}, ano: ${this.ano}, e tem o consumo de: ${this.consumo.toFixed(2)} L para ${this.quilometragem} km.`);
    }
}

class Moto extends Veiculo {
    constructor(modelo, ano, marca, quilometragem, eficiencia) {
        super(modelo, ano);
        this.marca = marca;
        this.quilometragem = quilometragem; // Quilometragem total percorrida
        this.eficiencia = eficiencia; // Eficiência em km/L
        this.consumo = this.calcularConsumo(); // Calcular consumo no construtor
    }

    calcularConsumo() {
        return this.quilometragem / this.eficiencia; // Consumo em litros
    }

    exibirInformacoes() {
        console.log(`Este é um ${this.marca}, modelo: ${this.modelo}, ano: ${this.ano}, e tem o consumo de: ${this.consumo.toFixed(2)} L para ${this.quilometragem} km.`);
    }
}

// Criando instâncias das classes Carro e Moto
let Monza = new Carro('Monza', '1982', 'Chevrolet', 120000.00, 15); // 15 km/L de eficiência
let ninja = new Moto('Ninja', '2025', 'Kawasaki', 15000.00, 20); // 20 km/L de eficiência

// Exibindo informações
Monza.exibirInformacoes();
ninja.exibirInformacoes();