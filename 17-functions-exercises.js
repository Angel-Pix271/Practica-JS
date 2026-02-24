/*
Clase 32 - Ejercicios: Funciones
*/


// ==================================================
// 1. Función que recibe dos números y devuelve su suma
// ==================================================

function sumar(a, b) {
    // a y b son parámetros
    // return devuelve el resultado de la suma
    return a + b
}

console.log(sumar(5, 10))


// ==================================================
// 2. Función que devuelve el número mayor de un array
// ==================================================

function obtenerMayor(numeros) {

    // Se asume que el primer elemento es el mayor inicialmente
    let mayor = numeros[0]

    for (let numero of numeros) {
        if (numero > mayor) {
            mayor = numero
        }
    }

    return mayor
}

console.log(obtenerMayor([3, 7, 2, 9, 5]))


// ==================================================
// 3. Función que cuenta vocales en un string
// ==================================================

function contarVocales(texto) {

    let contador = 0

    for (let letra of texto.toLowerCase()) {

        // includes verifica si la letra existe dentro del string
        if ("aeiou".includes(letra)) {
            contador++
        }
    }

    return contador
}

console.log(contarVocales("Miguel Angel Molina Diaz"))


// ==================================================
// 4. Función que convierte strings a mayúsculas
// ==================================================

function convertirAMayusculas(arrayStrings) {

    let nuevoArray = []

    for (let texto of arrayStrings) {
        nuevoArray.push(texto.toUpperCase())
    }

    return nuevoArray
}

console.log(convertirAMayusculas(["miguel", "angel", "player"]))


// ==================================================
// 5. Función que verifica si un número es primo
// ==================================================

function esPrimo(numero) {

    if (numero <= 1) return false

    for (let i = 2; i < numero; i++) {

        // Si es divisible entre cualquier número distinto de 1 y él mismo,
        // entonces no es primo
        if (numero % i === 0) {
            return false
        }
    }

    return true
}

console.log(esPrimo(7))
console.log(esPrimo(10))


// ==================================================
// 6. Elementos comunes entre dos arrays
// ==================================================

function elementosComunes(array1, array2) {

    let comunes = []

    for (let elemento of array1) {

        if (array2.includes(elemento)) {
            comunes.push(elemento)
        }
    }

    return comunes
}

console.log(elementosComunes([1, 2, 3, 4], [3, 4, 5, 6]))


// ==================================================
// 7. Suma de números pares en un array
// ==================================================

function sumarPares(numeros) {

    let suma = 0

    for (let numero of numeros) {

        if (numero % 2 === 0) {
            suma += numero
        }
    }

    return suma
}

console.log(sumarPares([1, 2, 3, 4, 5, 6]))


// ==================================================
// 8. Elevar números al cuadrado
// ==================================================

function elevarAlCuadrado(numeros) {

    let resultado = []

    for (let numero of numeros) {
        resultado.push(numero ** 2)
    }

    return resultado
}

console.log(elevarAlCuadrado([2, 3, 4]))


// ==================================================
// 9. Invertir el orden de las palabras
// ==================================================

function invertirPalabras(texto) {

    // split separa el string en un array usando el espacio como separador
    let palabras = texto.split(" ")

    // reverse invierte el orden del array
    palabras.reverse()

    // join une nuevamente el array en un string
    return palabras.join(" ")
}

console.log(invertirPalabras("Miguel Angel Molina Diaz"))


// ==================================================
// 10. Calcular factorial
// ==================================================

function factorial(numero) {

    if (numero < 0) return null

    let resultado = 1

    for (let i = 1; i <= numero; i++) {
        resultado *= i
    }

    return resultado
}

console.log(factorial(5))