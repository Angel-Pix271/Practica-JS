// 1. Comentario en una línea

/*
   2. Comentario en varias líneas
   Este es un bloque de comentario
*/


// 3. Variables con todos los tipos de datos primitivos

let myString = "Hola Mundo"
let myNumber = 25
let myBoolean = true
let myUndefined = undefined
let mySymbol = Symbol("mysymbol")
let myBigInt = 1234567890123456789012345678901234567890n


// 4. Imprimir el valor de todas las variables

console.log(myString)
console.log(myNumber)
console.log(myBoolean)
console.log(myUndefined)
console.log(mySymbol)
console.log(myBigInt)


// 5. Imprimir el tipo de todas las variables

console.log(typeof myString)
console.log(typeof myNumber)
console.log(typeof myBoolean)
console.log(typeof myUndefined)
console.log(typeof mySymbol)
console.log(typeof myBigInt)


// 6. Modificar valores por otros del mismo tipo

myString = "Nuevo texto"
myNumber = 100
myBoolean = false
myUndefined = undefined
mySymbol = Symbol("newSymbol")
myBigInt = 999999999999999999999999999999999999999n


// 7. Modificar valores por otros de distinto tipo

myString = 123
myNumber = "Ahora soy string"
myBoolean = "true"
myUndefined = 50
mySymbol = "No soy símbolo"
myBigInt = 10


// 8. Declarar constantes con todos los tipos primitivos

const constString = "Constante texto"
const constNumber = 50
const constBoolean = false
const constUndefined = undefined
const constSymbol = Symbol("constSymbol")
const constBigInt = 888888888888888888888888888888888888n


// 9 y 10. Intentar modificar constantes (esto genera error, por eso se comenta)

// constString = "Nuevo valor"      // ❌ Error
// constNumber = 100                // ❌ Error
// constBoolean = true              // ❌ Error
// constUndefined = null            // ❌ Error
// constSymbol = Symbol("otro")     // ❌ Error
// constBigInt = 1n                 // ❌ Error