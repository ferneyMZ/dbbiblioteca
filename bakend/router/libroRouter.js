const express = require ('express');
const router = express.Router();
const libroController = require('../controller/libroController');

router.get('/libros', libroController.listarLibros);
router.post('/libros', libroController.ingresarLibro);  
router.put('/libros/:id', libroController.actualizarLibro);
router.delete('/libros/:id', libroController.eliminarLibro);
router.get('/libros/:id', libroController.buscarLibroPorId);

module.exports = router;