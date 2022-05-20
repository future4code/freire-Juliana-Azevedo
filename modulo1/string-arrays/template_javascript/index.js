/* //ok!
//Exercicio 1 de interpretação de código

let array
console.log('a. ', array)
// underfined
array = null
console.log('b. ', array)
//null
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//11
let i = 0
console.log('d. ', array[i])
//3
array[i+1] = 19
console.log('e. ', array)
// (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const valor = array[i+6]
console.log('f. ', valor)
//9
*/

/* //ok!
//Exercicio 2 de interpretação de código

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// SUBI NUM ÔNIBUS EM MIRROCOS? 
*/

/* 
//Exercícios 1 de escrita de código

//ok!

const nomeUsuario = prompt("Digite seu nome:")
const emailUsuario = prompt("Digite seu email aqui:")

console.log ("O email", emailUsuario, "foi cadastrado com sucesso. Seja bem vindo(a)", nomeUsuario)
*/

//___________________________________________________________

//Exercícios 2 de escrita de código

/* //ok!
const comidasPreferidas = ["pizza", "risoto", "massa", "churrasco", "sanduiche"]
console.log(comidasPreferidas)
*/

/* //ok!
let comidasPreferidas = ["pizza", "risoto", "massa", "churrasco", "sanduiche"]

console.log ("Essas são as minhas comidas preferidas:")
console.log(comidasPreferidas);
console.log(comidasPreferidas[0]);
console.log(comidasPreferidas[1]);
console.log(comidasPreferidas[2]);
console.log(comidasPreferidas[3]);
console.log(comidasPreferidas[4])

*/

comidasPreferidas = ["pizza", "risoto", "massa", "churrasco", "sanduiche"]
let usuarioComida = prompt("Qual sua comida preferida?")
console.log(comidasPreferidas);
console.log(comidasPreferidas[0]);
console.log(comidasPreferidas[1]);
console.log(comidasPreferidas[2]);
console.log(comidasPreferidas[3]);
console.log(comidasPreferidas[4]);

comidasPreferidas.push(usuarioComida)

comidasPreferidas = usuarioComida.toLowerCase()
console.log("Essas são as minhas comidas preferidas: ", comidasPreferidas)




/*
//Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista.

const usuarioComida = prompt("Qual sua comida preferida?")
console.log(usuarioComida)

const comidasPreferidas = ["pizza", "risoto", "massa", "churrasco", "sanduiche"]
const comidasPreferidas = usuarioComida.replaceAll([1], usuarioComida)
console.log(comidasPreferidas)
*/
//--------------------------------------------------------------

/*
//Exercícios 3 de escrita de código

const array = []
const listaTarefa1 = prompt("Digite uma tarefa")
const listaTarefa2 = prompt("Digite outra tarefa")
const listaTarefa3 = prompt("Digite mais uma tarefa")

let listaDeTarefas = [listaTarefa1, listaTarefa2, listaTarefa3]

console.log(listaDeTarefas)

let tarefaDoUsuario = prompt("Qual das tarefas foi realizado? (0, 1 ou 2)")
let i = tarefaDoUsuario
listaDeTarefas.splice(i, 1)

console.log(listaDeTarefas)
*/