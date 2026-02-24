const carro = {
  marca: "Mazda",
  modelo: "CX-5",
  propietario: {
    nombre: "Andrés López",
    edad: 33
  }
};

function infoPropietario({
  propietario: { nombre, edad }
}) {
  return `${nombre} tiene ${edad} años`;
}

console.log(infoPropietario(carro));