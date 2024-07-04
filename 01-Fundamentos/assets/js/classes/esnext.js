class Rectangulo {
  #area = 0;//se crea una variable privada para que no pueda ser modificada 
  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;

    this.#area = base * altura;
  }
  calcularArea() {
    console.log(this.#area * 2);
  }
}
const rectangulo = new Rectangulo(10, 15);
// rectangulo.#area = 100;
rectangulo.calcularArea();
console.log(rectangulo);
