// Variables base
let nombre = "Miguel Angel"
let alias = "Play3rP1xel"


// 1. Concatenar dos cadenas de texto

let nombreCompleto = nombre + " - " + alias
console.log(nombreCompleto)


// 2. Mostrar la longitud de una cadena

console.log(nombre.length)


// 3. Mostrar el primer y último carácter

console.log(nombre[0]) // Primer carácter
console.log(nombre[nombre.length - 1]) // Último carácter


// 4. Convertir a mayúsculas y minúsculas

console.log(nombre.toUpperCase())
console.log(nombre.toLowerCase())


// 5. Crear una cadena en varias líneas

let descripcion = `Hola, soy ${nombre}.
Mi alias es ${alias}.
Estoy formándome como desarrollador full-stack.`
console.log(descripcion)


// 6. Interpolar el valor de una variable

let mensaje = `Mi nombre es ${nombre} y mi alias es ${alias}.`
console.log(mensaje)


// 7. Reemplazar todos los espacios por guiones

let nombreConGuiones = nombre.replaceAll(" ", "-")
console.log(nombreConGuiones)


// 8. Comprobar si contiene una palabra concreta

console.log(nombre.includes("Miguel"))
console.log(nombre.includes("Carlos"))


// 9. Comprobar si dos strings son iguales

let otroNombre = "Miguel Angel"
console.log(nombre === otroNombre)


// 10. Comprobar si dos strings tienen la misma longitud

let palabra1 = "JavaScript"
let palabra2 = "NodeJS"
console.log(palabra1.length === palabra2.length)