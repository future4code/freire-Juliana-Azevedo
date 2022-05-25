

function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
comissaoPorVenda = (qtdeCarrosVendidos * 100) + (valorTotalVendas * 0.05)
salarioFinalDoMes = comissaoPorVenda + 2000
return salarioFinalDoMes