import { Router } from "express";
import productosRoutes from "./productos.routes.js";
import usuariosRoutes from "./usuarios.routes.js";

const router = Router();

router.use('/productos', productosRoutes);
router.use('/usuarios', usuariosRoutes);

export default router;