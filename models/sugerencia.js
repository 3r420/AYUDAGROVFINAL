'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sugerencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Subcategoria,{foreignKey:'subcategorias_id'})
    }
  }
  Sugerencia.init({
    id_sugerencia:{
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type:DataTypes.INTEGER
    },
    subcategorias_id: {type:DataTypes.INTEGER,
      references:{models:'Subcategoria',key:'id_subcategoria'}},
    descripcion: DataTypes.STRING,
    usuario_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sugerencia',
    tableName:'sugerencia'
  });
  return Sugerencia;
};