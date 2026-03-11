/*
Clase 43 - Ejercicios: Console
*/


// ==================================================
// 1. Función que utilice console.error()
// ==================================================

function mostrarError(mensaje) {

    // Muestra un mensaje de error en la consola
    console.error("Error:", mensaje)

}

mostrarError("No se pudo cargar el usuario.")


// ==================================================
// 2. Función que utilice console.warn()
// ==================================================

function mostrarAdvertencia(mensaje) {

    // Muestra una advertencia
    console.warn("Advertencia:", mensaje)

}

mostrarAdvertencia("El campo edad está vacío.")


// ==================================================
// 3. Función que utilice console.info()
// ==================================================

function mostrarInformacion(mensaje) {

    // Muestra información adicional
    console.info("Información:", mensaje)

}

mostrarInformacion("El sistema se inició correctamente.")


// ==================================================
// 4. Utilizar console.table()
// ==================================================

const usuarios = [
    { nombre: "Miguel Ángel Molina Díaz", alias: "Player", edad: 37 },
    { nombre: "Ángel", alias: "AngelDev", edad: 21 }
]

// Muestra los datos en formato tabla
console.table(usuarios)


// ==================================================
// 5. Utilizar console.group()
// ==================================================

console.group("Datos del Usuario")

console.log("Nombre: Miguel Ángel Molina Díaz")
console.log("Alias: Player")
console.log("Edad: 37")

console.groupEnd()


// ==================================================
// 6. Utilizar console.time()
// ==================================================

console.time("Tiempo del proceso")

for (let i = 0; i < 100000; i++) {

    // Simulación de proceso

}

console.timeEnd("Tiempo del proceso")


// ==================================================
// 7. Validar número positivo con console.assert()
// ==================================================

let numero = -5

// Si la condición es falsa se muestra el mensaje
console.assert(numero > 0, "El número debe ser positivo.")


// ==================================================
// 8. Utilizar console.count()
// ==================================================

console.count("Clic")
console.count("Clic")
console.count("Clic")


// ==================================================
// 9. Utilizar console.trace()
// ==================================================

function funcionA() {

    funcionB()

}

function funcionB() {

    // Muestra el seguimiento de llamadas de funciones
    console.trace("Seguimiento de ejecución")

}

funcionA()


// ==================================================
// 10. Utilizar console.clear()
// ==================================================

// Limpia la consola del navegador o del entorno de ejecución
// console.clear()