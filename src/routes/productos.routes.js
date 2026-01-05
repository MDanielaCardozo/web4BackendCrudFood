import { Router } from "express";
import { prueba } from "../controllers/productos.controllers.js";

const router = Router();

router.route('/').get(prueba)

export default router;