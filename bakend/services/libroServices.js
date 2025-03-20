const {Libros} = require('../models');

class LibroServices {
    static async listarLibros() {
        try{
            return await Libros.findAll();
        }catch(error){
            console.log('error al traer el libro');
        }
    }
    static async ingresarLibro(titulo,autor,aniopubl,stick) {
        try{
            return await Libros.create({
                titulo,
                autor,
                aniopubl,
                stick
            });
    }catch(error){
        console.log('error al ingresar el libro');
        }
    }
    static async actualizarLibro(id,titulo,autor,aniopubl,stick) {
        try{
            return await Libros.update({
                titulo,
                autor,
                aniopubl,
                stick
            },{
                where:{
                    id
                }
            });
    }
    catch(error){
        console.log('error al actualizar el libro');
    }
    }
    static async eliminarLibro(id) {
        try{
            return await Libros.destroy({
                where:{
                    id
                }
            });
            }catch(error){
                console.log('error al eliminar el libro');
            }
    }

    static async buscarLibro(id) {
        try{
            return await Libros.findByPk(id)
        }catch(error){
            console.log('error al buscar el libro');
        }
    }
}

module.exports = LibroServices;
