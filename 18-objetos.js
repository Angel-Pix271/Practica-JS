/*
Clase 33 - Objetos
*/

// =======================================
// Objetos
// =======================================

// Sintaxis
// Un objeto es una estructura que almacena datos en formato clave → valor

let person = {
    name: "Miguel Ángel Molina Díaz",
    age: 37,
    alias: "Player"
}


// =======================================
// Acceso a propiedades
// =======================================

// Notación punto
// Se usa cuando conocemos el nombre de la propiedad
console.log(person.name)

// Notación de corchetes
// Se usa cuando el nombre de la propiedad es dinámico o viene de una variable
console.log(person["name"])


// =======================================
// Modificación de propiedades
// =======================================

// Se puede modificar el valor accediendo a la propiedad
person.name = "Miguel Ángel Molina Díaz"
console.log(person.name)

// typeof muestra el tipo de dato
console.log(typeof person.age)

person.age = "37" // Ahora es string
console.log(person.age)
console.log(typeof person.age)


// =======================================
// Eliminación de propiedades
// =======================================

delete person.age
console.log(person)


// =======================================
// Nueva propiedad
// =======================================

// Se pueden agregar propiedades dinámicamente
person.email = "correo@example.com"
person["age"] = 37

console.log(person)


// =======================================
// Métodos (funciones dentro de objetos)
// =======================================

let person2 = {
    name: "Miguel Ángel Molina Díaz",
    age: 37,
    alias: "Ángel",

    // Un método es una función dentro de un objeto
    walk: function () {
        console.log("La persona camina.")
    }
}

person2.walk()


// =======================================
// Anidación de objetos
// =======================================

let person3 = {
    name: "Miguel Ángel Molina Díaz",
    age: 37,
    alias: "Player",

    walk: function () {
        console.log("La persona camina.")
    },

    // Objeto dentro de otro objeto
    job: {
        name: "Programador",
        exp: 15,

        work: function () {
            // this hace referencia al objeto actual (job)
            console.log(`La persona con ${this.exp} años de experiencia trabaja.`)
        }
    }
}

console.log(person3)

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)

person3.job.work()


// =======================================
// Igualdad de objetos
// =======================================

let person4 = {
    name: "Miguel Ángel Molina Díaz",
    alias: "Player",
    email: "correo@example.com",
    age: 37
}

console.log(person)
console.log(person4)

// Aunque tengan el mismo contenido,
// son objetos diferentes en memoria
console.log(person == person4)
console.log(person === person4)

// Aquí sí se comparan valores primitivos
console.log(person.name == person4.name)


// =======================================
// Iteración
// =======================================

// for...in recorre las claves del objeto
for (let key in person4) {
    console.log(key + ": " + person4[key])
}


// =======================================
// Funciones como objetos (Constructor)
// =======================================

// Función constructora
// Se usa junto con "new" para crear instancias
function Person(name, age) {
    this.name = name
    this.age = age
}

let person5 = new Person("Miguel Ángel Molina Díaz", 37)

console.log(person5)
console.log(person5.name)

console.log(typeof person5) // object
console.log(typeof person4) // object