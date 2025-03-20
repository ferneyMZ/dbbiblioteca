'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prestamo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Prestamo.belongsTo(models.Usuarios, {
        foreignKey: 'usuarioId', as: 'usuario'
      });
      Prestamo.belongsTo(models.Libros, {
        foreignKey: 'libroId', as: 'libro'
      });
      // define association here
    }
  }
  Prestamo.init({
    usuarioId: DataTypes.INTEGER,
    libroId: DataTypes.INTEGER,
    fechaPrestamo: DataTypes.STRING,
    fechaDevolucion: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Prestamo',
  });
  return Prestamo;
};