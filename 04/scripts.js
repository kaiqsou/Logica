/*

4 - Considerando que para um consórcio, sabe-se o número total de prestações, a quantidade de prestações pagas e o valor atual da prestação, escreva um algoritmo que determine o total pago pelo consorciado e o saldo devedor. 

*/

var numerodeparcelas = parseInt("60");
var quantidadepaga = parseInt("24");
var valordaparcela = parseInt("530");

var saldopago = quantidadepaga * valordaparcela
var saldoapagar = (numerodeparcelas - quantidadepaga) * valordaparcela

alert("Saldo pago: " + saldopago + " reais");
alert("Saldo a pagar: " + saldoapagar + " reais");