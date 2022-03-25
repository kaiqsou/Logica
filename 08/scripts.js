/*

8 - Elaborar um algoritmo que efetue a apresentação do valor da conversão em real (R$) de um valor lido em dólar (US$). O algoritmo deverá solicitar o valor da cotação do dólar e também a quantidade de dólares disponíveis com o usuário.

*/

var cotacaoDolar = parseFloat(prompt("Digite a cotação do dólar atual"));
var dolarPossuido = parseFloat(prompt("Digite quantos dólares voce possui"));
var valorDolar = 1 * cotacaoDolar ;
var valorReal = valorDolar * dolarPossuido;
alert("Seus dólares equivalem a R$" + valorReal);