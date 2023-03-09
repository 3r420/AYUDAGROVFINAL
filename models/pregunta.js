'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pregunta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pregunta.init({
    id_pregunta: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    descripcion: DataTypes.STRING,
    hora_fecha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pregunta',
    tableName: 'pregunta'
  });
  return Pregunta;
};