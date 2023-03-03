'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class respuesta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  respuesta.init({
    id_respuesta: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    hora_fecha: DataTypes.STRING,
    hora_de_publicacion: DataTypes.STRING,
    pregunta_id: DataTypes.INTEGER,
    fecha_de_publicacion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'respuesta',
  });
  return respuesta;
};