/*
3) Um cliente de um banco tem um saldo positivo de R$ 500,00. 
   Fazer um algoritmo que leia um cheque que entrou e calcule o saldo, 
   mostrando (escrevendo) o novo saldo na tela.
*/

var saldoInicial = 500;

var valorDeposito = parseFloat(prompt("Digite o valor do cheque"));

var novoSaldo = saldoInicial + valorDeposito;

alert("Novo saldo: " + novoSaldo);