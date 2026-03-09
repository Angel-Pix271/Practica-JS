/*
Clase 34 - Ejercicios: Objetos
*/


// ==================================================
// 1. Crear un objeto con 3 propiedades
// ==================================================

// Un objeto almacena datos en pares clave → valor
let persona = {
    nombre: "Miguel Ángel Molina Díaz",
    alias: "Player",
    edad: 37
}


// ==================================================
// 2. Acceder y mostrar su valor
// ==================================================

// Acceso usando notación punto
console.log(persona.nombre)

// Acceso usando corchetes
console.log(persona["alias"])


// ==================================================
// 3. Agregar una nueva propiedad
// ==================================================

// Se pueden añadir propiedades en cualquier momento
persona.email = "correo@example.com"

console.log(persona)


// ==================================================
// 4. Eliminar una de las 3 primeras propiedades
// ==================================================

// delete elimina una propiedad del objeto
delete persona.edad

console.log(persona)


// ==================================================
// 5. Agregar una función e invocarla
// ==================================================

// Las funciones dentro de objetos se llaman métodos
persona.saludar = function () {
    console.log(`Hola, soy ${this.nombre}`)
}

// Invocamos el método
persona.saludar()


// ==================================================
// 6. Iterar las propiedades del objeto
// ==================================================

// for...in recorre todas las claves del objeto
for (let clave in persona) {

    // persona[clave] accede dinámicamente al valor
    console.log(clave + ": " + persona[clave])
}


// ==================================================
// 7. Crear un objeto anidado
// ==================================================

persona.trabajo = {
    profesion: "Programador",
    experiencia: 5
}

console.log(persona)


// ==================================================
// 8. Acceder a propiedades anidadas
// ==================================================

console.log(persona.trabajo.profesion)
console.log(persona.trabajo.experiencia)


// ==================================================
// 9. Comparar dos objetos
// ==================================================

let persona2 = {
    nombre: "Miguel Ángel Molina Díaz",
    alias: "Player",
    email: "correo@example.com"
}

// Los objetos no se comparan por contenido
// sino por referencia en memoria
console.log(persona === persona2)


// ==================================================
// 10. Comparar propiedades específicas
// ==================================================

// Aquí sí comparamos valores directamente
console.log(persona.nombre === persona2.nombre)