// =======================================
// Funciones
// =======================================

// Simple

function myFunc() {
    // Una función es un bloque de código reutilizable.
    // Se define con la palabra clave "function"
    // Se ejecuta cuando es llamada.
    console.log("¡Hola, función!")
}

// Ejecutamos la función 5 veces usando un bucle
for (let i = 0; i < 5; i++) {
    myFunc()
}


// =======================================
// Con parámetros
// =======================================

// "name" es un parámetro.
// Los parámetros permiten recibir datos externos.
function myFuncWithParams(name) {
    console.log(`¡Hola, ${name}!`)
}

// Aquí enviamos argumentos a la función
myFuncWithParams("Miguel Ángel Molina Díaz")
myFuncWithParams("Player")


// =======================================
// Funciones anónimas
// =======================================

// Una función anónima es una función sin nombre
// que se guarda dentro de una variable.
const myFunc2 = function (name) {
    console.log(`¡Hola, ${name}!`)
}

myFunc2("Ángel")


// =======================================
// Arrow functions
// =======================================

// Sintaxis moderna introducida en ES6
// (name) es el parámetro
// => es la flecha que reemplaza la palabra function
const myFunc3 = (name) => {
    console.log(`¡Hola, ${name}!`)
}

// Si solo hay una línea, se puede escribir en forma resumida
const myFunc4 = (name) => console.log(`¡Hola, ${name}!`)

myFunc3("Miguel Ángel Molina Díaz")
myFunc4("Player")


// =======================================
// Parámetros
// =======================================

function sum(a, b) {
    // a y b son parámetros
    // Si no se envían argumentos, serán undefined
    console.log(a + b)
}

sum(5, 10) // 15
sum(5)     // NaN (porque b es undefined)
sum()      // NaN


// =======================================
// Parámetros por defecto
// =======================================

function defaultSum(a = 0, b = 0) {
    // Si no se envía valor, se usa el valor por defecto
    console.log(a + b)
}

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(undefined, 5)


// =======================================
// Retorno de valores
// =======================================

function mult(a, b) {
    // return devuelve el resultado
    // y finaliza la ejecución de la función
    return a * b
}

let result = mult(5, 10)
console.log(result)


// =======================================
// Funciones anidadas
// =======================================

function extern() {

    console.log("Función externa")

    function intern() {
        // Esta función solo existe dentro de extern()
        console.log("Función interna")
    }

    intern()
}

extern()
// intern() → Error porque está fuera del scope


// =======================================
// Funciones de orden superior
// =======================================

// Una función de orden superior recibe otra función como parámetro
function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4, "Función de orden superior")


// =======================================
// forEach
// =======================================

// forEach ejecuta una función por cada elemento

const myArray = [1, 2, 3, 4]

const mySet = new Set([
    "Miguel Ángel Molina Díaz",
    "Ángel",
    "Player",
    37,
    true,
    "correo@example.com"
])

const myMap = new Map([
    ["name", "Miguel Ángel Molina Díaz"],
    ["alias", "Player"],
    ["email", "correo@example.com"]
])

// Función tradicional
myArray.forEach(function (value) {
    console.log(value)
})

// Arrow function
myArray.forEach((value) => console.log(value))

// Set
mySet.forEach((value) => console.log(value))

// Map (forEach recibe valor, luego clave)
myMap.forEach((value) => console.log(value))