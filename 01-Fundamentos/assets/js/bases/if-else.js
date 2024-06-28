
const hoy = new Date();
let dia = hoy.getDay();
console.log(dia);

if (dia == '3') {// el == compara solo el valor no el tipo de dato lleva todo a string y compara
    console.log('el dia es igual');

} else {
    console.log('el dia es distinto');

}

if (dia === '3') {//el === compara no solo el valor sino que tambien el tipo de dato
    console.log('el dia es igual');

} else {
    console.log('el dia es distinto');

}


const diasLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado',
};
dia = 10;
console.log(diasLetras[dia] || 'dia no definido');

const diasLetras2 = [
    'domingo',
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',];
dia = 5;
console.log(diasLetras2[dia] || 'dia no definido');


const diasLetras3 = {
    1: () => 'lunes',
    2: () => 'martes',
    0: () => 'domingo',
    3: () => 'miercoles',
    4: () => 'jueves',
    5: () => 'viernes',
    6: () => 'sabado',
};
dia = 4;
console.log(diasLetras3[dia]() || 'dia no definido');