// ==============================
// Declaración
// ==============================

let miArray = []
let miArray2 = new Array()

console.log(miArray)
console.log(miArray2)


// ==============================
// Inicialización
// ==============================

// Diferencia importante:
// new Array(3) crea un array con 3 posiciones vacías

miArray = [3]
miArray2 = new Array(3)

console.log(miArray)   // [3]
console.log(miArray2)  // [empty × 3]


miArray = [1, 2, 3, 4]
miArray2 = new Array(1, 2, 3, 4)

console.log(miArray)
console.log(miArray2)


miArray = ["Brais", "Moure", "mouredev", 37, true]
miArray2 = new Array("Brais", "Moure", "mouredev", 37, true)

console.log(miArray)
console.log(miArray2)


// Arrays dispersos (no recomendado en producción)

miArray2 = new Array(3)
miArray2[2] = "Brais"
miArray2[1] = "mouredev"
miArray2[4] = "mouredev"

console.log(miArray2)


miArray = []
miArray[2] = "Brais"
miArray[1] = "mouredev"

console.log(miArray)


// ==============================
// Métodos comunes
// ==============================

miArray = []


// push y pop

miArray.push("Brais")
miArray.push("Moure")
miArray.push("mouredev")
miArray.push(37)

console.log(miArray)

console.log(miArray.pop()) // elimina el último elemento y lo devuelve
miArray.pop()

console.log(miArray)


// shift y unshift

console.log(miArray.shift()) // elimina el primero
console.log(miArray)

miArray.unshift("Brais", "mouredev") // agrega al inicio
console.log(miArray)


// length

console.log(miArray.length)


// Vaciar array

miArray = []
miArray.length = 0
console.log(miArray)


// ==============================
// slice (no modifica el original)
// ==============================

miArray = ["Brais", "Moure", "mouredev", 37, true]

let nuevoArray = miArray.slice(1, 3)

console.log(miArray)
console.log(nuevoArray)


// ==============================
// splice (modifica el original)
// ==============================

miArray.splice(1, 3)
console.log(miArray)

miArray = ["Brais", "Moure", "mouredev", 37, true]

miArray.splice(1, 2, "Nueva entrada")
console.log(miArray)