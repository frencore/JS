let personaje = {
    nombre: 'Tony Starck',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.024,
        lng: -118.70,
    },
    trajes: [
        'Mark 1',
        'Mark 5',
        'hulk Buster',
    ],
    direccion:
    {
        zip: '8022,555',
        ubicacion: 'Quete, Importa',
    },
    'ultima pelicula': 'nose',
};

console.log(personaje);
console.log('nombre: ', personaje.nombre);
console.log('nombre: ', personaje['nombre']);

console.log('latitud: ', personaje.coords.lat);

console.log('Cantidad de trajes: ', personaje.trajes.length);
console.log('Ultimo trajes: ', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('vivo: ', personaje[x]);

//al ser una propiedad del objeto especial se llama solo de esta forma 
console.log(personaje['ultima pelicula']);


//borrar una propiedad del objeto
delete personaje.edad;
console.log(personaje);

//como comvertir el objeto en un array (van a aparecer las propiedad en orden que fueron creadas)
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

//nueva propiedad en el objeto
personaje.casado = true;
console.log({ personaje });

//que el objeto no pueda ser cambiado esto solo impiede que tenga un nuevo valor pero no que
//sus prop del objeto puedan ser cambiadas
const nuevoObjeto = personaje;
personaje.nuevo = true;
console.log(nuevoObjeto);
//esto da error ya que no se pueda cambiar su valor una asignacion a una constante
//nuevoObjeto = false;

//para boquear las modificaciones de las propiedades de un obj
Object.freeze(personaje);
personaje.dinero = 100000000;
personaje.casado = false;
//apesar que se esta creando la propiedad no se esta agregando
console.log(personaje);
//pero si se va a poder cambiar los valores en los areglos del objeto
personaje.direccion.ubicacion = 'Costa rica';
console.log(personaje.direccion.ubicacion);
//si queremos bloquear tambien la ubicacion
Object.freeze(personaje.direccion);
personaje.direccion.ubicacion = 'Costa';
console.log(personaje.direccion.ubicacion);


//obtener todas las prop de un objeto
const prop = Object.getOwnPropertyNames(personaje);
//obtener los valores de las prop del objeto
const value = Object.values(personaje);
console.log({ prop, value });


















