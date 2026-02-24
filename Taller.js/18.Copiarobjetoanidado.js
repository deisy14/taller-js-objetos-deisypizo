const carro = {
  marca: "Kia",
  modelo: "Sportage",
  propietario: {
    nombre: "Laura Méndez",
    edad: 29
  }
};

const carroCopia = {
  ...carro,
  propietario: {
    ...carro.propietario,
    edad: 35 
  }
};

console.log("Original:");
console.log(carro);

console.log("Copia:");
console.log(carroCopia);