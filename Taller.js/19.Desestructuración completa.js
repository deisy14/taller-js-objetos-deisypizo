function mostrarLibro({
  titulo,
  autor: { nombre },
  editorial: { nombreEditorial }
}) {
  console.log(
    `${titulo} fue escrito por ${nombre} y publicado por ${nombreEditorial}`
  );
}

const libro = {
  titulo: "Aprendiendo JavaScript",
  autor: {
    nombre: "Sofía Martínez"
  },
  editorial: {
    nombreEditorial: "CodePress"
  }
};

mostrarLibro(libro);