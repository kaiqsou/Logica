/*

3) Um cliente de um banco tem um saldo positivo de R$ 500,00. Fazer um algoritmo que leia um cheque que entrou e calcule o saldo,       mostrando (escrevendo) o novo saldo na tela.

*/

var saldo = parseInt(500);
var cheque = parseInt(prompt("Digite o valor do cheque"));

var resultado = saldo + cheque;

alert("Saldo final: R$" + resultado);