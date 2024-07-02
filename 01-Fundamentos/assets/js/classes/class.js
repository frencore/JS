


class Persona {

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
        // console.log('Hola!');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }


    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es${this.codigo}`);
    }
    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spider', 'spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'yo soy Ironman');

//console.log(ironman);

//spiderman.quienSoy();
spiderman.miFrase();


spiderman.setComidaFavorita = 'El pie de cereza';

console.log(spiderman.getComidaFavorita);

console.log(spiderman);