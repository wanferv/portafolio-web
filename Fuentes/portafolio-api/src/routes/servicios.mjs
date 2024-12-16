import express from "express";
import {
  obtenerServicios,
  obtenerServicio,
  crearServicio,
  actualizarServicio,
  eliminarServicio,
} from "../controllers/servicioController.mjs";

const router = express.Router();

router.get("/", obtenerServicios);
router.get("/:id", obtenerServicio);
router.post("/", crearServicio);
router.put("/:id", actualizarServicio);
router.delete("/:id", eliminarServicio);

export default router;
