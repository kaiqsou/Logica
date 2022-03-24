/*

8 - Elaborar um algoritmo que efetue a apresentação do valor da conversão em real (R$) de um valor lido em dólar (US$). O algoritmo deverá solicitar o valor da cotação do dólar e também a quantidade de dólares disponíveis com o usuário.

*/

var c = parseFloat( prompt ( "digite a cotaçao do dolar atual") );
var d = parseFloat( prompt ( "digite quantos dolares voce possui") );
var dr = 1 * c ;
var x = dr * d;
alert("seus dolares equivalem a R$" + x);