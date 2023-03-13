'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Respuesta_archivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Respuesta_archivo.init({
    id_respuesta_archivo:  {allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type:DataTypes.INTEGER},
    respuesta_id: DataTypes.INTEGER,
    archivo_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Respuesta_archivo',
    tableName:'respuesta_archivos'
  });
  return Respuesta_archivo;
};