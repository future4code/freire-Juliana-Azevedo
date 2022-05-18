// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt("Digite altura:");
  const largura = prompt("Digite largura:");
  console.log(altura*largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("Digite o ano atual");
  const anoDeNasc = prompt("Digite seu ano de nascimento:");
  console.log(anoAtual-anoDeNasc)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const IMC = peso/(altura*altura);
  return IMC

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual seu nome?");
  const idade = prompt("Qual sua idade?");
  const email = prompt("Qual seu email?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite primeira cor favorita:");
  const cor2 = prompt("Digite a segunda cor favorita:");
  const cor3 = prompt("Digite a terceira cor favorita:");
  const coresFavoritas = [cor1, cor2, cor3];
  console.log(coresFavoritas)
  
  
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const ingressos = custo/valorIngresso;
  return ingressos

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const frase1 = string1.lenght
  const frase2 = string2.lenght
  return string1.length == string2.length


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  
  return array [array.length -1]

}



// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const ultimoElemento = array[array.length -1]
  const primeiroElemento = array[0]
  array[0] = ultimoElemento
  array[array.length-1] = primeiroElemento

  return array
}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let primeiroString = string1.toUpperCase()
  let segundoString = string2.toUpperCase()
  let resutado = primeiroString == segundoString
  return resutado

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual = Number(prompt("digite o ano atual"))
  let anoDeNascimento = Number(prompt("Qual seu ano de nasimento?"))
  let anoCarteira = Number(prompt("Digite a data de emissão da sua identidade:"))
  let idade = anoAtual - anoDeNascimento
  let idadeCarteira = anoAtual - anoCarteira
  let pessoaMaisNova = (idade <= 20) && (idadeCarteira >=5) 
  let pessoasMelhorFase = (idade > 20) && (idade <= 50) && (idadeCarteira >= 10)
  let pessoaExperiente = (idade > 50) && (idadeCarteira > 15)
  let renovacao = pessoaMaisNova || pessoasMelhorFase || pessoaExperiente

  return console.log(renovacao)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {

  let idade = prompt("Você tem mais de 18 anos?")

  let ensino = prompt("Você possui ensino médio completo?")
  let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  let resposta = idade == ensino == disponibilidade
  
  return console.log(resposta) 
}
