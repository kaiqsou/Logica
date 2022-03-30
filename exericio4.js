// Exercício 4
var numeroTotalPrestacoes = parseInt(prompt("Digite o número total de prestações"));
var qtdePrestacoesPagas = parseInt(prompt("Digite a qtde de prestações pagas"));
var valorPrestacao = parseInt(prompt("Digite o valor das prestações"));

var totalPago = valorPrestacao * qtdePrestacoesPagas;
var valorTotalConsorcio = valorPrestacao * numeroTotalPrestacoes;
var saldoDevedor = valorTotalConsorcio - totalPago;

alert("Total pago: " + totalPago + " | Saldo devedor: " + saldoDevedor);
