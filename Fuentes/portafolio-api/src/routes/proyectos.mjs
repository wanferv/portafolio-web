import express from "express";
import {
  obtenerProyectos,
  obtenerProyecto,
  crearProyecto,
  actualizarProyecto,
  eliminarProyecto,
} from "../controllers/proyectoController.mjs";

const router = express.Router();

router.get("/", obtenerProyectos);
router.get("/:id", obtenerProyecto);
router.post("/", crearProyecto);
router.put("/:id", actualizarProyecto);
router.delete("/:id", eliminarProyecto);

export default router;