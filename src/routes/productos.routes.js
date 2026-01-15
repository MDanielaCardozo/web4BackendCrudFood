import { Router } from "express";
import { borrarProductoPorID, crearProducto, editarProductoPorID, listarProductos, obtenerProducto, prueba } from "../controllers/productos.controllers.js";
import validacionProducto from "../middlewares/validacionProducto.js"
import validacionIdProducto from "../middlewares/validacionIdProducto.js";

const router = Router();

router.route('/test').get(prueba);

router.route('/').post(validacionProducto, crearProducto).get(listarProductos);

router.route('/:id').get(validacionIdProducto, obtenerProducto).delete(validacionIdProducto, borrarProductoPorID).put([validacionIdProducto, validacionProducto], editarProductoPorID)

export default router;