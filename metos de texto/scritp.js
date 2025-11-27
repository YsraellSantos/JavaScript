const showMesssage = ("Estou estudando os fundamentos de javaScript")
console.log(showMesssage)

// Transformando em letras maiúsculas
console.log(showMesssage.toUpperCase())

// transformando em letras minúsculas
console.log(showMesssage.toLowerCase())

// Comprimento de uma string
console.log(showMesssage.length + " Constado letras e espaços")

let num = 12345
let res = num.toString()
console.log("Quantidade", res.length, ":", num)

// Ex:
let passoword = 5
console.log(passoword.toString().length)

let n = passoword.toString()

if (n.length < 5 ) {
    console.log("Senha fraca")
} else {
    console.log("Validado")
}

