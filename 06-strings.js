// ==============================
// Cadenas de texto (Strings)
// ==============================

// Concatenación

let nombre = "Miguel Angel"
let alias = "Play3rP1xel"
let saludo = "Hola, soy " + nombre + " y mi alias es " + alias + "."
console.log(saludo)
console.log(typeof saludo) // Tipo de dato


// Longitud de la cadena

console.log(saludo.length)


// Acceso a caracteres por índice

console.log(saludo[0])   // Primer carácter
console.log(saludo[10])  // Carácter en posición específica


// ==============================
// Métodos comunes de strings
// ==============================

console.log(saludo.toUpperCase()) // Convertir a mayúsculas
console.log(saludo.toLowerCase()) // Convertir a minúsculas

console.log(saludo.indexOf("Miguel"))      // Posición donde inicia la palabra
console.log(saludo.indexOf(alias))         // Buscar contenido dinámico
console.log(saludo.indexOf("Backend"))     // Devuelve -1 si no existe

console.log(saludo.includes("Miguel"))     
console.log(saludo.includes(alias))
console.log(saludo.includes("Frontend"))

console.log(saludo.slice(0, 20)) // Extrae una parte de la cadena
console.log(saludo.replace(alias, "FullStackDev")) // Reemplaza texto


// ==============================
// Template literals
// ==============================

// String en múltiples líneas
let mensaje = `Hola, mi nombre es ${nombre}.
Mi alias es ${alias}.
Estoy practicando JavaScript.`
console.log(mensaje)


// Interpolación de variables

let correo = "miguelangelmolinadiaz123@gmail.com"
console.log(`Hola, ${nombre}. Tu alias es ${alias} y tu correo es ${correo}.`)