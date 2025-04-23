# Instruções
- Faça uma cópia deste arquivo .md para um repositório próprio
- Resolva as 8 questões objetivas assinalando a alternativa correta e **justificando sua resposta.**
- Resolva as 2 questões dissertativas escrevendo no próprio arquivo .md
- Lembre-se de utilizar as estruturas de código como ``esta aqui com ` `` ou
```javascript
//esta aqui com ```
let a = "olá"
let b = 10
print(a)
```
- Resolva as questões com uso do Visual Studio Code ou ambiente similar.
- Teste seus códigos antes de trazer a resposta para cá.
- Cuidado com o uso de ChatGPT (e similares), pois entregar algo só para ganhar nota não fará você aprender. Não seja dependente da máquina!
- Ao final, publique seu arquivo lista_01.md com as respostas em seu repositório, e envie o link pela Adalove. 

# Questões objetivas
**1) Considerando a execução do código abaixo, indique a alternativa correta e justifique sua resposta.**
```javascript
console.log(x);
var x = 5;
console.log(y);
let y = 10;
```
a) A saída será undefined seguido de erro - Alternativa Escolhida

b) A saída será 5 seguido de 10

c) A saída será undefined seguido de undefined

d) A saída será erro em ambas as linhas que utilizam console.log 

Justificativa: A alternativa A foi escolhida. O console.log de x é undefined pois a variável é chamada após esse comando e como VAR fazendo assim com que a variável seja inicializada porém seu valor não é passado para o console.log. No caso da variavel y ao inicializá-la como Let o escopo da mesma é limitado a aquilo que vier após a mesma, fazendo assim que o console.log não considere a variável como inicializada e consequentemente dando erro.

**2) O seguinte código JavaScript tem um erro que impede sua execução correta. Analise e indique a opção que melhor corrige o problema. Justifique sua resposta.**

```javascript
function soma(a, b) {
    if (a || b === 0) {
        return "Erro: número inválido";
    }
    return a + b;
}
console.log(soma(2, 0));
```

a) Substituir if (a || b === 0) por if (a === 0 || b === 0) - Alternativa Escolhida

b) Substituir if (a || b === 0) por if (a === 0 && b === 0)

c) Substituir if (a || b === 0) por if (a && b === 0)

d) Remover completamente a verificação if (a || b === 0)

Justificativa: A alternativa escolhida foi a A pois a ordem de verificação do script está errada, ao utilizar | | A variável b é verificada primeiro e retorna true para a condição if. Com isso a soma nunca é executada pois o if está no mesmo escopo do comando return a + b. Então a correção seria fazer com que a variável OU seja validada também como é feito na alternativa A.

______
**3) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
function calcularPreco(tipo) {
    let preco;

    switch(tipo) {
        case "eletrônico":
            preco = 1000;
        case "vestuário":
            preco = 200;
            break;
        case "alimento":
            preco = 50;
            break;
        default:
            preco = 0;
    }

    return preco;
}

console.log(calcularPreco("eletrônico"));
```

a) O código imprime 1000.

b) O código imprime 200. - Alternativa Correta

c) O código imprime 50.

d) O código gera um erro.

Justificativa: O valor impresso é 200, pois mesmo que eletrônico seja colocado como argumento, no script ao dar o comando de case para eletrônico não é colocado break. Com isso o programa segue adiante e é apenas finalizado no break presente em vestuário e consequentemente imprimindo seu valor.
______
**4) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b, 0);

console.log(resultado);
```
a) 0

b) 6

c) 18

d) 24 - Alternativa Escolhida

Justificativa: o método map multiplica cada número do array por 2, gerando [2, 4, 6, 8, 10]. O método filter ira filtrar no array apenas os números maiores que 5 [6,8,10]. Por fim o método reduce soma todos os elementos restantes do array 6 + 8 + 10 = 24
______
**5) Qual será o conteúdo do array lista após a execução do código? Indique a alternativa correta e justifique sua resposta.**

```javascript
let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista);
```

a) ["banana", "maçã", "uva", "abacaxi", "manga", "laranja"]

b) ["banana", "abacaxi", "manga"]

c) ["banana", "abacaxi", "manga", "laranja"] - Alternativa escolhida

d) ["banana", "maçã", "uva", "abacaxi", "manga"]

Justificativa: Ao utilizar o método splice seguido dos argumentos 1 e 2, é interpretado que devem ser removidos dois itens do array começando pelo index 1 (representa a segunda posição) e que desse início devem ser excluídos 2 itens ( maçã e uva). Após isso ao colocar Abacaxi e manga, é interpretado que em seguida da remoção realizada devem ser adicionados dois itens em sequência no final do array.
______
**6) Abaixo há duas afirmações sobre herança em JavaScript. Indique a alternativa correta e justifique sua resposta**

I. A herança é utilizada para compartilhar métodos e propriedades entre classes em JavaScript, permitindo que uma classe herde os métodos de outra sem a necessidade de repetir código.  
II. Em JavaScript, a herança é implementada através da palavra-chave `extends`.


a) As duas afirmações são verdadeiras, e a segunda justifica a primeira. - Alternativa Escolhida

b) As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.

c) A primeira afirmação é verdadeira, e a segunda é falsa.

d) A primeira afirmação é falsa, e a segunda é verdadeira.

Justificativa: A herança em JavaScript permite compartilhar métodos e propriedades entre classes, evitando a repetição de código e facilitando a reutilização e manutenção. Isso é feito por meio da palavra-chave extends, que possibilita que uma classe (filha) herde características de outra (pai).
______
**7) Dado o seguinte código. Indique a alternativa correta e justifique sua resposta.**

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
  }

  apresentar() {
    super.apresentar();
    console.log(`Meu salário é R$ ${this.salario}.`);
  }
}
```


