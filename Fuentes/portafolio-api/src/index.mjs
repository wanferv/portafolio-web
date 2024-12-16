import express from "express";
import cors from "cors"; 
import connectDB from "./config/database.mjs";
import serviciosRoutes from "./routes/servicios.mjs";
import proyectosRoutes from "./routes/proyectos.mjs";
import contactosRoutes from "./routes/contactos.mjs";

const app = express();

// Conectar a la base de datos
connectDB();

app.use(cors());
// Middleware para procesar JSON
app.use(express.json());

// Rutas
app.use("/api/servicios", serviciosRoutes);
app.use("/api/proyectos", proyectosRoutes);
app.use("/api/contactos", contactosRoutes);

// Puerto
app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});