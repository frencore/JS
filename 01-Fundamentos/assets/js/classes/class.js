


class Persona {


    static _conteo = 0;

    static get conteo() {
        return Persona._conteo + ' instancias';
    }


    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
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

// console.log(spiderman.getComidaFavorita);

// console.log(spiderman);

console.log('Conteo statico', Persona._conteo);
console.log(Persona.conteo);