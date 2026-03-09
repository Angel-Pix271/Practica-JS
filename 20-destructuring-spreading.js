/*
Clase 35 - Desestructuración y propagación
*/

// =======================================
// Datos iniciales
// =======================================

// Array de ejemplo
let myArray = [1, 2, 3, 4]

// Objeto con información personal
let person = {
    name: "Miguel Ángel Molina Díaz",
    age: 37,
    alias: "Player"
}


// =======================================
// Acceso tradicional
// =======================================

// Acceso a un elemento del array por índice
let myValue = myArray[1]
console.log(myValue)

// Acceso a una propiedad del objeto
let myName = person.name
console.log(myName)


// =======================================
// Desestructuración
// =======================================

// La desestructuración permite extraer valores
// de arrays u objetos y guardarlos directamente
// en variables.

// ---------------------------------------
// Sintaxis con arrays
// ---------------------------------------

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray

console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)


// ---------------------------------------
// Arrays con valores predeterminados
// ---------------------------------------

// Si el array no tiene suficientes valores,
// se usa el valor por defecto.
let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray

console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)


// ---------------------------------------
// Ignorar elementos del array
// ---------------------------------------

// Las comas permiten saltar posiciones
let [myValue10, , , myValue13] = myArray

console.log(myValue10)
console.log(myValue13)


// =======================================
// Desestructuración en objetos
// =======================================

// Se usan llaves {} porque es un objeto
let { name, age, alias } = person

console.log(name)
console.log(age)
console.log(alias)


// ---------------------------------------
// Valores predeterminados en objetos
// ---------------------------------------

let { name2, age2, alias2, email = "correo@example.com" } = person

// Estas propiedades no existen en el objeto
console.log(name2)
console.log(age2)
console.log(alias2)

// Se usa el valor por defecto
console.log(email)


// ---------------------------------------
// Renombrar variables
// ---------------------------------------

// Permite guardar propiedades con otro nombre
let { alias: alias3, name: name3, age: age3 } = person

console.log(name3)
console.log(age3)
console.log(alias3)


// =======================================
// Objetos anidados
// =======================================

let person3 = {
    name: "Miguel Ángel Molina Díaz",
    age: 37,
    alias: "Ángel",

    walk: function () {
        console.log("La persona camina.")
    },

    job: {
        name: "Programador",
        exp: 15,

        work: function () {
            console.log(`La persona con ${this.exp} años de experiencia trabaja.`)
        }
    }
}

// Desestructuración de objeto dentro de otro objeto
let { name: name4, job: { name: jobName } } = person3

console.log(name4)
console.log(jobName)


// =======================================
// Propagación (Spread Operator ...)
// =======================================

// Permite expandir elementos de arrays u objetos


// ---------------------------------------
// Arrays
// ---------------------------------------

// Crear un nuevo array copiando y agregando elementos
let myArray2 = [...myArray, 5, 6]

console.log(myArray2)


// Copia de arrays
let myArray3 = [...myArray]

console.log(myArray3)


// Combinar arrays
let myArray4 = [...myArray, ...myArray2, ...myArray3]

console.log(myArray4)


// =======================================
// Spread en objetos
// =======================================

// Crear un nuevo objeto copiando propiedades
// y agregando una nueva
let person4 = { ...person, email: "correo@example.com" }

console.log(person4)


// Copia de objetos
let person5 = { ...person }

console.log(person5)