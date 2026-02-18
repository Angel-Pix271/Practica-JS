// ==============================
// Declaración
// ==============================

let miMap = new Map()

console.log(miMap)


// ==============================
// Inicialización
// ==============================

miMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

console.log(miMap)


// ==============================
// Métodos y propiedades
// ==============================

// set (agrega o actualiza)

miMap.set("alias", "mouredev")
miMap.set("name", "Brais Moure") // sobrescribe

console.log(miMap)


// get (obtiene valor por clave)

console.log(miMap.get("name"))
console.log(miMap.get("surname")) // undefined


// has (verifica existencia de clave)

console.log(miMap.has("surname"))
console.log(miMap.has("age"))


// delete (elimina por clave)

miMap.delete("email")
console.log(miMap)


// ==============================
// keys, values, entries
// ==============================

console.log(miMap.keys())    // iterador de claves
console.log(miMap.values())  // iterador de valores
console.log(miMap.entries()) // iterador [clave, valor]

// Ejemplo práctico de iteración
for (let [clave, valor] of miMap) {
    console.log(clave, valor)
}


// ==============================
// size
// ==============================

console.log(miMap.size)


// ==============================
// clear
// ==============================

miMap.clear()
console.log(miMap)