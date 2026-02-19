// =======================================
// 1. Array con cinco animales
// =======================================

let animales = ["Perro", "Gato", "Elefante", "León", "Tigre"]
console.log(animales)


// =======================================
// 2. Añadir uno al principio y otro al final
// =======================================

animales.unshift("Conejo")
animales.push("Jirafa")

console.log(animales)


// =======================================
// 3. Eliminar el de tercera posición
// (índice 2)
// =======================================

animales.splice(2, 1)
console.log(animales)


// =======================================
// 4. Set con cinco libros
// =======================================

let libros = new Set([
    "1984",
    "El Principito",
    "Don Quijote",
    "Dante",
    "El Hobbit"
])

console.log(libros)


// =======================================
// 5. Añadir dos más (uno repetido)
// =======================================

libros.add("Dune")
libros.add("1984") // repetido

console.log(libros)


// =======================================
// 6. Eliminar uno concreto
// =======================================

libros.delete("Clean Code")
console.log(libros)


// =======================================
// 7. Map número del mes → nombre
// =======================================

let meses = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])

console.log(meses)


// =======================================
// 8. Comprobar si existe el mes 5
// =======================================

if (meses.has(5)) {
    console.log("Mes 5:", meses.get(5))
}


// =======================================
// 9. Añadir clave con meses de verano
// =======================================

meses.set("verano", ["Junio", "Julio", "Agosto"])
console.log(meses)


// =======================================
// 10. Array → Set → Map
// =======================================

let numerosArray = [1, 2, 2, 3, 4, 4, 5]

let numerosSet = new Set(numerosArray)

let estructuraMap = new Map()
estructuraMap.set("numerosUnicos", numerosSet)

console.log(estructuraMap)