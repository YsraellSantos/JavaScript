// criando o objeto vazio

const obj = {

}

console.log(obj)
console.log(typeof obj)

// criando objetos com propriedades e metedos

const user = {
    loguin: {
        emial: "ysraellsanos@gtmail.com",
        password: "123456",
    },
    name: {
        first_name: "Israel",
        last_name: "Santos",
        age: "25"
    },
    adress: {
        street: "Edison de santana",
        city: "São Paulo",
        state: "SP",
        zip_code: "12344-666"
    },

    maessage: function () {
        console.log("Bem vindo ao sistema " + this.name.first_name)
    }
}
// console.log(user.adress)
// console.log(user.name.first_name)


// user.maessage()


const user2 = {
    name: "Maria",

    massage: function () {
        console.log(`Bem vinda ao sistema ${user2.name}`)
    }
}

// user2.massage()

const product = {
    // property: {
    //     // name: "Teclado",
    //     // mark: "Redragon",
    //     // prici: 200.00,
    //     // quantity: 50
    // }

}



console.log(product?.property?.name)