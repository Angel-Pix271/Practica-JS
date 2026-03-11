/*
Clase 40 - Manejo de errores
*/


// ==================================================
// Excepción
// ==================================================

// Una excepción ocurre cuando el programa intenta
// ejecutar algo que no es válido.

let myObject

// Si intentáramos acceder a una propiedad de algo
// que es undefined se produciría un error.
// console.log(myObject.email)


// ==================================================
// Captura de errores
// ==================================================

// try-catch permite evitar que el programa se detenga
// cuando ocurre un error.

try {

    // Código que se intenta ejecutar
    console.log(myObject.email)

    console.log("Finaliza la ejecución sin errores")

} catch {

    // Este bloque se ejecuta si ocurre un error
    console.log("Se ha producido un error")

}


// ==================================================
// Capturar el error específico
// ==================================================

try {

    console.log(myObject.email)

} catch (error) {

    // error contiene información del problema
    console.log("Se ha producido un error:", error.message)

}


// ==================================================
// finally
// ==================================================

// finally siempre se ejecuta, ocurra o no el error

try {

    console.log(myObject.email)

} catch (error) {

    console.log("Se ha producido un error:", error.message)

} finally {

    console.log("Este código se ejecuta siempre")

}


// ==================================================
// Lanzamiento manual de errores
// ==================================================

// throw permite lanzar errores manualmente

// throw new Error("Se ha producido un error")


// ==================================================
// Función con validación de errores
// ==================================================

function sumIntegers(a, b) {

    // Verifica que los valores sean números
    if (typeof a !== "number" || typeof b !== "number") {

        throw new TypeError("Esta operación sólo suma números")

    }

    // Verifica que sean números enteros
    if (!Number.isInteger(a) || !Number.isInteger(b)) {

        throw new Error("Esta operación sólo suma números enteros")

    }

    // Caso especial si se intenta sumar cero
    if (a == 0 || b == 0) {

        throw new SumZeroIntegerError(
            "Se está intentando sumar cero",
            a,
            b
        )
    }

    return a + b
}


// ==================================================
// Uso de try-catch con la función
// ==================================================

try {

    console.log(sumIntegers(5, 10))

    // Error de tipo
    console.log(sumIntegers("5", 10))

} catch (error) {

    console.log("Se ha producido un error:", error.message)

}


// ==================================================
// Capturar diferentes tipos de errores
// ==================================================

try {

    console.log(sumIntegers("5", 10))

} catch (error) {

    if (error instanceof TypeError) {

        console.log("Se ha producido un error de tipo:", error.message)

    } else if (error instanceof Error) {

        console.log("Se ha producido un error:", error.message)

    }

}


// ==================================================
// Crear excepciones personalizadas
// ==================================================

class SumZeroIntegerError extends Error {

    constructor(message, a, b) {

        // Llama al constructor de Error
        super(message)

        // Guardamos los números que causaron el error
        this.a = a
        this.b = b
    }

    // Método para mostrar los números involucrados
    printNumbers() {

        console.log(this.a, " + ", this.b)

    }

}


// ==================================================
// Uso de excepción personalizada
// ==================================================

try {

    console.log(sumIntegers(0, 10))

} catch (error) {

    console.log("Se ha producido un error personalizado:", error.message)

    // Método definido en nuestra clase personalizada
    error.printNumbers()

}