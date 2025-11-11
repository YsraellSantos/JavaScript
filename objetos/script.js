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



// console.log(product?.property?.name)


// operador de coalecencia nula
// O operador de coalescência nula (??)
//  é usado em JavaScript (e TypeScript)
//  para definir valores padrão, somente
//  quando o valor é null ou undefined.

const usuario = {
    name: "Israel",
    avatar: "Foto.png",
}

// console.log(usuario.avatar ?? "Default.png")
// Então ele verifica se existe algo dentro do avatar ou se o usuario colocou a 
// Foto ou não.

//  função construtora
let lastId = 0


function createProduct_Description(name = "", description, type) {

    lastId++ // incrementa id

    const product_Description = {
        id: lastId,
        name,
        description,
        type
    }

    product_Description.details = function () {
        console.log(`
Id: ${this.id}
Nome: ${this.name}
Descrição: ${this.description}
Tipo: ${this.type}
        `)
    }

    return product_Description
}

const product1 = createProduct_Description("Teclado", "Gamer", "Sem fio")
product1.details()

const product2 = createProduct_Description("Mouse", "RGB", "Sem fio")
product2.details()

const product3 = createProduct_Description("Monitor", "24 Polegadas", "160Hz")
product3.details()


var idCar = 0

function PersonCarros( name = "", serie = "", cor = "", motor) {
    idCar++
    const descriptionCar = {
        id: idCar,
        name,
        serie,
        cor,
        motor
    }

    descriptionCar.details1 = function () {
        console.log(`Id: ${this.id} \n
                    Nome: ${this.name} \n
                    Serie: ${this.serie} \n
                    Cor: ${this.cor} \n
                    Motor: ${this.motor}`)
    }

    return descriptionCar

}


const Basic = PersonCarros("corola", "01", "preto", "1.0")
Basic.details1()

const classic = PersonCarros("Civic", "02", "Prata", "1.8")
classic.details1()

const gold = PersonCarros("BMW M4", "03", "Amarela", "3.0")
gold.details1()



