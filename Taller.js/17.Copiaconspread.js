
const persona = {
  nombre: "Daniel Rojas",
  edad: 30,
  profesion: "Programador"
};

const personaCopia = {
  ...persona,
  nombre: "Pedro Ramírez" 
};

console.log("Objeto original:");
console.log(persona);

console.log("Objeto copia:");
console.log(personaCopia);