//instancia unica de mi clase

class Singleton {
  static instancia; //  undefine
  nombre = "";

  constructor(nombre = "") {
    // console.log(Singleton.instancia); //undefine
    // const a = undefined;
    // console.log(a);
    // console.log(!a); //opuesto de undefine es true
    // console.log(!!a); //lo opuesto de true es false
    //si ya existe una instancia
    if (!!Singleton.instancia) {
      return Singleton.instancia; // luego de ejecutar el return no sigue ejecutando las linea posteriores
    }
    Singleton.instancia = this;
    this.nombre = nombre;
  }
}

const instancia1 = new Singleton("Ironman");
const instancia2 = new Singleton("Spiderman");
const instancia3 = new Singleton("Black Panther");

console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia3 es: ${instancia3.nombre}`);
