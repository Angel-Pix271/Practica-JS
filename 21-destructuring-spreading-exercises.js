/*
Clase 36 - Ejercicios: Desestructuración y propagación
*/


// ==================================================
// 1. Extraer los dos primeros elementos de un array
// ==================================================

const numeros = [10, 20, 30, 40]

// Desestructuración de array
// first toma el primer valor
// second toma el segundo valor
const [first, second] = numeros

console.log(first)
console.log(second)


// ==================================================
// 2. Desestructuración con valor predeterminado
// ==================================================

const valores = [5]

// Si el segundo elemento no existe,
// se usa el valor por defecto (100)
const [valor1, valor2 = 100] = valores

console.log(valor1)
console.log(valor2)


// ==================================================
// 3. Extraer dos propiedades de un objeto
// ==================================================

const persona = {
    nombre: "Miguel Ángel Molina Díaz",
    alias: "Player",
    edad: 37
}

// Desestructuración de objeto
const { nombre, alias } = persona

console.log(nombre)
console.log(alias)


// ==================================================
// 4. Desestructuración con nuevos nombres
// ==================================================

// Se pueden renombrar las variables al extraerlas
const { nombre: nombreUsuario, alias: nombreJugador } = persona

console.log(nombreUsuario)
console.log(nombreJugador)


// ==================================================
// 5. Desestructuración de objeto anidado
// ==================================================

const usuario = {
    nombre: "Miguel Ángel Molina Díaz",
    perfil: {
        alias: "Ángel",
        profesion: "Programador"
    }
}

// Extraemos propiedades del objeto interno
const { perfil: { alias: aliasPerfil, profesion } } = usuario

console.log(aliasPerfil)
console.log(profesion)


// ==================================================
// 6. Combinar dos arrays con propagación
// ==================================================

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

// ... expande los elementos del array
const arrayCombinado = [...array1, ...array2]

console.log(arrayCombinado)


// ==================================================
// 7. Crear copia de un array
// ==================================================

const copiaArray = [...array1]

console.log(copiaArray)


// ==================================================
// 8. Combinar dos objetos
// ==================================================

const objeto1 = {
    nombre: "Miguel Ángel Molina Díaz",
    alias: "Player"
}

const objeto2 = {
    edad: 37,
    profesion: "Programador"
}

// Spread combina propiedades
const objetoCombinado = { ...objeto1, ...objeto2 }

console.log(objetoCombinado)


// ==================================================
// 9. Copiar un objeto
// ==================================================

const copiaObjeto = { ...objeto1 }

console.log(copiaObjeto)


// ==================================================
// 10. Combinar desestructuración y propagación
// ==================================================

const datos = {
    nombre: "Miguel Ángel Molina Díaz",
    alias: "Player",
    edad: 37
}

// Extraemos nombre
const { nombre: nombrePersona, ...restoDatos } = datos

// restoDatos contiene las propiedades restantes
console.log(nombrePersona)
console.log(restoDatos)