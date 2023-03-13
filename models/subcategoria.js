'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subcategoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Categoria,{foreignKey:'categoria_id'})
    }
  }
  Subcategoria.init({
    id_subcategoria: {
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type:DataTypes.INTEGER
    },
    descripcion: DataTypes.STRING,
    categoria_id: {type:DataTypes.INTEGER,
      references:{model:'Categoria',key:'id_categoria'}},
    titulo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Subcategoria',
    tableName:'subcategoria'
  });
  return Subcategoria;
};