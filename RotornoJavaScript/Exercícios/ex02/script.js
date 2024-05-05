window.alert("Formulario")
var idade = window.prompt("Qual é a sua idade ?\n")
var nome = window.prompt("Qual o seu nome ?\n")
var escolaridade = window.prompt("Qual a sua escolaridade ?\n")
var sonho = window.prompt("Qual é o sue sonho\n")

document.write(`My name is ${nome} tenho ${idade} anos, minha escolaridade é ${escolaridade} e meu sonho é ${sonho}`)
document.write(`your name é ${nome}`)
document.write(`your name em letras MAIUSCULAS é ${nome.toLocaleUpperCase()}`)
document.write(`your name em letras minusculas é ${nome.toLowerCase()}`)

