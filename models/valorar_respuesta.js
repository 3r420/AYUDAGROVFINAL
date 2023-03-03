'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class valorar_respuesta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  valorar_respuesta.init({
    id_valorar:{
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type:DataTypes.INTEGER
    },
    usuario_id: DataTypes.INTEGER,
    respuesta_id: DataTypes.INTEGER,
    calificacion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'valorar_respuesta',
  });
  return valorar_respuesta;
};