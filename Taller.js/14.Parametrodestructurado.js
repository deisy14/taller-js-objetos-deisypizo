
const persona = {
  nombre: "Laura Gómez",
  edad: 24,
  profesion: "Diseñadora"
};

function mostrarDatos({ nombre, edad }) {
  console.log(nombre);
  console.log(edad);
}

mostrarDatos(persona);