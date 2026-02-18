// 1. Variable para cada operación aritmética

let suma = 10 + 5
let resta = 10 - 5
let multiplicacion = 10 * 5
let division = 10 / 5
let modulo = 10 % 3
let exponente = 2 ** 3


// 2. Variables para cada operación de asignación

let numeroAsignacion = 10

numeroAsignacion += suma
numeroAsignacion -= resta
numeroAsignacion *= multiplicacion
numeroAsignacion /= division
numeroAsignacion %= modulo
numeroAsignacion **= 2


// 3. 5 comparaciones verdaderas

console.log(10 > 5)
console.log(5 < 10)
console.log(10 >= 10)
console.log(5 !== 10)
console.log(10 === 10)


// 4. 5 comparaciones falsas

console.log(10 < 5)
console.log(5 > 10)
console.log(10 !== 10)
console.log(5 === "5")
console.log(10 <= 5)


// 5. Operador lógico AND

console.log(10 > 5 && 5 < 8)


// 6. Operador lógico OR

console.log(10 < 5 || 5 < 8)


// 7. Combinación de AND y OR

console.log((10 > 5 && 5 < 8) || 3 > 10)


// 8. Negación

console.log(!(10 > 5))


// 9. Operador ternario

let edad = 20
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad"
console.log(mensaje)


// 10. Combinación de operadores aritméticos, comparación y lógica

let resultado = (5 + 5 > 8) && (10 / 2 === 5)
console.log(resultado)