// Loops o bucles
// Un bucle es una estructura que permite repetir un bloque de código
// mientras se cumpla una condición determinada.


// ==============================
// for
// ==============================

// Sintaxis del for:
// for (inicialización; condición; incremento)

for (let i = 0; i < 5; i++) {
    // i comienza en 0
    // El bucle se ejecuta mientras i sea menor que 5
    // Después de cada vuelta, i aumenta en 1
    console.log(`Hola ${i}`)
}


// Array de ejemplo
// Un array es una estructura que almacena varios valores en una sola variable
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// Recorremos el array usando su propiedad length
// length devuelve la cantidad de elementos que tiene el array
for (let i = 0; i < numbers.length; i++) {
    // numbers[i] accede al elemento según su índice
    console.log(`Elemento: ${numbers[i]}`)
}


// ==============================
// while
// ==============================

// El while ejecuta el bloque mientras la condición sea verdadera

let i = 0

while (i < 5) {
    console.log(`Hola ${i}`)
    i++ // Es importante incrementar la variable para evitar un bucle infinito
}


// Bucle infinito
// while(true) {
// }
// Esto generaría un ciclo que nunca termina.


// ==============================
// do while
// ==============================

// El do...while se ejecuta al menos una vez,
// incluso si la condición es falsa

i = 6

do {
    console.log(`Hola ${i}`)
    i++
} while (i < 5)


// ==============================
// for of
// ==============================

// El for...of recorre directamente los valores de un iterable

const myArray = [1, 2, 3, 4]

// Set almacena valores únicos
const mySet = new Set([
    "Miguel Ángel Molina Díaz",
    "Ángel",
    "Player",
    37,
    true,
    "correo@example.com"
])

// Map almacena pares clave → valor
const myMap = new Map([
    ["name", "Miguel Ángel Molina Díaz"],
    ["alias", "Player"],
    ["email", "correo@example.com"]
])

// Un string también es iterable
const myString = "¡Hola, JavaScript!"


// Recorre cada elemento del array
for (let value of myArray) {
    console.log(value)
}

// Recorre cada valor del Set
for (let value of mySet) {
    console.log(value)
}

// En Map, devuelve pares [clave, valor]
for (let value of myMap) {
    console.log(value)
}

// Alternativa más clara usando destructuración
// Se separan clave y valor en variables independientes
for (let [key, value] of myMap) {
    console.log(key, value)
}

// Recorre cada carácter del string
for (let value of myString) {
    console.log(value)
}


// ==============================
// break y continue
// ==============================

// break termina completamente el bucle
// continue salta a la siguiente iteración

for (let i = 0; i < 10; i++) {

    if (i == 5) {
        continue // Cuando i vale 5, no imprime nada y pasa al siguiente número
    } else if (i == 7) {
        break // Cuando i vale 7, el bucle termina definitivamente
    }

    console.log(`Hola ${i}`)
}