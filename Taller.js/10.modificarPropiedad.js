const carro = {
  marca: "Ford Ranger",
  modelo: "2024-2026",
  propietario: {
    nombre: "Deisy",
    edad: 26
  }
};

console.log(carro.marca);
console.log(carro.propietario.nombre);

carro.propietario.edad = 31;

console.log(carro.propietario.edad);