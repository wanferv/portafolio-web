import { fetchServicios, crearServicio } from "./api.js";

const listaServicios = document.getElementById("lista-servicios");
const formServicio = document.getElementById("form-servicio");

const cargarServicios = async () => {
  const servicios = await fetchServicios();
  listaServicios.innerHTML = ""; // Limpiar lista antes de agregar
  servicios.forEach((servicio) => {
    const li = document.createElement("li");
    li.textContent = `${servicio.titulo} - ${servicio.descripcion}`;
    listaServicios.appendChild(li);
  });
};

formServicio.onsubmit = async (e) => {
  e.preventDefault();
  const nuevoServicio = {
    titulo: document.getElementById("titulo").value,
    descripcion: document.getElementById("descripcion").value,
  };
  await crearServicio(nuevoServicio);
  formServicio.reset();
  cargarServicios();
};

cargarServicios(); // Cargar datos al inicio