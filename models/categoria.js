'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  categoria.init({
    id_categoria:{
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    
    },
    descripcion: DataTypes.STRING,
    titulo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categoria',
    tableName:'categoria',
  });
  return categoria;
};