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
      this.belongsTo(models.Archivo,{foreignKey:'archivo_id'}),
      this.belongsTo(models.Pregunta,{foreignKey:'pregunta_id'})
    }
  }
  Pregunta_archivo.init({
    id_pregunta_archivo: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type:DataTypes.INTEGER},
    pregunta_id: {type:DataTypes.INTEGER,
      allowNull:false,
      references:{model:'Pregunta',key:'id_pregunta'}},

    archivo_id: {
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{model:"Archivo",key:"id_archivo"},
  },
 }, {
    sequelize,
    modelName: 'Pregunta_archivo',
    tableName:'pregunta_archivos'
  });
  return Pregunta_archivo;
  
};