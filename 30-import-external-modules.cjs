/*
Clase 46 - Módulos externos
*/


// ==================================================
// Importación de módulos externos (Node.js)
// ==================================================

// require() permite importar módulos del sistema.
// En este caso usamos el módulo nativo "os",
// que proporciona información del sistema operativo.

const os = require("os")


// ==================================================
// Información del sistema
// ==================================================

// platform() → devuelve el sistema operativo
// Ejemplo: win32, linux, darwin
console.log("Sistema operativo:", os.platform())


// arch() → devuelve la arquitectura del procesador
// Ejemplo: x64, arm
console.log("Arquitectura:", os.arch())


// totalmem() → memoria total del sistema en bytes
console.log("Memoria total:", os.totalmem())


// freemem() → memoria libre disponible en bytes
console.log("Memoria libre:", os.freemem())