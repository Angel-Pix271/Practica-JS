// var → Declaración antigua de variables (function scope).
// No se recomienda en código moderno por problemas de alcance y hoisting.
var helloWorld = "Hola Mundo"
console.log(helloWorld)

// Reasignación permitida con var
helloWorld = "Hola de nuevo, JavaScript"
console.log(helloWorld)


// let → Declaración moderna con alcance de bloque (block scope).
// Permite reasignación.
let helloWorld2 = "Hola al año, 2026"
console.log(helloWorld2)

helloWorld2 = "Adiós al año viejo, 2025"
console.log(helloWorld2)


// const → Declaración moderna con alcance de bloque.
// No permite reasignación después de su inicialización.
const helloWorld3 = "Esperando el año, 2027"
console.log(helloWorld3)

const persona = { nombre: "Angel" }

// Esto es válido
persona.nombre = "Carlos"

// Esto NO es válido
persona = {} //  Error

/*
  Ejemplo incorrecto:
  Las variables declaradas con const NO pueden reasignarse.

  helloWorld3 = "Hola de nuevo, 2026" //  Error
  console.log(helloWorld3)
*/
