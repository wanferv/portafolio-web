import mongoose from "mongoose";

const proyectoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  url: { type: String, required: true },
});

export default mongoose.model("Proyecto", proyectoSchema);