I) A classe Funcionario herda de Pessoa e pode acessar os atributos nome e idade diretamente.  
II) O método `apresentar()` da classe Funcionario sobrepõe o método `apresentar()` da classe Pessoa, mas chama o método da classe pai usando `super`.  
III) O código não funciona corretamente, pois Funcionario não pode herdar de Pessoa como uma classe, já que o JavaScript não suporta herança de classes.

Quais das seguintes afirmações são verdadeiras sobre o código acima?

a) I e II são verdadeiras. - Alternativa Escolhida

b) I, II e III são verdadeiras.

c) Apenas II é verdadeira.

d) Apenas I é verdadeira.

Justificativa: A alternativa I é verdadeira pois quando a classe funcionário estende a classe pessoa ela consequentemente herda todos os argumentos da classe através do construtor super e também ao ser utilizado this. A alternativa II é verdadeira pois o construtor super faz com que o método apresentado da classe pai seja executado antes do método apresentar da classe filha, e ao compilar o resultado final, aquilo que foi executado por último é a saída final. A alternativa III é falsa pois o javascript suporta a herança de classes.
______

**8) Analise as afirmações a seguir. Indique a alternativa correta e justifique sua resposta.**

**Asserção:** O conceito de polimorfismo em Programação Orientada a Objetos permite que objetos de diferentes tipos respondam à mesma mensagem de maneiras diferentes.  
**Razão:** Em JavaScript, o polimorfismo pode ser implementado utilizando o método de sobrecarga de métodos em uma classe.

a) A asserção é falsa e a razão é verdadeira.

b) A asserção é verdadeira e a razão é falsa.

c) A asserção é verdadeira e a razão é verdadeira, mas a razão não explica a asserção. - Alternativa Escolhida

d) A asserção é verdadeira e a razão é verdadeira, e a razão explica a asserção.

- Justificativa: A Programação Orientada a Objetos (POO) e permite que diferentes classes implementem métodos com o mesmo nome, mas com comportamentos diferentes. Isso significa que um mesmo método pode ser chamado em diferentes objetos, e cada objeto pode responder de maneira apropriada ao seu tipo. A sobrecarga de métodos é frequentemente simulada através de verificações de tipo ou número de argumentos dentro de um único método. Portanto, a razão é verdadeira, mas não é a forma típica de se referir ao polimorfismo em JavaScript, que é mais frequentemente implementado através de herança e métodos sobrescritos.
______

# Questões dissertativas
9) O seguinte código deve retornar a soma do dobro dos números de um array, mas contém erros. Identifique os problema e corrija o código para que funcione corretamente. Adicione comentários ao código explicado sua solução para cada problema.

```javascript
function somaArray(numeros) {

    for (i = 0; i < numeros.size; i++) {
        soma = 2*numeros[i];
    }
    return soma;
}
console.log(somaArray([1, 2, 3, 4]));
```
Justificativa: 
```javascript

function somaArray(numeros) {
    let soma = 0; // Inicializa a soma
    for (let i = 0; i < numeros.length; i++) { // Usa length para obter o tamanho do array
        
    
        soma += 2 * numeros[i]; // Acumula o dobro      
        
    }
    return soma; // Retorna a soma total
}

console.log(somaArray([1, 2, 3, 4])); // resultado final 20
```
______
10) Crie um exemplo prático no qual você tenha duas classes:

- Uma classe `Produto` com atributos `nome` e `preco`, e um método `calcularDesconto()` que aplica um desconto fixo de 10% no preço do produto.
- Uma classe `Livro` que herda de `Produto` e modifica o método `calcularDesconto()`, aplicando um desconto de 20% no preço dos livros.

Explique como funciona a herança nesse contexto e como você implementaria a modificação do método na classe `Livro`.

Resposta: 
```javascript



class Produto{
    constructor(nome,preco){
      this.preco = preco;
      this.nome = nome;
    }
        
        calcularDesconto(){ 
            this.desconto = this.preco * 0.10;
            this.valor_final = this.preco - this.desconto
            return this.valor_final;
   
        }    

}

class Livros extends Produto {
    constructor(nome,preco){
        super(nome,preco)

    }

    calcularDesconto(){
        super.calcularDesconto()
        this.desconto = this.preco * 0.20;
        this.valor_final = this.preco - this.desconto
        return this.valor_final;
    }

}
var meuProduto = new Produto("Banana",10)
var meuLivro = new Livros("Harry Potter0", 150)
console.log(meuProduto.calcularDesconto())
console.log(meuLivro.calcularDesconto())

```
A classe livro herda da classe Preco, nome e preço através de this.nome e this.preco, assim como herda também o método calcularDesconto(). Entretanto nesse caso ao utilizar o constructor super no método calcularDesconto() o metodo presente na classe pai é inicializado primeiro e consequentemente é sobreposto pelo método presente na classe filha. Porém ao criar um novo Produto e chamar o método calcularDesconto() presente na classe Pai, o desconto é de 10% pois o método ainda não foi sobreposto. Já no caso da criação de um novo Livro, como o método calcularDesconto()já foi sobreposto, pois para o cálculo do desconto é chamado o método presente na classe filha, o desconto é de 20%


