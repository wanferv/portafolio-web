import mongoose from "mongoose";

const servicioSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
});

export default mongoose.model("Servicio", servicioSchema);
