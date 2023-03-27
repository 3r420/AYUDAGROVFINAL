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
      this.hasMany(models.Respuesta_archivo,{foreignKey:'respuesta_id'}),
      this.belongsTo(models.Pregunta,{foreignKey:'pregunta_id'}),
      this.belongsTo(models.Usuario,{foreignKey:'usuario_id'})
    }
  }
  Respuesta.init({
    id_respuesta: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER 
    },
    pregunta_id: {type:DataTypes.INTEGER,
      allowNull:false,
      references:{model:'Pregunta',key:'id_pregunta'}},
    usuario_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{model:'Usuario',key:'id_usuario'}
      },
    descripcion: {type:DataTypes.STRING,
       allowNull:false},
    hora_fecha: DataTypes.STRING
  }, {
    sequelize,
    modelName:'Respuesta',
    tableName:'respuesta'
  });
  return Respuesta;
};