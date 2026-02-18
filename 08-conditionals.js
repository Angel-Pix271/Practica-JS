// ==============================
// if, else if, else
// ==============================

// if (si)

let edad = 37

if (edad === 37) {
    console.log("La edad es 37")
}


// else (si no)

if (edad === 37) {
    console.log("La edad es 37")
} else {
    console.log("La edad no es 37")
}


// else if (si no, si)

if (edad === 37) {
    console.log("La edad es 37")
} else if (edad < 18) {
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 37 ni es menor de edad")
}


// ==============================
// Operador ternario
// ==============================

const mensaje = edad === 37
    ? "La edad es 37"
    : "La edad no es 37"

console.log(mensaje)


// ==============================
// switch
// ==============================

let dia = 3
let nombreDia

switch (dia) {
    case 0:
        nombreDia = "Lunes"
        break
    case 1:
        nombreDia = "Martes"
        break
    case 2:
        nombreDia = "Miércoles"
        break
    case 3:
        nombreDia = "Jueves"
        break
    case 4:
        nombreDia = "Viernes"
        break
    case 5:
        nombreDia = "Sábado"
        break
    case 6:
        nombreDia = "Domingo"
        break
    default:
        nombreDia = "Número de día incorrecto"
}

console.log(nombreDia)