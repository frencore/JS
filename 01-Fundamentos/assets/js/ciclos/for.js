
const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');
for( let i = 0; i < heroes.length; i++ ) {
    console.log( heroes[i] );
}


console.warn('For in');
for( let i in heroes ) {//para recorrer arrays
    console.log( heroes[i] );
}

console.warn('For of');
for( let heroe of heroes ){//extrae el valor de heroes y lo regresa a la variable singular
    console.log( heroe );
}

