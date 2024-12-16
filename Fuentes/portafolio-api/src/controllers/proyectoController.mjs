import Proyecto from "../models/proyecto.mjs";

export const obtenerProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.find();
    res.json(proyectos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los proyectos" });
  }
};

export const obtenerProyecto = async (req, res) => {
  try {
    const proyecto = await Proyecto.findById(req.params.id);
    if (!proyecto) return res.status(404).json({ error: "Proyecto no encontrado" });
    res.json(proyecto);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el proyecto" });
  }
};

export const crearProyecto = async (req, res) => {
  try {
    const nuevoProyecto = new Proyecto(req.body);
    await nuevoProyecto.save();
    res.status(201).json({ mensaje: "Proyecto creado", proyecto: nuevoProyecto });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el proyecto" });
  }
};

export const actualizarProyecto = async (req, res) => {
  try {
    const proyectoActualizado = await Proyecto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!proyectoActualizado) return res.status(404).json({ error: "Proyecto no encontrado" });
    res.json(proyectoActualizado);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el proyecto" });
  }
};

export const eliminarProyecto = async (req, res) => {
  try {
    const proyectoEliminado = await Proyecto.findByIdAndDelete(req.params.id);
    if (!proyectoEliminado) return res.status(404).json({ error: "Proyecto no encontrado" });
    res.json({ mensaje: "Proyecto eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el proyecto" });
  }
};