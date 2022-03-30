/*
    10) Elabore um algoritmo que leia dois valores inteiros, A e B, e apresente os valores trocados, ou seja, 
       que troque o valor da variável A pelo valor da variável B e vice-versa.
*/
// Entradas
var a = parseInt( prompt("Digite o valor de A") ); 
var b = parseInt( prompt("Digite o valor de B") ); 

// Processamento
var c = a;
a = b;
b = c;

// Saída
console.log("Valor de A: " + a + " | Valor de B " + b);

// --------
// a --> 20
// b --> 10
// c --> 10

