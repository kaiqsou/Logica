var valorCustoFabrica = parseFloat(prompt("Digite o custo de fábrica"));

var percentualRevendedor = 0.25;
var percentualImpostos = 0.45;

var valorRevendedor = valorCustoFabrica * percentualRevendedor;
var valorImpostos = valorCustoFabrica * percentualImpostos;
var valorFinal = valorCustoFabrica + valorRevendedor + valorImpostos;

console.log("Valor final: " + valorFinal);