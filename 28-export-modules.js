/*
Clase 44 - Módulos
*/


// ==================================================
// Exportación de módulos
// ==================================================

// Los módulos permiten dividir el código en varios archivos.
// Esto ayuda a organizar proyectos grandes y reutilizar código.


// ==================================================
// Exportar funciones
// ==================================================

// "export" permite que esta función pueda ser usada
// desde otro archivo utilizando "import".

export function add(a, b) {

    // Retorna la suma de dos números
    return a + b

}

console.log(add(5, 10))


// ==================================================
// Exportar propiedades o variables
// ==================================================

// También se pueden exportar constantes o variables

export const PI = 3.1416

// Variable de ejemplo con alias usado en el repositorio
export let name = "Player"


// ==================================================
// Exportar clases
// ==================================================

// Una clase también puede exportarse para ser usada
// en otros módulos del proyecto.

export class Circle {

    constructor(radius) {

        // Propiedad del objeto
        this.radius = radius

    }

    // Método que calcula el área del círculo
    area() {

        return Math.PI * Math.pow(this.radius, 2)

    }

    // Método que calcula el perímetro
    perimeter() {

        return 2 * Math.PI * this.radius

    }

}


// ==================================================
// Exportación por defecto
// ==================================================

// Solo puede existir un "export default" por archivo.
// Cuando se importa no es obligatorio usar el mismo nombre.

export default function substract(a, b) {

    return a - b

}


// También se podría exportar una clase por defecto

// export default class MyClass {

//     func() {
//         console.log("Mi clase")
//     }

// }