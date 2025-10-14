function variaveisVar() {
    // Var
    // Declarando uma variável sem valor
    var user
    console.log(user)

    // Declarando uma variável com valor
    var email = "maria@gmail.com"
    console.log(email)

    // Sustentando o valor da variável
    email = "ysraelsnos@gmail.com"
    console.log(email)
}

function variaveisLet() {
    // Declarando uma variável sem valor
    let user
    console.log(user)

    //  Ele não permite redeclarar a variável
    let email = "Anne@gmail.com"
    console.log(email)

    // Permite que o valor da variável seja alterado   
    email = "ysraelsanos@gmail.com"
    console.log(email)

    // O let nao perminte que você redeclare a variável

}


function variaveisConst() {
    // Const não permite que o valor seja alterado 
    const number = 20
    console.log(number)

    number = 50
    /*Aqui ele ja da erro no console, pois o valor que foi atribuido a cosnt não 
     pode ser alterado*/
}

variaveisConst()
