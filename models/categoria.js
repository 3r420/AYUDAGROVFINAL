'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    /**
     * Helper method for defining associations.z
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Categoria.init({
      id_categoria:{
      primaryKey: true,
      autoIncrement: true,
      type:DataTypes.INTEGER,
    },
    descripcion: DataTypes.STRING,
    titulo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categoria',
    tableName:'categoria',
  });
  return Categoria;
};