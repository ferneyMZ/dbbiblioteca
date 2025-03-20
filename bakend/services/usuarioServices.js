const {Usuarios} = require('../models');

class UsuarioServices {
    static async listarUsuario() {
        try {
            return await Usuarios.findAll();
        } catch (error) {
            console.error('Error al traer el usuario:', error);
            throw error;
        }
    }

    static async ingresarUsuario(nombre, correo, telefono) {
        try {
            return await Usuarios.create({
                nombre,
                correo,
                telefono
            });
        } catch (error) {
            console.error('Error al ingresar el usuario:', error);
            throw error;
        }
    }

    static async actualizarUsuario(id, nombre, correo, telefono) {
        try {
            return await Usuarios.update({
                nombre,
                correo,
                telefono
            }, {
                where: {
                    id
                }
            });
        } catch (error) {
            console.error('Error al actualizar el usuario:', error);
            throw error;
        }
    }

    static async eliminarUsuario(id) {
        try {
            return await Usuarios.destroy({
                where: {
                    id
                }
            });
        } catch (error) {
            console.error('Error al eliminar el usuario:', error);
            throw error;
        }
    }

    static async buscarUsuario(id) {
        try {
            return await Usuarios.findByPk(id);
        } catch (error) {
            console.error('Error al buscar el usuario:', error);
            throw error;
        }
    }
}

module.exports = UsuarioServices;