
const regresaTrue = () => {
    console.log('regresa true');
    return true;
};


const regresaFalse = () => {
    console.log('regresa false');
    return false;
};

console.warn('Not o la negacion');
console.log(true);
console.log(!true);// negacion ! o cambia de valor opuesto
console.log(!false);

console.log(!regresaFalse());

console.warn('AND');//va a retornar true si todos los valores son verdaderos
console.log(true && true);//true
console.log(true && false);//false
console.log(true && !false);//true


console.log('==========================');
console.log(regresaFalse() && regresaTrue());//ejecuta la primera funcion y al ser falso el retorno ya el resto no lo ejecuta
console.log(regresaTrue() && regresaFalse());//si el primero es true ejecuta todo


console.log('OR');//si uno solo es verdadero la salid ava a ser verdadera
console.log(true || false);
console.log(false || false);//false

console.log(regresaTrue() || regresaFalse());//como ya regreso un valor verdadero no hace falta evaluar el segundo

