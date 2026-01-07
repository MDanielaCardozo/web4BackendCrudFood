import { Router } from "express";
import { crearProducto, listarProductos, obtenerProducto, prueba } from "../controllers/productos.controllers.js";

const router = Router();

router.route('/test').get(prueba);

router.route('/').post(crearProducto).get(listarProductos);

router.route('/:id').get(obtenerProducto)

export default router;