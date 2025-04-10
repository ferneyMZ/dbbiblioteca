'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Libros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Libros.hasMany(models.Prestamo, {
        foreignKey: 'libroId', as: 'prestamos'
      });
    }
  }
  Libros.init({
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING,
    aniopubl: DataTypes.INTEGER,
    stick: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Libros',
  });
  return Libros;
};