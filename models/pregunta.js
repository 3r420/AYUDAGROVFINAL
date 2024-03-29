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
      this.hasMany(models.Pregunta_archivo,{foreignKey:'pregunta_id'}),
      this.belongsTo(models.Subcategoria,{foreignKey:'subcategoria_id'}),
      this.belongsTo(models.Usuario,{foreignKey:'usuario_id'})
      this.hasMany(models.Respuesta,{foreignKey:'pregunta_id'})
    }
  }
  Pregunta.init({
    id_pregunta: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    subcategoria_id:{
      type:DataTypes.INTEGER,
      // allowNull:false,
      references:{model:'Subcategoria',key:'id_subcategoria'}
    },
    usuario_id:{
      type:DataTypes.INTEGER,
      // allowNull:false,
      references:{model:'Usuario',key:'id_usuario'}
    },
    descripcion: {type:DataTypes.STRING
      // allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Pregunta',
    tableName: 'pregunta'
  });
  return Pregunta;
};