// =============================
// Tipos de Datos Primitivos en JavaScript
// =============================

// String → Representa cadenas de texto
let myName = "Miguel Angel"
let alias = "Play3rP1xel"
let email = "miguelangelmolinadiaz123@gmail.com"


// Number → Representa números enteros y decimales
let age = 21        // Número entero
let height = 1.68   // Número decimal


// Boolean → Representa valores lógicos (true / false)
let isStudent = true
let isTeacher = false


// Undefined → Variable declarada pero no inicializada
let undefinedValue
console.log(undefinedValue)


// Symbol → Tipo de dato único e inmutable (identificadores únicos)
let mySymbol = Symbol("mysymbol")


// BigInt → Permite representar números enteros muy grandes
let myBigInt = BigInt(832761264980264731246912864128749045869043850834)
let myBigInt2 = 640746179864198764164317648317643176431876487316423n


// =============================
// Uso del operador typeof
// Permite conocer el tipo de dato de una variable
// =============================

console.log(typeof myName)
console.log(typeof alias)
console.log(typeof email)
console.log(typeof age)
console.log(typeof height)
console.log(typeof isStudent)
console.log(typeof isTeacher)
console.log(typeof undefinedValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)
console.log(typeof myBigInt2)