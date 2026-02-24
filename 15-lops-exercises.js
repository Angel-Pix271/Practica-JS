// ==================================================
// 1. Imprimir los números del 1 al 20
// ==================================================

for (let i = 1; i <= 20; i++) {
    // i inicia en 1
    // El bucle continúa mientras i sea menor o igual a 20
    // i++ incrementa el valor en 1 en cada iteración
    console.log(i)
}


// ==================================================
// 2. Sumar los números del 1 al 100
// ==================================================

let suma = 0 // Variable acumuladora

for (let i = 1; i <= 100; i++) {
    // En cada vuelta se suma el valor actual de i
    suma += i
}

console.log("Resultado de la suma:", suma)


// ==================================================
// 3. Imprimir números pares entre 1 y 50
// ==================================================

for (let i = 1; i <= 50; i++) {

    // El operador % devuelve el residuo de una división
    // Si i % 2 === 0 significa que es divisible entre 2 (número par)
    if (i % 2 === 0) {
        console.log(i)
    }
}


// ==================================================
// 4. Recorrer un array de nombres
// ==================================================

const nombres = [
    "Miguel Ángel Molina Díaz",
    "Ángel",
    "Player"
]

// for...of recorre directamente los valores del array
for (let nombre of nombres) {
    console.log(nombre)
}


// ==================================================
// 5. Contar vocales en una cadena
// ==================================================

const texto = "Miguel Angel Molina Diaz"
let contadorVocales = 0

for (let letra of texto.toLowerCase()) {
    // toLowerCase() convierte todo a minúscula
    // includes() verifica si la letra está dentro del string "aeiou"
    if ("aeiou".includes(letra)) {
        contadorVocales++
    }
}

console.log("Cantidad de vocales:", contadorVocales)


// ==================================================
// 6. Multiplicar todos los números de un array
// ==================================================

const numeros = [2, 3, 4, 5]
let producto = 1 // Se inicia en 1 porque es el elemento neutro de la multiplicación

for (let numero of numeros) {
    producto *= numero
}

console.log("Producto total:", producto)


// ==================================================
// 7. Tabla de multiplicar del 5
// ==================================================

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`)
}


// ==================================================
// 8. Invertir una cadena de texto
// ==================================================

const cadena = "JavaScript"
let cadenaInvertida = ""

for (let i = cadena.length - 1; i >= 0; i--) {
    // cadena.length - 1 obtiene el último índice
    // Se recorre hacia atrás hasta llegar a 0
    cadenaInvertida += cadena[i]
}

console.log("Cadena invertida:", cadenaInvertida)


// ==================================================
// 9. Primeros 10 números de Fibonacci
// ==================================================

let fibonacci = []
let a = 0
let b = 1

for (let i = 0; i < 10; i++) {
    fibonacci.push(a)

    // Se calcula el siguiente número
    let siguiente = a + b
    a = b
    b = siguiente
}

console.log("Secuencia Fibonacci:", fibonacci)


// ==================================================
// 10. Crear nuevo array con números mayores a 10
// ==================================================

const numerosOriginales = [5, 12, 8, 20, 3, 15]
let mayoresA10 = []

for (let numero of numerosOriginales) {

    if (numero > 10) {
        // Solo se agregan los que cumplen la condición
        mayoresA10.push(numero)
    }
}

console.log("Números mayores a 10:", mayoresA10)