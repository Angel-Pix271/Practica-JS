/*
Clase 45 - Ejercicios: Módulos
Archivo: mathUtils.js
*/


// ==================================================
// 1. Exportar una función
// ==================================================

export function add(a, b) {

    return a + b

}


// ==================================================
// 2. Exportar una constante
// ==================================================

export const PI = 3.1416


// ==================================================
// 3. Exportar una clase
// ==================================================

export class User {

    constructor(nombre, alias) {

        this.nombre = nombre
        this.alias = alias

    }

    mostrarUsuario() {

        console.log(`Usuario: ${this.nombre} | Alias: ${this.alias}`)

    }

}


// ==================================================
// 7. Exportación por defecto
// ==================================================

// Solo se puede exportar un elemento por defecto
export default function multiply(a, b) {

    return a * b

}