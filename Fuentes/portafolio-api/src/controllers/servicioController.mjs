import Servicio from "../models/servicio.mjs";

// Obtener todos los servicios
export const obtenerServicios = async (req, res) => {
  try {
    const servicios = await Servicio.find();
    res.json(servicios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los servicios" });
  }
};

// Obtener un servicio por ID
export const obtenerServicio = async (req, res) => {
  try {
    const servicio = await Servicio.findById(req.params.id);
    if (!servicio) return res.status(404).json({ error: "Servicio no encontrado" });
    res.json(servicio);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el servicio" });
  }
};

// Crear un nuevo servicio
export const crearServicio = async (req, res) => {
  try {
    const nuevoServicio = new Servicio(req.body);
    await nuevoServicio.save();
    res.status(201).json({ mensaje: "Servicio creado", servicio: nuevoServicio });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el servicio" });
  }
};

// Actualizar un servicio por ID
export const actualizarServicio = async (req, res) => {
  try {
    const servicioActualizado = await Servicio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!servicioActualizado) return res.status(404).json({ error: "Servicio no encontrado" });
    res.json(servicioActualizado);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el servicio" });
  }
};

// Eliminar un servicio por ID
export const eliminarServicio = async (req, res) => {
  try {
    const servicioEliminado = await Servicio.findByIdAndDelete(req.params.id);
    if (!servicioEliminado) return res.status(404).json({ error: "Servicio no encontrado" });
    res.json({ mensaje: "Servicio eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el servicio" });
  }
};