/**Objetos **/
//hasta la clase 4 podíamos agrupar los datos de esta forma:

let nombreAlumno = "Luciana";
let apellidoAlumno = "Garro";
let edad = 30;

//con los objetos vamos agrupar estos datos de manera diferentes, y muchos más práctica: en una única entidad. 
//Sintaxis:

let alumnoLuciana = {
    nombre: "Luciana",
    apellido:  "Garro",
    edad: 30


};

//** un objeto es una colección de datos relacioandos como una entidad */
// poseen PROPIEDADES Y MÉTODOS
//Propiedades: son datos que describen al objeto: El: nombre, apellido, edad, etc.
//propiedad: ¿Cómo se definen? como pares de nombre y valor



//MÉTODOS: los métodos son funciones que se ejecutan en el objeto. 

//Ejemplos de objetos. 
let perro = {
    nombre: "coderdog",
    edad: 5,
    color: "negro"
};

console.log(perro);

let auto = {
    marca: "Ford",
    modelo: "Mondeo",
    fabricacion: "2020",
    precio: 700000,
    km: 70000

};
console.log (auto);
console.log(typeof auto);


//¿Cómo puedo ver las propiedades del objeto sin verlo completo por consola?
// Hay dos maneras de acceder a las propiedades almacenadas dentro del objeto 
//1) utilizo el nombre del objeto, luego un . (punto)

console.log(auto.fabricacion);

//2) otra forma de hacerlo es por medio de [] (corchetes)
console.log(auto ["fabricacion"]);

//¿Puedo asignar nuevos valores a estas propiedad?
auto.precio=800000;
console.log(auto.precio);
console.log(auto);

//¿Qué pasa si trabajo con const? 

const yerba={
    nombre: "Playita",
    precio: 600,
    cantidad: 100
};
console.log(yerba)

//¿Podría modificarlo?

yerba.precio=450;
console.log(yerba);

//cuando nosotros trabajamos con valores como number, strinf, un booleano: estos se denominan valores PRIMARIOS y cuando nosotros queremos acceder a ellos vamos directo al valor. 
//Cuando trabajamos con un OBJETO este comportamiento cambia: porque accedemos a un valor de referencia, por eso lo puedo modificar, a pesar de estar declarado el objeto como una constante. 

//FUCIONES CONSTRUCTORAS: en JS, el contructor de un objeto es una función que usamos para crear un nuev objeto cada vez que sea necesario. 
//Sintaxis:

function Persona (nombre, apellido, edad){
    this.nombre= nombre;
    this.apellido= apellido;
    this.edad=edad;

    //**método que saluda */
    this.saludar=function (){
        console.log("Hola sos  " + this.nombre);
    }
}

//voy a crear un objeto a partir de la función constructora
const Persona1 = new Persona ("carlos", "Suarez", 30);
console.log(Persona1);
const Persona3 = new Persona ("Miguel", "Sanchez",45);
console.log(Persona3);

//Métodos y funciones//
//las funciones son generalmente de ACCESO GLOBAL, pero los MÉTODOS son únicamente para sir invocados por los objetos que la contienen. 

// let nombre = prompt ("ingrese su nombre: ");
// let apellido = prompt ("ingrese apellido:  ");
// let edadNueva= prompt ("ingrese su edad:  ");

Persona1.saludar();

//*clases**//
//las clases en JS tienen una sintaxis más clara y simple para poder crear objetos. Son un equivalente al empleo de la función contrsuctora y permite definir también diferentes tipo de métodos. 

class Producto {
    constructor (nombre, precio){
        this.nombre=nombre;
        this.precio=precio
    }

    sumaIva(){
        return this.precio *1.21;
    }
}

const fideos= new Producto ("fideos", 90);
console.log ("El precio de los fideos es de:  "+fideos.precio + " y con el iva incluido es de:  " + fideos.sumaIva());

//Métodos toLowerCase() y toUpperCase()

//creamos var que almacene una frase
//voy de minúsculas a mayúsculas
let frase = "Hola, soy un string";
console.log(frase.toUpperCase());

//voy de minúsculas a mayúsculas
let fraseDos = "HOLA SOY UN STRING";
console.log(fraseDos.toLowerCase());

//Length es una propiedad que devuelve la cantidad de caracteres de un string.

console.log(frase.length);

//operadores IN y FOR...IN//

//el operador IN nos permite saber si un objeto tiene una propiedad o no (booleanos). Me va a devolver true false. 
let Homero ={
    nombre:"Homero",
    apellido: "Simpson",
    profesion:"inspector de seguridad nuclear en el sector 7g",
    edad: 39
};

console.log("nombre" in Homero);
console.log("casado" in Homero);

//FOR... IN//
//NOS PERMITE RECORRER LAS PROPIEDADES DE UN OBJETO.
//let propiedad es como una var auxialiar que va a recorrer las propiedades del objeto, mostrandolas por consola. 

for (let propiedad in Homero){
    console.log(propiedad);
}



//si quiero mostrar por consola cada propiedad con su valor:
for ( let propiedad in Homero){
    console.log(propiedad + " : " + Homero[propiedad]);
}











