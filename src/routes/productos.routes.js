import { Router } from "express";
import { crearProducto, prueba } from "../controllers/productos.controllers.js";

const router = Router();

router.route('/test').get(prueba);

router.route('/').post(crearProducto);

export default router;