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

    // Exponencial
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
    num1 =+ 4
    console.log(`Valor atual ${num1} incremento de 5 resultado de ${num1 + 5}`)

    // Decremento mas de um valor
    let num2 = 10
    num2 =- 4
    console.log(`Valor atual ${num2} decremento de 5 resultado de ${num2 - 5}`)

}

operadoresDeIncrementoEDecremento()