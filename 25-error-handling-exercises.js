/*
Clase 41 - Ejercicios: Manejo de errores
*/


// ==================================================
// 1. Capturar una excepción utilizando try-catch
// ==================================================

try {

    // Intentamos acceder a una propiedad de algo undefined
    let objeto
    console.log(objeto.email)

} catch (error) {

    // Se captura el error
    console.log("Error capturado:", error.message)

}


// ==================================================
// 2. try-catch con finally
// ==================================================

try {

    let numero = undefined
    console.log(numero.toString())

} catch (error) {

    console.log("Ocurrió un error:", error.message)

} finally {

    // Este bloque siempre se ejecuta
    console.log("Finaliza la ejecución del bloque try-catch")

}


// ==================================================
// 3. Lanzar una excepción genérica
// ==================================================

function lanzarError() {

    throw new Error("Este es un error genérico")

}

try {

    lanzarError()

} catch (error) {

    console.log("Error capturado:", error.message)

}


// ==================================================
// 4. Crear una excepción personalizada
// ==================================================

class PropertyError extends Error {

    constructor(message) {

        super(message)

    }

}


// ==================================================
// 5. Lanzar una excepción personalizada
// ==================================================

function verificarEdad(edad) {

    if (edad < 18) {

        throw new PropertyError("La edad debe ser mayor o igual a 18")

    }

    return "Edad válida"

}

try {

    console.log(verificarEdad(16))

} catch (error) {

    console.log("Error personalizado:", error.message)

}


// ==================================================
// 6. Lanzar varias excepciones según lógica
// ==================================================

function validarNumero(valor) {

    if (typeof valor !== "number") {

        throw new TypeError("El valor debe ser un número")

    }

    if (valor < 0) {

        throw new RangeError("El número no puede ser negativo")

    }

    return "Número válido"

}


// ==================================================
// 7. Capturar varias excepciones
// ==================================================

try {

    console.log(validarNumero(-5))

} catch (error) {

    if (error instanceof TypeError) {

        console.log("Error de tipo:", error.message)

    } else if (error instanceof RangeError) {

        console.log("Error de rango:", error.message)

    } else {

        console.log("Error:", error.message)

    }

}


// ==================================================
// 8. Bucle que convierte valores a float
// ==================================================

const valores = ["10.5", "20", "texto", "30.8", "error"]

for (let valor of valores) {

    try {

        let numero = parseFloat(valor)

        if (isNaN(numero)) {

            throw new Error("No es un número válido")

        }

        console.log("Número convertido:", numero)

    } catch (error) {

        console.log("Error al convertir:", valor)

    }

}


// ==================================================
// 9. Verificar propiedad en objeto
// ==================================================

class MissingPropertyError extends Error {

    constructor(propiedad) {

        super(`La propiedad '${propiedad}' no existe en el objeto`)

    }

}

function verificarPropiedad(objeto, propiedad) {

    if (!objeto.hasOwnProperty(propiedad)) {

        throw new MissingPropertyError(propiedad)

    }

    return objeto[propiedad]

}

try {

    const usuario = {
        nombre: "Miguel Ángel Molina Díaz",
        alias: "Player"
    }

    console.log(verificarPropiedad(usuario, "email"))

} catch (error) {

    console.log("Error:", error.message)

}


// ==================================================
// 10. Función con reintentos
// ==================================================

function operacionConReintentos(maxIntentos = 10) {

    let intento = 0

    while (intento < maxIntentos) {

        try {

            intento++

            console.log("Intento:", intento)

            // Simulación de error aleatorio
            if (Math.random() < 0.7) {

                throw new Error("Fallo en la operación")

            }

            console.log("Operación exitosa")

            return

        } catch (error) {

            console.log("Error:", error.message)

            if (intento === maxIntentos) {

                console.log("Se alcanzó el máximo de intentos")

            }

        }

    }

}

operacionConReintentos()