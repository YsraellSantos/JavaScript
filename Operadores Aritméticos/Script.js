// Operadores aritiméticos
const operadoresAritiméticos = function () {
    // Soma
    let a = 10
    let b = 20
    const soma = a + b
    console.log("Soma")
    console.log(`A soma entre (${a} + ${b} é = ${soma})`)
    console.log("--------------")

    // Subtração
    let c = 30
    let d = 25
    const subtracao = c - d
    console.log("subtração")
    console.log(`A subtração entre (${c} - ${d} é = ${subtracao})`)
    console.log("--------------")

    // Multiplicação
    let e = 2
    let f = 50
    const multiplicacao = e * f
    console.log("Multiplicação")
    console.log(`A multiplicação entre (${e} x ${f} é = ${multiplicacao})`)
    console.log("---------------")

    // Divisão
    let g = 3
    let h = 90
    const divisao = h / g
    console.log("Divisão")
    console.log(`A divisão entre (${g} / ${h}) é = ${divisao})`)
    console.log("---------------")

    // Resto da Divisão
    let i = 10
    let j = 3
    const restoDaDivisao = i % j
    console.log("Resto da Divisão")
    console.log(`O resto da divisão entre (${i} % ${j}) é igual á resto ${restoDaDivisao})`)
    console.log("---------------")

    // Exponencial4
    // elevado
    let k = 5
    let l = 3
    const exponencial = k ** l
    console.log("Exponencial")
    console.log(`O valor de (${k} elevado á ${l}) é igual á ${exponencial})`)

}

// Opreadore de incremente e decremento
const operadoresDeIncrementoEDecremento = function () {

    // Incremento
    let numero = 10
    numero++
    console.log("Incremento", numero)
    ++numero
    console.log("Incremento", numero)

    // Decremento
    let numero2 = 10
    numero2--
    console.log("Decremento", numero2)
    --numero2
    console.log("Decremento", numero2)

    // Incremento mas de um valor
    let num1 = 1
    num1 = + 4
    console.log(`Valor atual ${num1} incremento de 5 resultado de ${num1 + 5}`)

    // Decremento mas de um valor
    let num2 = 10
    num2 = - 4
    console.log(`Valor atual ${num2} decremento de 5 resultado de ${num2 - 5}`)

}



const ordemPrecedencia = function () {
    /*
    =================================
           TABELA DE PRECEDÊNCIA
    =================================
    Nível | Categoria        | Operadores
    -------------------------------------
    7 (alto)  | Exponenciação     | **
    6         | Multiplicação     | *, /, %, //
    5         | Adição            | +, -
    4         | Relacional        | ==, !=, <=, >=, >, <
    3         | Lógico (NOT)      | !   Se for verdadeiro vira falso e vice-versa
    2         | Lógico (AND)      | &&  Precisa que todas sejam verdadeiras
    1 (baixo) | Lógico (OR)       | ||  So precisa que uma seja verdadeira 
    -------------------------------------
    */

    let total1 = 2 + 3 * 4
    console.log(total1)

    let total2 = (2 + 3) * 4
    console.log(total2)

    let average = (9.5 + 7 + 5) / 3
    console.log(average.toFixed(2))

    let notas = false && true
    console.log(notas)

    let notas1 = true || false
    console.log(notas1)

    let validasion = !true
    console.log(validasion)

    const user = true
    let todos = 2 ** 3 / 3 + 10 > 20 && 3 > 2
    let todos1 = 2 ** 3 / 3 + 10 > 20 || !user
    console.log(todos)
    console.log(todos1)
}

const igualDiferente = function () {
    let one = 1
    let two = 2

    console.log(one == 1)
    console.log(one == "1")
    console.log(one === "1")
    console.log(one != 1)

    console.log(two == 2)
    console.log(two == "2")
    console.log(two === "2")
    console.log(two != 2)
    console.log(two != "2")
}

const maiorMenorIgual = function () {
    let balance = 500
    let payment = 130


    // Maior que
    console.log(balance > payment)

    // Maior igual 
    console.log(balance < payment)

    balance = 130
    console.log(balance >= payment)

    console.log(payment >= balance)
}

const operadoresLogicos = function () {
    let emial = true
    let senha = true

    // AND (E) &&
    console.log(emial && senha)
    // Se os dois forem verdadeiros o resultado sera verdadeiro

    emial = true
    password = false

    // OR (OU) ||
    console.log(emial || password)
    // Se um dos dois for verdadeiro o resultado sera verdadeiro

    let city = true

    // NOT (NÃO) !
    console.log(!city)
    // Inverte o valor lógico, se for falso vira verdadeiro e vice-versa


}




const condicionaisControle = function () {



    // If
    let condicaoIF = () => {
        let idade = 16

        if (idade > 18) {
            console.log("Maior de idade")
        }

        if (idade < 17) {
            console.log("A idade é menor que 17")
        }
    }

    condicaoIF()


    let condicaoIFElse = () => {
        let idade = 20

        if (idade >= 18) {
            console.log("Maior de idade")
        } else if (idade === 18) {
            console.log("Maior de idade")
        }

        if (idade < 16) {
            console.log("Menor de 16 anos")
        }

    }

    condicaoIFElse()



}
// condicionaisControle()


const switchCase = function () {

    let idade = 13
    let categoria

    if (idade >= 0 && idade <= 1) categoria = 1
    else if (idade > 1 && idade <= 10) categoria = 2
    else if (idade > 10 && idade <= 17) categoria = 3
    else if (idade >= 18 && idade <= 35) categoria = 4
    else if (idade > 35 && idade <= 60) categoria = 5
    else categoria = 0

    switch (categoria) {
        case 1: console.log("Bebê"); break
        case 2: console.log("Criança"); break
        case 3: console.log("Adolescente"); break
        case 4: console.log("Jovem"); break
        case 5: console.log("Adulto"); break
        default: console.log("Idade não categorizada")
    }

}

// switchCase()