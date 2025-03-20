const express = require ('express');
const router = express.Router();
const PrestamoController = require('../controller/prestamoController');

router.get('/prestamos', PrestamoController.listarPrestamo);
router.post('/prestamos', PrestamoController.ingresarPrestamo);
router.put('/prestamos/:id', PrestamoController.actualizarPrestamo);
router.delete('/prestamos/:id', PrestamoController.eliminarPrestamo);
router.get('/prestamos/:id', PrestamoController.buscarPrestamoPorId);

module.exports = router;