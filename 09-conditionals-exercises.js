// =======================================
// 1. Imprime tu nombre si una variable toma su valor
// =======================================

let nombre = "Miguel Angel"
let variable = "Miguel Angel"

if (variable === nombre) {
    console.log(nombre)
}


// =======================================
// 2. Validar usuario y contraseña
// =======================================

let usuario = "admin"
let password = "1234"

let usuarioInput = "admin"
let passwordInput = "1234"

if (usuarioInput === usuario && passwordInput === password) {
    console.log("Acceso concedido")
} else {
    console.log("Usuario o contraseña incorrectos")
}


// =======================================
// 3. Número positivo, negativo o cero
// =======================================

let numero = -5

if (numero > 0) {
    console.log("El número es positivo")
} else if (numero < 0) {
    console.log("El número es negativo")
} else {
    console.log("El número es cero")
}


// =======================================
// 4. Verificar si puede votar
// =======================================

let edad = 16

if (edad >= 18) {
    console.log("Puede votar")
} else {
    console.log(`No puede votar. Le faltan ${18 - edad} años`)
}


// =======================================
// 5. Operador ternario adulto o menor
// =======================================

let tipoPersona = edad >= 18 ? "adulto" : "menor"
console.log(tipoPersona)


// =======================================
// 6. Estación del año según mes
// =======================================

let mes = 4
let estacion

if (mes === 12 || mes === 1 || mes === 2) {
    estacion = "Invierno"
} else if (mes >= 3 && mes <= 5) {
    estacion = "Primavera"
} else if (mes >= 6 && mes <= 8) {
    estacion = "Verano"
} else if (mes >= 9 && mes <= 11) {
    estacion = "Otoño"
} else {
    estacion = "Mes inválido"
}

console.log(estacion)


// =======================================
// 7. Número de días según mes
// =======================================

let dias

if (mes === 2) {
    dias = 28
} else if (
    mes === 4 || mes === 6 ||
    mes === 9 || mes === 11
) {
    dias = 30
} else if (mes >= 1 && mes <= 12) {
    dias = 31
} else {
    dias = "Mes inválido"
}

console.log(dias)


// =======================================
// 8. Switch saludo por idioma
// =======================================

let idioma = "es"

switch (idioma) {
    case "es":
        console.log("Hola")
        break
    case "en":
        console.log("Hello")
        break
    case "fr":
        console.log("Bonjour")
        break
    default:
        console.log("Idioma no soportado")
}


// =======================================
// 9. Switch estación del año
// =======================================

switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log("Invierno")
        break
    case 3:
    case 4:
    case 5:
        console.log("Primavera")
        break
    case 6:
    case 7:
    case 8:
        console.log("Verano")
        break
    case 9:
    case 10:
    case 11:
        console.log("Otoño")
        break
    default:
        console.log("Mes inválido")
}


// =======================================
// 10. Switch días del mes
// =======================================

switch (mes) {
    case 2:
        console.log(28)
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(30)
        break
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(31)
        break
    default:
        console.log("Mes inválido")
}