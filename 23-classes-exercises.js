/*
Clase 39 - Ejercicios: Clases
*/


// ==================================================
// 1. Crear una clase que reciba dos propiedades
// ==================================================

class User {

    constructor(nombre, alias) {
        // Propiedades del objeto
        this.nombre = nombre
        this.alias = alias
    }


// ==================================================
// 2. Método que utilice las propiedades
// ==================================================

    // Método que usa las propiedades del objeto
    mostrarUsuario() {
        console.log(`Usuario: ${this.nombre} | Alias: ${this.alias}`)
    }


// ==================================================
// 4. Método estático
// ==================================================

    // Los métodos static pertenecen a la clase
    // y no a los objetos creados con new
    static saludar() {
        console.log("Bienvenido al sistema de usuarios.")
    }

}


// ==================================================
// 3. Crear objeto y usar método
// ==================================================

let usuario1 = new User("Miguel Ángel Molina Díaz", "Player")

console.log(usuario1.nombre)
console.log(usuario1.alias)

usuario1.mostrarUsuario()


// ==================================================
// 5. Uso del método estático
// ==================================================

User.saludar()


// ==================================================
// 6. Clase con herencia
// ==================================================

// Clase hija que hereda de User
class Admin extends User {

    constructor(nombre, alias, rol) {

        // Llamamos al constructor de la clase padre
        super(nombre, alias)

        this.rol = rol
    }

    mostrarRol() {
        console.log(`Rol del usuario: ${this.rol}`)
    }

}

let admin1 = new Admin("Miguel Ángel Molina Díaz", "Ángel", "Administrador")

admin1.mostrarUsuario()
admin1.mostrarRol()


// ==================================================
// 7. Clase con getters y setters
// ==================================================

class Profile {

    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    // Getter
    get obtenerNombre() {
        return this.nombre
    }

    // Setter
    set cambiarEdad(nuevaEdad) {
        this.edad = nuevaEdad
    }

}


// ==================================================
// 8. Versión con propiedades privadas
// ==================================================

class PrivateProfile {

    #nombre
    #edad

    constructor(nombre, edad) {
        this.#nombre = nombre
        this.#edad = edad
    }

    get nombre() {
        return this.#nombre
    }

    set edad(nuevaEdad) {
        this.#edad = nuevaEdad
    }

}


// ==================================================
// 9. Uso de get y set
// ==================================================

let perfil = new PrivateProfile("Miguel Ángel Molina Díaz", 37)

console.log(perfil.nombre)

perfil.edad = 38

console.log(perfil)


// ==================================================
// 10. Sobrescribir método (override)
// ==================================================

class SuperAdmin extends Admin {

    // Sobrescribe el método mostrarUsuario
    mostrarUsuario() {
        console.log(`SuperAdmin: ${this.nombre} | Alias: ${this.alias}`)
    }

}

let superAdmin = new SuperAdmin("Miguel Ángel Molina Díaz", "Player", "SuperAdmin")

superAdmin.mostrarUsuario()