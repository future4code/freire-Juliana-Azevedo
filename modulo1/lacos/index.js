//Exercícios de interpretação de código

//1- O que o código abaixo está fazendo? Qual o resultado impresso no console?
//resp.: Uma repetição. O resultado é 10.
/*
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
*/

// --------------------------------------------------------------

//2- Leia o código abaixo:
/*
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
*/
// a) O que vai ser impresso no console?
//resp.: vai ser impresso os números acima de 18. Que são: 19, 21, 23, 25, 27, 30

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, 
// o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
//resp.:

//-------------------------------------------------------------

//3- Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
/*
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
*/

//--------------------------------------------------------------

//Exercícios de escrita de código

//1- Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
    // a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    //resp.:

    // b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, 
    // um por um, e guarde esses nomes em um array
    //resp.:

    //c) Por fim, imprima o array com os nomes dos bichinhos no console
    //resp.:


    //---------------------------------------------------------

//2- Considere que você tenha acesso a um array  (chamado de 'array original') que é composto 
// somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, 
// realizando as operações pedidas:

// a) Escreva um programa que **imprime** cada um dos valores do array original.

// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array 
//original e **imprima** esse novo array

// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento 
//do índex `i` é: `numero`". Depois, **imprima** este novo array.

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original