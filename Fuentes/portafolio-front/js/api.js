const API_URL = "http://localhost:3000/api/servicios";

export const fetchServicios = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

export const crearServicio = async (servicio) => {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(servicio),
  });
};

export const eliminarServicio = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};

export const actualizarServicio = async (id, servicio) => {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(servicio),
  });
};