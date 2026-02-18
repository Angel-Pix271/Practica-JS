/*
Clase 26 - Sets
*/

// ==============================
// Declaración
// ==============================

let miSet = new Set()

console.log(miSet)


// ==============================
// Inicialización
// ==============================

miSet = new Set([
    "Brais",
    "Moure",
    "mouredev",
    37,
    true,
    "braismoure@mouredev.com"
])

console.log(miSet)


// ==============================
// Métodos comunes
// ==============================

// add y delete

miSet.add("https://moure.dev")
console.log(miSet)

miSet.delete("https://moure.dev")
console.log(miSet)

// delete devuelve true o false
console.log(miSet.delete("Brais"))
console.log(miSet.delete(4))

console.log(miSet)


// ==============================
// has
// ==============================

console.log(miSet.has("Moure"))
console.log(miSet.has("Brais"))


// ==============================
// size
// ==============================

console.log(miSet.size)


// ==============================
// Convertir Set a Array
// ==============================

let miArray = Array.from(miSet)
// Alternativa moderna:
// let miArray = [...miSet]

console.log(miArray)


// ==============================
// Convertir Array a Set
// ==============================

miSet = new Set(miArray)
console.log(miSet)


// ==============================
// No admite duplicados
// ==============================

miSet.add("braismoure@mouredev.com")
miSet.add("braismoure@mouredev.com")
miSet.add("braismoure@mouredev.com")
miSet.add("BraisMoure@mouredev.com") // diferente por mayúsculas

console.log(miSet)