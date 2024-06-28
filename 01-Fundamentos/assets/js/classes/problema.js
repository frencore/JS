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
        //como no esta en el mismo scope o nivel no es bueno usar fher.nombre por temas de mentencion 
        console.log(`Nombre: ${fher.nombre}`);
        //mejor usa this para hacer referencia al nivel superior 
        console.log(`Nombre: ${this.nombre} - edad ${this.edad}`);
    }
};

// fher.imprimir();
function Persona(nombre, edad) {

    console.log('se ejecuto esta linea');
    this.nomre = nombre;
    this.edad = edad;
    this.imprimir = function () {
        //como no esta en el mismo scope o nivel no es bueno usar fher.nombre por temas de mentencion 
        console.log(`Nombre: ${fher.nombre}`);
        //mejor usa this para hacer referencia al nivel superior 
        console.log(`Nombre: ${this.nombre} - edad ${this.edad}`);
    };

};
//nueva instancia de Persona
const maria = new Persona('Maria', 18);
const melisa = new Persona('Melisa', 35);
console.log(maria);

maria.imprimir();
melisa.imprimir();