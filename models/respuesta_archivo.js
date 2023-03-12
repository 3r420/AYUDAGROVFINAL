'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class respuesta_archivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  respuesta_archivo.init({
    id_respuesta_archivo:  {allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type:DataTypes.INTEGER},
    respuesta_id: DataTypes.INTEGER,
    archivo_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'respuesta_archivo',
  });
  return respuesta_archivo;
};