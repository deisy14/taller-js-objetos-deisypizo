
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  propietario: {
    nombre: "Andrés Gómez",
    edad: 35
  }
};
const {
  propietario: { nombre, edad }
} = carro;
console.log(nombre);
console.log(edad);