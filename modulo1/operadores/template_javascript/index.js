// Exercício 1 de interpretação
/*
const bool1 = true
const bool2 = false
const bool3 = !bool2
let resultado = bool1 && bool2
console.log("a. ", resultado) 
// a) false
resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
// b) false
resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) 
// c) true
console.log("d. ", typeof resultado) 
//  d) boolean
*/
//------------------------------------------------
/*
//Exercício 2 de interpretação


let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")


const soma = primeiroNumero + segundoNumero

console.log(soma)

*/  

//------------------------------------------------

//Exercício 3 de interpretação

//Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const resultadoSoma = primeiroNumero + segundoNumero

console.log(resultadoSoma) 

//--------------------------------------------------


//Exercícios de escrita de código
// 1 -
/*
let nome = prompt("Qual o seu nome?")
let idade = prompt("Qual sua idade?")
const nome = 'Julia
const nascimento = 1981
const anoAtual = 2022
const idade =anoAtual-nascimento

console.log('Olá ' + nome);
console.log('idade: ', idade );
console.log('Maior de 18 ', idade >18);
console.log('Quantos anos terá em 2050?: ', 2050 - nascimento);

*/
// 2- 








// 3- 
/*
const idade = Number (prompt("Qual sua idade?"))
const meses = 12
const dias = idade * 365
const horas = dias * 24

console.log (idade * 12)
console.log (dias)
console.log (horas)
*/







//4 -
/*
const num1 = Number (prompt ("escreva um numero"))
const num2 = Number (prompt ("escreva outro numero"))

console.log("O primeiro numero é maior que segundo?", num1 > num2)
console.log ("O primeiro numero é igual ao segundo?", num1 === num2)
console.log ("O primeiro numero é divisível pelo segundo?", num1 % num2 == 0)
console.log  ("O segundo numero é divisível pelo primeiro?", num2 % num1 == 0)
40*/














/*


console.log("Olá turma Freire")
console.log("SOMA")
const primeiroValor= 20
const segundoVavor = '10'

const soma = primeiroValor+ segundoVavor + 4

console.log(soma);
console.log("------------")
console.log("SUBTRAÇÃO")
const primeiroValorSub= '20'
const segundoVavorSub = 30

const subtracao = primeiroValorSub - segundoVavorSub

console.log(subtracao);
console.log("------------")

console.log("MULTIPLICAÇÃO")
const primeiroValorMult= '20'
const segundoVavorMult = 30

const multiplicacao = primeiroValorMult * segundoVavorMult

console.log(multiplicacao );
console.log("------------")

console.log("DIVISÃO")
const primeiroValorDiv= 20.5
const segundoVavorDiv = 30

const divisao= primeiroValorDiv / segundoVavorDiv

console.log(20.5/30 , divisao.toFixed(4));
//toFixed - limita o numero de casas decimais
console.log("------------")


console.log("MOD, ou resto da divisão")
const primeiroValorMod= 11
const segundoVavorMod = 4

const RestoDaDivisao= primeiroValorMod % segundoVavorMod

console.log(RestoDaDivisao);
console.log("------------")
console.log('CONTADOR');
 let contador = 100

 contador = contador +20
 contador = contador -10
 contador = contador *5
 contador/=10
 contador++ //EXTRA - soma 1
 console.log(contador);


// Exercício 1 

// Somar 3 com 4
// Multiplicar 3 com 5 e dividir o resultado por 2
// Subtrair 5 de 4 e multiplicar o resultado por -1
// Determinar o resto da divisão de 234 por 5


const somar = 3 + 4
console.log('somar',somar)

const multiplicarEDividir= (3*5)/2
console.log('multiplicarEDividir',multiplicarEDividir)

const subtrairEmultiplicar = (4-5)*-1

console.log('subtrairEmultiplicar',subtrairEmultiplicar);

const restoDaDivisao = 234 % 5
console.log('restoDaDivisao ',restoDaDivisao );

// Exercício 2 
// Crie duas variáveis que guardem dois números. Imprima na tela as seguintes mensagens:

// O primeiro número é igual ao segundo? True/False
// O primeiro número é diferente do segundo? True/False
// O primeiro número é maior que o segundo? True/False
// O primeiro número é menor que o segundo? True/False

const num1 = 20

const num2 = 21

const igualdade = num1 === num2

console.log( "primeiro numero é igual a  segundo número", igualdade );

const diferença = num1 !== num2

console.log( "primeiro numero é diferente do segundo número", diferença );

const maior = num1 > num2

console.log( "primeiro numero é maior que o segundo número", maior );

const menor = num1 < num2

console.log( num1 + " é menor que o " + num2,   menor );

console.log("7" >= "7") ;

const a = true
const b = false
const c = true

console.log("&&", a && b && c);

const idade18 = true
const alfabetizado = true


console.log("&&", idade18 && alfabetizado);

const idade65 = false
const maisDe30AnosTrabalhando = true


console.log("||", idade65  || maisDe30AnosTrabalhando);

const negacao = false
console.log(!negacao);


// exercício 5
// Faça um programa que receba o nome, ano de nascimento de uma pessoa e o ano atual e mostre:	
// O nome da pessoa com um olá
// A idade dessa pessoa
// Um true ou false que diz se ela é maior de idade
// Quantos anos ela terá em 2050

const nome = 'Julia'
const nascimento = 2000
const anoAtual = 2022
const idade =anoAtual-nascimento

console.log('Olá ' + nome);
console.log('idade: ', idade );
console.log('Maior de 18 ', idade >18);
console.log('Quantos anos terá em 2050?: ', 2050 - nascimento);
*/