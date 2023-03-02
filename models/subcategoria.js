'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subcategoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  subcategoria.init({
    id_subcategoria: {
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type:sequelize.INTEGER
    },
    descripcion: DataTypes.STRING,
    categoria_id: DataTypes.INTEGER,
    titulo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'subcategoria',
  });
  return subcategoria;
};