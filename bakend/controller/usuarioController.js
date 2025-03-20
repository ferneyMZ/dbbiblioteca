const UsuarioServices = require('../services/usuarioServices');

class usuarioController {
    static async listarUsuario(req, res) {
        try {
            let lista = await UsuarioServices.listarUsuario();
            res.json(lista);
        } catch (error) {
            console.error('error al traer la usuario');
        }
    }
    static async ingresarUsuario(req, res) {
        try {
            let {nombre,correo,telefono} = req.body;
            let nuevo= await UsuarioServices.ingresarUsuario(nombre,correo,telefono);
            res.json(nuevo);
        } catch (error) {
            console.error('error al ingresar al usuario ');
        }
    }
    static async actualizarUsuario(req, res) {
        try {
            let {id} = req.params;
            let {nombre,correo,telefono} = req.body;
            let actualizar = await UsuarioServices.actualizarUsuario(id,nombre,correo,telefono);
            res.json(actualizar);
        } catch (error) {
            console.error('error al actualizar el usuario');
        }
    }
    static async eliminarUsuario(req, res) {
        try {
            let {id} = req.params;
            let eliminar = await UsuarioServices.eliminarUsuario(id);
            res.json(eliminar);
        } catch (error) {
            console.error('error al eliminar la reserva');
        }
    }
    static async buscarUsuarioPorId(req, res) {
        try {
            let {id} = req.params;
            let buscar = await UsuarioServices.buscarUsuario(id);
            res.json(buscar);
        } catch (error) {
            console.error('error al buscar la reserva');
        }
    }
}

module.exports = usuarioController;

