'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pregunta_archivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pregunta_archivo.init({
    id_pregunta_archivo: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type:DataTypes.INTEGER},
    pregunta_id: DataTypes.INTEGER,
    archivo_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pregunta_archivo',
    tableName:'pregunta_archivos'
  });
  return Pregunta_archivo;
  
};