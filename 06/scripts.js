/*

6 - O custo ao consumidor de um carro novo, é a soma do custo de fábrica com a percentagem do revendedor e com o custo dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do revendedor seja de 25% do custo de fábrica e que os impostos custam 45 % do custo de fábrica, faça um algoritmo que leia o valor de custo de fábrica e determine o preço final do automóvel (custo ao consumidor)

*/

var custofabrica = parseInt("74000");
var porcentagemrevendedor = custofabrica * 0.25;
var imposto = custofabrica * 0.45;

var valorfinal = porcentagemrevendedor + imposto + custofabrica;

alert("Valor Final: " + valorfinal);