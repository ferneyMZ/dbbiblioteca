const {Prestamo}=require('../models');

class PrestamoServices{
    static async listarPrestamo(){
        try{
            return await Prestamo.findAll();
        }catch(error){
            console.log('error al traer el prestamo');
        }
    }
    static async ingresarPrestamo(usuarioId,libroId,fechaPrestamo,fechaDevolucion,estado){
        try{
            return await Prestamo.create({
                usuarioId,
                libroId,
                fechaPrestamo,
                fechaDevolucion,
                estado
            });
        }catch(error){
            console.log('error al ingresar el prestamo');
        }
    }
    static async actualizarPrestamo(id,usuarioId,libroId,fechaPrestamo,fechaDevolucion,estado){
        try{
            return await Prestamo.update({
                usuarioId,
                libroId,
                fechaPrestamo,
                fechaDevolucion,
                estado
            },{
                where:{
                    id
                }
            });
        }catch(error){
            console.log('error al actualizar el prestamo');
        }
    }
    static async eliminarPrestamo(id){
        try{
            return await Prestamo.destroy({
                where:{
                    id
                }
            });
        }catch(error){
            console.log('error al eliminar el prestamo');
        }
    }
    static async buscarPrestamo(id){
        try{
            return await Prestamo.findByPk(id);
        }catch(error){
            console.log('error al buscar el prestamo');
        }
    }
}
module.exports=PrestamoServices;
