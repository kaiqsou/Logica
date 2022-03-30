/*
   8) Elaborar um algoritmo que efetue a apresentação do valor da conversão em real (R$) de um 
      valor lido em dólar (US$). O algoritmo deverá solicitar o valor da cotação do dólar e 
      também a quantidade de dólares disponíveis com o usuário.
*/

// Entradas
var cotacaoDolar = parseFloat( prompt("Digite a cotação do dolar") );
var qtdeDolares = parseFloat( prompt("Digite a quantidade de dólares") );

// Processamento
var valorConvertidoEmReal = cotacaoDolar * qtdeDolares;

// Saída
alert("Valor em reais: " + valorConvertidoEmReal);