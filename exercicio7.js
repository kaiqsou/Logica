var nomeVendedor = prompt("Digite o seu nome");
var salarioFixo = parseFloat(prompt("Digite o salário fixo"));
var totalVendas = parseFloat(prompt("Digite o valor total de vendas no mês"));

var percentualComissao = 0.15;
var valorComissao = totalVendas * percentualComissao;
var salarioFinal = salarioFixo + valorComissao;

console.log("Nome: " + nome);
console.log("Salário fixo: " + salarioFixo);
console.log("Salário final: " + salarioFinal);
