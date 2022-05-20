//Exercícios de interpretação de código
/*
//1-
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })
*/
 // a) O que vai ser impresso no console?
 //resp.: vai ser impresso cada item separadamente por 3 vezes,

 //-------------------------------------------------------
/*
//2-
 const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)
*/
  //a) O que vai ser impresso no console?
  //resp.: ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

  //-------------------------------------------------------

  //3- 
/*
  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)
*/
  //a) O que vai ser impresso no console?
  //resp.: vai ser impresso a lista, menos o item que contenha a nome Chijo.

  //------------------------------------------------------

  //Exercícios de escrita de código

//   Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
//   realize as operações pedidas nos itens abaixo utilizando as funções de 
//   array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// a) Crie um novo array que contenha apenas o nome dos doguinhos

// const nomePets = pets.map((pet, marca, array) => {
//     return pet.nome
// })
// console.log(nomePets)


// b) Crie um novo array apenas com os 
// [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)

// const racaPets = pets.filter((pet, marca, array) => {
//     return pet.raca === "Salsicha"
// })
// console.log(racaPets)


// c) Crie um novo array que possuirá mensagens para enviar para todos os 
// clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de 
// desconto de 10% para tosar o/a `[NOME]`!"
/*
const racaPoodle = pets.filter((pet) => {
    if(pet.raca === "Poodle") {
        return pet
    }
})
const descontoPoodle = racaPoodle.map((pet, marca, array) => {
    
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`
})
console.log(descontoPoodle)
*/

//-----------------------------------------------------------------------

//2- Dado o seguinte array de produtos, realize as operações pedidas nos itens 
//abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// a) Crie um novo array que contenha apenas o nome de cada item

// const nomeProdutos = produtos.map((item, indice, valor, array) => {
//         return item.nome
//     })
//     console.log(nomeProdutos)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada 
//item, aplicando 5% de desconto em todos eles

const descontoProd = produtos.map((item) => {
    return {Produto: item.nome, preço: item.preco*0.05}
})
console.log(descontoProd)


// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// const descontoProd = produtos.map((item) => {
//         return {Produto: item.categoria}
//     })
//     console.log(descontoProd);

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a 
//palavra "Ypê"

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
//Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"