/*

9 - Faça um algoritmo que leia uma temperatura em Graus Fahrenheits e mostre a temperatura em Graus Celsius. Para isso pesquise a fórmula na internet.

*/

var fahrenheits = parseFloat(prompt ("Digite o valor em Fahrenheits (apenas números)") );
var celsius = (fahrenheits -32) * 0.55;
alert(fahrenheits + "°F é igual a: " + celsius + "° Graus celsius");