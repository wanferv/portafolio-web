import express from "express";
import {
  obtenerContactos,
  obtenerContacto,
  crearContacto,
  actualizarContacto,
  eliminarContacto,
} from "../controllers/contactoController.mjs";

const router = express.Router();

router.get("/", obtenerContactos);
router.get("/:id", obtenerContacto);
router.post("/", crearContacto);
router.put("/:id", actualizarContacto);
router.delete("/:id", eliminarContacto);

export default router;
