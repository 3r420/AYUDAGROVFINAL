'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sugerencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sugerencia.init({
    id_sugerencia:{
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type:Sequelize.INTEGER
    },
    subcategorias_id: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    usuario_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sugerencia',
    tableName:'sugerencia'
  });
  return Sugerencia;
};