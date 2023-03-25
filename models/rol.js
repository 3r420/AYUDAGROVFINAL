'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Usuario,{foreignKey:'rol_id'})
    }
  }
  Rol.init({
    id_rol:{
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type:DataTypes.INTEGER
    },
    
    nombre: {type:DataTypes.STRING,
      allowNull:false},
  }, {
    sequelize,
    modelName: 'Rol',
    tableName:'rol'
  });
  return Rol;
};