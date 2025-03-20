const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController');

router.get('/usuarios', usuarioController.listarUsuario);
router.post('/usuarios', usuarioController.ingresarUsuario);        
router.put('/usuarios/:id', usuarioController.actualizarUsuario);
router.delete('/usuarios/:id', usuarioController.eliminarUsuario);
router.get('/usuarios/:id', usuarioController.buscarUsuarioPorId);

module.exports = router;