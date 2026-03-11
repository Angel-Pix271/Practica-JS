/*
Clase 42 - Console
*/


// ==================================================
// console.log()
// ==================================================

// Muestra información general en la consola
console.log("¡Hola, JavaScript!")


// ==================================================
// console.error()
// ==================================================

// Muestra mensajes de error
console.error("Este es un mensaje de error.")

// También se puede mostrar un objeto Error
console.error(
    "Error al conectarse al sistema:",
    new Error("Conexión fallida.")
)


// ==================================================
// console.warn()
// ==================================================

// Muestra advertencias
console.warn("Este es un mensaje de advertencia.")


// ==================================================
// console.info()
// ==================================================

// Muestra información adicional
console.info("Este es un mensaje informativo.")


// ==================================================
// console.table()
// ==================================================

// Permite visualizar datos en formato tabla

let data = [
    ["Miguel Ángel Molina Díaz", 37],
    ["Player", 21]
]

console.table(data)


// También funciona con arrays de objetos
data = [
    { name: "Miguel Ángel Molina Díaz", age: 37 },
    { name: "Ángel", age: 21 }
]

console.table(data)


// ==================================================
// console.group()
// ==================================================

// Agrupa mensajes en la consola
console.group("Usuario")

console.log("Nombre: Miguel Ángel Molina Díaz")
console.log("Alias: Player")
console.log("Edad: 37")

console.groupEnd()


// ==================================================
// console.time()
// ==================================================

// Permite medir el tiempo que tarda en ejecutarse un bloque

console.time("Tiempo de ejecución 2")

for (let i = 0; i < 10000; i++) {

}

console.time("Tiempo de ejecución 1")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 2")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 1")


// ==================================================
// console.assert()
// ==================================================

// Verifica si una condición es verdadera
// Si es falsa muestra un error

let age = 17

console.assert(age >= 18, "El usuario debe ser mayor de edad.")


// ==================================================
// console.count()
// ==================================================

// Cuenta cuántas veces se ejecuta algo

console.count("Click")
console.count("Click")
console.count("Click")

// Reinicia el contador
console.countReset("Click")

console.count("Click")


// ==================================================
// console.trace()
// ==================================================

// Permite ver la ruta de ejecución de las funciones

function funcA() {

    funcB()

}

function funcB() {

    console.trace("Seguimiento de la ejecución.")

}

funcA()


// ==================================================
// console.clear()
// ==================================================

// Limpia la consola
// console.clear()