const LibroServices = require("../services/libroServices");

class LibroController {
    static async listarLibros(req, res) {
        try {
            let lista = await LibroServices.listarLibros();
            res.json(lista);
        }catch(error){
            console.log('error al traer el libro');
        }
    }
    static async ingresarLibro(req, res) {
        try {
            let {titulo, autor, aniopubl, stick} = req.body;
            let nuevo= await LibroServices.ingresarLibro(titulo,autor,aniopubl,stick);
            res.json(nuevo);
        } catch (error) {
            console.error('error al ingresar el libro');
        }
    }
    static async actualizarLibro(req, res) {
        try { 
            let {id} = req.params;
            let {titulo,autor,aniopubl,stick} = req.body;
            let actualizar = await LibroServices.actualizarLibro(id,titulo,autor,aniopubl,stick);
            res.json(actualizar);
        }catch(error){
            console.log('error al actualizar el libro');
        }
    }
    static async eliminarLibro(req, res) {
        try {
            let {id} = req.params;
            let eliminar = await LibroServices.eliminarLibro(id);
            res.json(eliminar);
        }catch(error){
            console.log('error al eliminar el libro');
        }
    }
    static async buscarLibroPorId(req, res) {
        try {
            let {id} = req.params;
            let buscar = await LibroServices.buscarLibro(id);
            res.json(buscar);
        }
        catch(error){
            console.log('error al buscar el libro');
        }   
    }
}
module.exports = LibroController;