function saludar() {
    console.log('Hola mundo');
}

//funcion anonima
const saludar2 = function () {
    console.log('Hola mundo');
}

//con parametros
function saludar3(nombre) {
    console.log('nombre: ' + nombre);
}

//mostrar argumentos
function saludar4(nombre) {
    console.log(arguments);
    console.log('Hola ' + nombre);

}

const saludarFlecha = () => {
    console.log('hola funcion flecha');


}
const saludarFlecha2 = nombre => {
    console.log('hola funcion flecha ' + nombre);

}

//si la funcion no tiene retorno explicito es undefine
function saludarConRetorno() {
    console.log('Hola mundo');
    return 1;
}

const retorno = saludarConRetorno();
console.log('retorno es: ' + retorno);

saludar();
saludar2();
saludar3('Felipe');
saludar4('Felipe', 36, true);
saludarFlecha();
saludarFlecha2('Felipe');


function sumar(a, b) {
    return a + b;
}
console.log('resultado: ' + sumar(1, 2));

const sumar2 = (a, b) => a + b;
console.log('sumar function flecha: ' + sumar2(1, 2));

const ran = () => Math.random();

console.log('numero aleatorio ', ran());
console.log('numero aleatorio2 ', Math.random());