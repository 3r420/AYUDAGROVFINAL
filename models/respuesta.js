'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Respuesta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Respuesta_archivo,{foreignKey:'respuesta_id'})
    }
  }
  Respuesta.init({
    id_respuesta: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER 
    },
    pregunta_id: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    hora_fecha: DataTypes.STRING
  }, {
    sequelize,
    modelName:'Respuesta',
    tableName:'respuesta'
  });
  return Respuesta;
};