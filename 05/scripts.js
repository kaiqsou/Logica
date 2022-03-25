/*

5 - Construa um algoritmo que leia o nome de um aluno e três notas obtidas durante o semestre, ao final mostre o nome do aluno e a média aritmética das notas.

*/

var nomeAluno = prompt("Digite o seu nome");

var notaum = parseFloat(prompt("Digite a nota 1"));
var notadois = parseFloat(prompt("Digite a nota 2"));
var notatres = parseFloat(prompt("Digite a nota 3"));

var media = (notaum + notadois + notatres) / 3;

alert("Olá, " + nomeAluno + "!");
alert("A sua média final nesse ano foi: " + media); 