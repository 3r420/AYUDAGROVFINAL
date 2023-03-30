'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    /**
     * nnn
     * Helper method for defining associations.z
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Subcategoria,{foreignKey:'categoria_id'})
    }
  }
  
  Categoria.init({
      id_categoria:{
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type:DataTypes.INTEGER
    },
    descripcion: {type:DataTypes.STRING,
      // allowNull:false,
      // validate:{
      //   notNull:{
      //     msg:'porfavor ingrese una descripcion'
      //   },
      //   // len:{
      //   //   args:[10 , 500],
      //   //   msg:"la descripcion deve tener entre 10 a 500 caracteres"
      //   // }
      // },
    },
    titulo: {type:DataTypes.STRING,
      //  allowNull:false,
      // validate:{
      //   isAlpha:{
      //     msg:'El nombre deve contener caracteres alfabeticos'
      //   },
      //   len:{
      //     args:[4, 30],
      //     msg:'El nombre de la categoria deve contener entre 4 y 30 caracteres'
      //   }
      // },
    }
  }, {
    sequelize,
    modelName: 'Categoria',
    tableName:'categoria',
  });
  return Categoria;
};