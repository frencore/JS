
let a = 10;
let b = a;
a = 30;

//por valor
console.log({ a, b });


//los objetos se pasan por referencia no es copia del objeto se esta pasando el mismo objeto siempre
let juan = { nombre: 'juan' };
let ana = juan;
ana.nombre = 'ana';

console.log({ juan, ana });

//tambien pasa por referencia no es una copia del objeto 
const cambiarNombre = (persona) => {
    persona.nombre = 'tony';
    return persona;
}

//tony no es una copia del objeto se esta pasando por referencia
let peter = { nombre: 'peter' };
let tony = cambiarNombre(peter);

console.log({ peter, tony });


//para evitar pasar por referencia un objeto uso {} para crear una copia del objeto
let juan2 = { nombre2: 'juan' };
let ana2 = { juan2 };
ana2.nombre2 = 'ana';

//ana pasa a ser un objeto que tiene dentro otro objeto en el cual si tiene el nombre
//anan pasa a ser un objeto que tiene otra propieda llamada juan que es un objeto

console.log({ juan2, ana2 });


//uso de operador SPREAD ... el cual separa los elementos (rope la referencia)
//y esto es *PARA TODO MENOS PARA FUNCIONES.*
//Por otro lado la sintaxis spread expande los iterables(referencial) en elementos individuales.
//es diferente si se utiliza en una FUNCTION ya que, este agrupa todos los parametros de entrada 
// REST en una FUNCTION crea un arreglo de los parametros y los agrupa.

let juan3 = { nombre3: 'juan' };
let ana3 = { ...juan3 };// crea un objeto y serapara de la referencia anterior
ana3.nombre3 = 'ana';
console.log({ juan3, ana3 });

//para una funcion usamos SPREAD en el parametro para rompre la referencia
//se puede usar pero con {} para que no agrupe y cree una copia
const cambiarNombre2 = ({ ...persona2 }) => {
    persona2.primerNombre = 'tony';
    return persona2;
}

//tony no es una copia del objeto. se esta pasando por referencia
let peter2 = { primerNombre: 'peter' };
let tony2 = cambiarNombre2(peter2);

console.log({ peter2, tony2 });


//Arreglos

const frutas = ['manzana', 'pera', 'piña'];
//SPREAD rompe la referencia
console.time('SPREAD');// inicia y mide el tiempo de la respuesta
const otrasFrutas = [...frutas];
console.timeEnd('SPREAD');// termina y mide el tiempo de la respuesta

otrasFrutas.push('mango');

console.log({ frutas, otrasFrutas });


