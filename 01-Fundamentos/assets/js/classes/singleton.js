//instancia unica de mi clase

class Singleton {
  static instancia; //  undefine
  nombre = "";

  constructor(nombre = "") {
    // console.log(Singleton.instancia); //undefine
    //si ya existe una instancia retorna la que ya existe (si no es undefine)
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
