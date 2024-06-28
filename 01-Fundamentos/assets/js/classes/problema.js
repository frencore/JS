const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        //como no esta en el mismo scope o nivel no es bueno usar fher.nombre por temas de mentencion 
        console.log(`Nombre: ${fher.nombre}`);
        //mejor usa this para hacer referencia al nivel superior 
        console.log(`Nombre: ${this.nombre} - edad ${this.edad}`);

    }

}

const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad ${this.edad}`);
    }
};

// fher.imprimir();
//uso de clases anteriormente
function Persona(nombre, edad) {

    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function () {
        //mejor usa this para hacer referencia al nivel superior 
        console.log(`Nombre: ${this.nombre} - edad ${this.edad}`);
    };
};


//nueva instancia de Persona
const maria = new Persona('Maria', 18);
console.log(maria); 
const melisa = new Persona('Melisa', 35);


maria.imprimir();
melisa.imprimir();