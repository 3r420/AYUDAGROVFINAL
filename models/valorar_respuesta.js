'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Valorar_Respuesta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Usuario,{foreignKey:'usuario_id'}),
      this.belongsTo(models.Respuesta,{foreignKey:'respuesta_id'})
    }
  }
  Valorar_Respuesta.init({
    id_valorar:{
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type:DataTypes.INTEGER
    },
    usuario_id: {type:DataTypes.INTEGER,
      references:{model:'Usuario',key:'id_usuario'}},
    respuesta_id: {type:DataTypes.INTEGER,
       references:{model:'Respuesta',key:'id_respuesta'}},
    calificacion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Valorar_Respuesta',
    tableName:'valorar_respuesta'
  });
  return Valorar_Respuesta;
};