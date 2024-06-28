let juegos = ['Zelda', 'Mario', 'Metroid', 'chrono',];

console.log('Largo: ', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo });
juegos.forEach((elemento, indice, arr) => {

    console.log({ elemento, indice, arr });

});

//inserta un elemento al final de arreglo
let nuevaLongitud = juegos.push('F-Zero');
console.log({ nuevaLongitud, juegos });

//inserta un elemento al inicio del arreglo
nuevaLongitud = juegos.unshift('Fire Emblend');
console.log({ nuevaLongitud, juegos });

//elimina el ultimo elemento del arreglo y lo regresa
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

console.log(juegos);
//recive un punto inicial (index) y cuantos elementos quiere borrar y regresa un nuevo arrray de los elemntos eliminados
let pos = 1;
let juegosElimjinados = juegos.splice(pos, 2);
console.log({ juegosElimjinados, juegos });

//saber el indice de un elemento si es -1 no lo encontro
let metroidIndex = juegos.indexOf('Metroid');

console.log({ metroidIndex });