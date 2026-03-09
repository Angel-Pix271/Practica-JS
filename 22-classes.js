/*
Clase 37 - Clases
*/

// =======================================
// Clases
// =======================================

// Una clase es una plantilla para crear objetos.
// Permite organizar datos (propiedades) y comportamientos (métodos).

class Person {

    constructor(name, age, alias) {
        // constructor se ejecuta automáticamente
        // cuando se crea un objeto con "new"
        this.name = name
        this.age = age
        this.alias = alias
    }

}


// =======================================
// Crear objetos a partir de la clase
// =======================================

// new crea una instancia de la clase
let person = new Person("Miguel Ángel Molina Díaz", 37, "Player")
let person2 = new Person("Miguel Ángel Molina Díaz", 37, "Ángel")

console.log(person)
console.log(person2)

console.log(typeof person)


// =======================================
// Valores por defecto
// =======================================

// Los parámetros pueden tener valores por defecto
class DefaultPerson {

    constructor(name = "Sin nombre", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

let person3 = new DefaultPerson("Miguel Ángel Molina Díaz", 37)

console.log(person3)


// =======================================
// Acceso a propiedades
// =======================================

console.log(person3.alias)

// También se puede acceder usando corchetes
console.log(person3["alias"])

// Modificación de propiedad
person3.alias = "Player"

console.log(person3.alias)


// =======================================
// Métodos en clases
// =======================================

class PersonWithMethod {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    // Método de la clase
    walk() {
        console.log("La persona camina.")
    }

}

let person4 = new PersonWithMethod("Miguel Ángel Molina Díaz", 37, "Player")

person4.walk()


// =======================================
// Propiedades privadas
// =======================================

// El símbolo # indica que la propiedad es privada
class PrivatePerson {

    #bank

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay() {
        // Solo se puede acceder dentro de la clase
        this.#bank
    }

}

let person5 = new PrivatePerson(
    "Miguel Ángel Molina Díaz",
    37,
    "Player",
    "IBAN123456789"
)

// No podemos acceder desde fuera
// console.log(person5.bank)

console.log(person5)


// =======================================
// Getters y Setters
// =======================================

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    // Getter → permite leer propiedad privada
    get name() {
        return this.#name
    }

    // Setter → permite modificar propiedad privada
    set bank(bank) {
        this.#bank = bank
    }

}

person6 = new GetSetPerson(
    "Miguel Ángel Molina Díaz",
    37,
    "Player",
    "IBAN123456789"
)

console.log(person6)
console.log(person6.name)

person6.bank = "NEW-IBAN-123456789"



/*
Clase 38 - Herencia de clases
*/


// =======================================
// Herencia
// =======================================

// Clase base o clase padre
class Animal {

    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("El animal emite un sonido genérico")
    }

}


// =======================================
// Clase hija
// =======================================

class Dog extends Animal {

    // Sobrescribe el método de la clase padre
    sound() {
        console.log("Guau!")
    }

    run() {
        console.log("El perro corre")
    }

}


// =======================================
// Otra clase hija
// =======================================

class Fish extends Animal {

    constructor(name, size) {

        // super llama al constructor de la clase padre
        super(name)

        this.size = size
    }

    swim() {
        console.log("El pez nada")
    }

}


let myDog = new Dog("PlayerDog")

myDog.run()
myDog.sound()


let myFish = new Fish("PlayerFish", 10)

myFish.swim()
myFish.sound()


// =======================================
// Métodos estáticos
// =======================================

// Un método static pertenece a la clase,
// no a las instancias
class MathOperations {

    static sum(a, b) {
        return a + b
    }

}

// No se usa "new"
console.log(MathOperations.sum(5, 10))