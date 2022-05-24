// Se declara la clase usuario
class Usuario{
    constructor(nombre, apellido, libros, mascotas) {
    // se cargaron los atributos del usuario
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
        
    }
        // Usuario cuenta con los Medotos
    getFullName () {
        console.log(`${this.nombre} ${this.apellido}`) 
    }
    // Elemento push añade elementos alfinal del arrar
    addMascota(animal){
       this.mascotas.push(animal)
    }
    // elemento length cuenta lo que tengo adentro de las comillas.
    countAnimales(){
        console.log( this.mascotas.length)
    }
    // pushea el nombre 
    addBook(nombre, autor){
       this.libros.push({nombre, autor})
    }
    getbookNames() {
        console.log(this.libros.map(libros => libros.nombre))
    }

}
// Coloca el nombre y apellido
let usuario = new Usuario("Pablo","Perez",[],[]);
// Agrega mascota y libros
usuario.addMascota("Blacky");
usuario.addBook("Spider-man","marvel");
usuario.addBook("Stanley","Venom");
// muestra los datos pedidos
usuario.getFullName();
usuario.countAnimales();
usuario.getbookNames();
