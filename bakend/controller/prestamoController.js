const PrestamoServices=require('../services/prestamoServices');

class PrestamoController{
    static async listarPrestamo(req,res){
        try{
            let lista=await PrestamoServices.listarPrestamo();
            res.json(lista);
        }catch(error){
            console.log('error al traer el prestamo');
        }
    }
    static async ingresarPrestamo(req,res){
        try{
            let {usuarioId,libroId,fechaPrestamo,fechaDevolucion,estado}=req.body;
            let nuevo=await PrestamoServices.ingresarPrestamo(usuarioId,libroId,fechaPrestamo,fechaDevolucion,estado);
            res.json(nuevo);
        }catch(error){
            console.log('error al ingresar el prestamo');
        }
    }
    static async actualizarPrestamo(req,res){
        try{
            let {id}=req.params;
            let {usuarioId,libroId,fechaPrestamo,fechaDevolucion,estado}=req.body;
            let actualizar=await PrestamoServices.actualizarPrestamo(id,usuarioId,libroId,fechaPrestamo,fechaDevolucion,estado);
            res.json(actualizar);
        }catch(error){
            console.log('error al actualizar el prestamo');
        }
    }
    static async eliminarPrestamo(req,res){
        try{
            let {id}=req.params;
            let eliminar=await PrestamoServices.eliminarPrestamo(id);
            res.json(eliminar);
        }catch(error){
            console.log('error al eliminar el prestamo');
        }
    }
    static async buscarPrestamoPorId(req,res){
        try{
            let {id}=req.params;
            let buscar=await PrestamoServices.buscarPrestamo(id);
            res.json(buscar);
        }catch(error){
            console.log('error al buscar el prestamo');
        }
    }
}
module.exports=PrestamoController;