import Contacto from "../models/contacto.mjs";

export const obtenerContactos = async (req, res) => {
  try {
    const contactos = await Contacto.find();
    res.json(contactos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los contactos" });
  }
};

export const obtenerContacto = async (req, res) => {
  try {
    const contacto = await Contacto.findById(req.params.id);
    if (!contacto) return res.status(404).json({ error: "Contacto no encontrado" });
    res.json(contacto);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el contacto" });
  }
};

export const crearContacto = async (req, res) => {
  try {
    const nuevoContacto = new Contacto(req.body);
    await nuevoContacto.save();
    res.status(201).json({ mensaje: "Contacto creado", contacto: nuevoContacto });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el contacto" });
  }
};

export const actualizarContacto = async (req, res) => {
  try {
    const contactoActualizado = await Contacto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!contactoActualizado) return res.status(404).json({ error: "Contacto no encontrado" });
    res.json(contactoActualizado);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el contacto" });
  }
};

export const eliminarContacto = async (req, res) => {
  try {
    const contactoEliminado = await Contacto.findByIdAndDelete(req.params.id);
    if (!contactoEliminado) return res.status(404).json({ error: "Contacto no encontrado" });
    res.json({ mensaje: "Contacto eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el contacto" });
  }
};