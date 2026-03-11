/*
Clase 45 - Importación de módulos
*/


// ==================================================
// Importación de módulos
// ==================================================

// Importamos elementos específicos desde otro archivo.
// Las llaves {} se usan cuando el archivo exporta
// varias funciones, variables o clases.

import { add, PI, name, Circle } from "./28-export-modules.js"


// Importación por defecto.
// No usa llaves porque solo puede haber
// un export default por archivo.

import defaultImport from "./28-export-modules.js"


// ==================================================
// Uso de funciones importadas
// ==================================================

console.log(add(5, 10))


// ==================================================
// Uso de propiedades importadas
// ==================================================

console.log(PI)
console.log(name)


// ==================================================
// Uso de clases importadas
// ==================================================

let circle = new Circle(10)

// Accedemos a la propiedad del objeto
console.log(circle.radius)

// Llamamos a los métodos definidos en la clase
console.log(circle.area().toFixed(2))
console.log(circle.perimeter().toFixed(2))


// ==================================================
// Uso del módulo exportado por defecto
// ==================================================

console.log(defaultImport(5, 10))


// También podría ser una clase
// let myClass = new defaultImport()
// myClass.func()


// ==================================================
// Ejemplo de estructura modular en un proyecto
// ==================================================

// import { MyImport } from "./directory/file.js"