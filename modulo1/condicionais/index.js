//Exercícios 1 de interpretação de código
/*
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
*/
//a) Explique o que o código faz. Qual o teste que ele realiza? 
// resp.> o código é uma condicional. Se o valor for igual a 0, 
//passa  no teste, senão, não passa no teste.

//b) Para que tipos de números ele imprime no console "Passou no teste"? 
// resp.: para 0 e numeros multiplos de 2
//c) Para que tipos de números a mensagem é "Não passou no teste"?
//resp.: qualquer número ímpar

//----------------------------------------------------------------------

//2- O código abaixo foi feito por uma pessoa desenvolvedora, contratada para 
// automatizar algumas tarefas de um supermercado:
/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
*/

// a) Para que serve o código acima?
//resp.: O código acima serve para informar o preço do produto

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//resp.: O preço da fruta maçã é R$ 2.25

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem 
//impressa no console se retirássemos o `break` que está logo acima do `default` 
// (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
//resp.: O preço da fruta Pêra é R$ 5

//-------------------------------------------------------------

//3-
/*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
*/

// a) O que a primeira linha está fazendo?
//resp.: Pedindo ao usuário um número.

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//resp.: o numero 10. sai a mensagem: Esse número passou no teste. 
//-10 é menor que 0, então se o código estivesse correto, iria para ler a mensagem secreta! mas 
//dá erro indefinido devido o erro do código. Teria que ter o else.

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco 
//ou escopo.
//resp.: Não foi inserido uma condicional para a mensagem e a variavel let mensagem não pode estar dentro do if

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// }	else{
//   console.log("Essa mensagem é secreta!!!") 
// }


//--------------------------------------------------------------

//Exercícios de escrita de código

// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console 
//    se ele/ela pode dirigir (apenas maiores de idade).
    
//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
//       Se sim, imprima no console `"Você pode dirigir"`, 
//       caso contrário, imprima `"Você não pode dirigir."`

/*
const idade = Number(prompt("Qual sua idade? "))


        if (idade>=18){
            console.log("Você pode dirigir")
        } else  if (idade<18){
            
            console.log("Você não pode dirigir.")
        }
*/

    //----------------------------------------------------------------

    //2-
    // Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar
    // M (matutino) ou V (Vespertino) ou N (Noturno). 
    // Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
/*
let turnoAula = prompt("Qual turno você estuda? M, V ou N").toLowerCase();
if (turnoAula === "m"){
    console.log("Bom dia!")
} else if (turnoAula === "v"){
    console.log("Boa tarde!") 
} else{ 
    console.log("Boa Noite")
}

*/



//-----------------------------------------------------------------------------

//3- 

/*
let turnoAula = prompt("Qual turno você estuda? M = Matutino, V = Vespertino ou N = Noturno").toLowerCase();

switch (turnoAula) {
    case "m":
        console.log("Bom dia!")
        break
    case "v":
        console.log("Boa tarde!")
        break
    case "n":
        console.log("Boa Noite")
        break
    default:
        console.log("Você digitou um turno inválido. Digite M, V ou N")
        break
}

*/
//--------------------------------------------------------------------

// 4- Considere a situação: você vai ao cinema com um amigo ou amiga, 
// porém ele/ela só assistirá a um filme com você se ele for do gênero 
// fantasia e se o ingresso está abaixo de 15 reais. Faça um código que 
// pergunta ao usuário qual o gênero de filme que vão assistir e outra p
// ergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga 
// vai topar assistir o filme. Caso positivo, imprima no console a mensagem: 
// "Bom filme!", caso contrário, imprima "Escolha outro filme :("

/*
const generoFilme = prompt("Qual o gênero do filme?")
const precoFilme = Number(prompt("Qual o preço do ingresso?"))

if (generoFilme === "fantasia" && precoFilme <= 15){
    console.log("Bom filme!");
} else if (generoFilme != "fantasia" || precoFilme > 15){
    console.log("Escolha outro filme!")
}
*/