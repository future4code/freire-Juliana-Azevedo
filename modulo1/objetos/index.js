//Exercícios de interpretação de código

// 1. Leia o código abaixo
/*
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
*/
// a) O que vai ser impresso no console?
//Matheus Nachtergaele
//Virginia Cavendish
//canal: Globo, horario: 14h

// 2. Leia o código abaixo
/*
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
*/
//a) O que vai ser impresso no console?
//Resp.:
//Juca, idade: 3, raca: SRD
//Juba, idade: 3, raca: SRD
//Jubo, idade: 3, raca: SRD

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//resp.: Faz inserir os dados na lista existente.

// 3. Leia o código abaixo
/*
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}
*/
/*
const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
*/
//a) O que vai ser impresso no console?
//Resp.:
//false
//undefined 

//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
//Resp.:
//false - a informação escrita em Backender é false.
//undefined - não tem essa informação no cadastro.

//---------------------------------------------------
//Exercícios de escrita de código
//1-
// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e 
// apelidos (um array que sempre terá exatamente três apelidos). Depois, 
// escreva uma função que recebe como entrada um objeto e imprime uma mensagem 
// no modelo abaixo: 
/*
const pessoa = {
    nome: "Juliana", 
    apelidos: ["Ju", "Juli", "Juju"]
}
    console.log(`Meu nome é ${pessoa.nome}, e me chamam de ${pessoa.apelidos},
    mas gosto mesmo é de ser chamada de ${pessoa.apelidos[0]}.`)

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor 
// da propriedade nome, mas com uma nova lista de três apelidos. Depois, 
// chame a função feita no item anterior passando como argumento o novo objeto
    
    const complementoPessoa = {
        ...pessoa,
        sobreNome: "Azevedo",
        novosApelidos: ["Paty", "Patricinha", "Julipaty"]
        
    }
    console.log(`Meu nome é ${pessoa.nome} e sobrenome é ${complementoPessoa.sobreNome}. 
    Além de me chamarem de ${pessoa.novosApelidos}, chamam também de ${complementoPessoa.novosApelidos}.`)
*/
    //-------------------------------------------------
    
    //2-
    //a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

    //b) Escreva uma função que receba esses objetos e retorne um array para cada objeto com as seguintes informações:
// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`

    const pessoa1 = {
        nome: "Juliana",
        idade: 40,
        profissao: "Desenvolvedor FullStack"
         }
    const pessoa2 = {
        nome: "Eduardo",
        idade: 45,
        profissao: "Area de Financas"
    }
    funcaoObjetos = (pessoa1, pessoa2) => {
        
        console.log((`${pessoa1.nome}, ${pessoa1.nome.length}, ${pessoa1.idade}, ${pessoa1.profissao}, ${pessoa1.profissao.length}`))
        console.log((`${pessoa2.nome}, ${pessoa2.nome.length}, ${pessoa2.idade}, ${pessoa2.profissao}, ${pessoa2.profissao.length}`))
        }
    funcaoObjetos(pessoa1, pessoa2)

    //---------------------------------------------
    
    //3-
    //a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho

    //b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter 
    //as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)

    //c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. 
    // Invoque essa função passando os três objetos criados. 

    //d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos.

    let sacolao = {
        carrinho: []
    }
    const fruta1 = {
        nome: "mamao",
        disponibilidade: true
    } 
    const fruta2 = {
        nome: "laranja",
        disponibilidade: true
    }
    const fruta3 = {
        nome: "banana",
        disponibilidade: true
    }
    console.log(`${fruta1.nome}, ${fruta2.nome}, ${fruta3.nome}`)
    
    funcaoComprar = (fruta1, fruta2, fruta3) => {
        
        console.log(`Nome: ${fruta1.nome}, disponibilidade: ${fruta1.disponibilidade}`)
        console.log(`Nome: ${fruta2.nome}, disponibilidade: ${fruta2.disponibilidade}`)
        console.log(`Nome: ${fruta3.nome}, disponibilidade: ${fruta3.disponibilidade}`)
       
    }
    funcaoComprar (fruta1, fruta2, fruta3)





  