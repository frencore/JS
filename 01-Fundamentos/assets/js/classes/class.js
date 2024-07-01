


class Persona {

    nombre = '';
    codigo = '';
    frase = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
        // console.log('Hola!');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }
}

const spiderman = new Persona('Peter Parker', 'Spider', 'spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'yo soy Ironman');
console.log(spiderman);
console.log(ironman);