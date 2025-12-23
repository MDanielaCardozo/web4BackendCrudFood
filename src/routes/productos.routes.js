import { Router } from "express";

const router = Router();

router.route('/').get((req, res) => {
    console.log('desde el controlador de prueba');
    res.send('Prueba desde el controlador')
})

export default router;