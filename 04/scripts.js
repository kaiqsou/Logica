// 4 - Considerando que para um consórcio, sabe-se o número total de prestações, a quantidade de prestações pagas e o valor atual da prestação, escreva um algoritmo que determine o total pago pelo consorciado e o saldo devedor.

var valortotalPrestacoes = parseInt(prompt("Digite o valor total"));
var totalPrestacoes = parseInt(prompt("Digite o total de prestações"));
var pagasp = parseInt(prompt("Digite a quantidade de prestações pagas"));
var valorat = valortotalPrestacoes / totalPrestacoes
var aPagar = (totalPrestacoes - pagasp) * valorat
var pagou = pagasp * valorat

alert("Você pagou R$" + pagou + " e deve R$" + aPagar);