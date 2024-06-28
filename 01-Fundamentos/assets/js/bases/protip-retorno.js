function crearPersona(nombre, apellido) {
    return {
        nombre,
        apellido,

    }

}

const p = crearPersona('felipe', 'Rencoret');
console.log(p);


const p2 = (nombre, apellido) => ({ nombre, apellido });
console.log(p2('1', '2'));


const argumentos = (edad, ...arguments) => {
    //console.log({ edad, arguments })
    return arguments;
};

const [casado, vivo, nombre, saludo] = argumentos(10, true, true, 'Felipe', 'nada');
console.log({ casado, vivo, nombre, saludo });

//llamamos solo a la variable de la funcion que necesitamos 
const { apellido } = crearPersona('felipe', 'Rencoret');
console.log({ apellido });

//si quiero llamar a la propiedad de otra manera
const { apellido: primerApellido } = crearPersona('felipe', 'Rencoret');
console.log({ primerApellido });


const tony = {
    nombre: 'Tony Starck',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    trajes: [
        'Mark 1',
        'Mark 5',
        'hulk Buster',
    ],
};

//creo una fun de flecha con identico nombre de parametros que el objeto que estoy mandando
//y puedo agregar un valor por defecto en el caso que no este en los parametros,
// como en edad por ejemplo
const imprimeProp = ({ nombre, codeName, vivo, edad = 0, trajes }) => {
    console.log({ nombre, codeName, vivo, edad, trajes });
};

imprimeProp(tony);