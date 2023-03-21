'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sugerencia_archivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Archivo,{foreignKey:'archivo_id'}),
      this.belongsTo(models.Sugerencia,{foreignKey:'sugerencia_id'})
    }
  }
  Sugerencia_archivo.init({
    id_sugerencia_archivo: {
       allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type:DataTypes.INTEGER},
    archivo_id: {
      type:DataTypes.INTEGER,
      references:{model:'Archivo', key:'id_archivo'}},
    sugerencia_id: {
      type:DataTypes.INTEGER,
     references:{model:'Sugerencia', key:'id_sugerencia'}},
  }, {
    sequelize,
    modelName: 'Sugerencia_archivo',
    tableName:'sugerencia_archivos'
  });
  return Sugerencia_archivo;

};