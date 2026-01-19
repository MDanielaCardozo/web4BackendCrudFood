import { Router } from "express";
import { borrarProductoPorID, crearProducto, editarProductoPorID, listarProductos, obtenerProducto, prueba } from "../controllers/productos.controllers.js";
import validacionProducto from "../middlewares/validacionProducto.js"
import validacionIdProducto from "../middlewares/validacionIdProducto.js";
import verificarJWT from "../middlewares/verificarToken.js"

const router = Router();

router.route('/test').get(prueba);

router.route('/').post([verificarJWT, validacionProducto], crearProducto).get(listarProductos);

router.route('/:id').get(validacionIdProducto, obtenerProducto).delete([verificarJWT, validacionIdProducto], borrarProductoPorID).put([verificarJWT, validacionIdProducto, validacionProducto], editarProductoPorID)

export default router;