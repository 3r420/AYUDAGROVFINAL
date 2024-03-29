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
      this.belongsTo(models.Categoria,{foreignKey:'categoria_id'}),
      this.hasMany(models.Pregunta,{foreignKey:'subcategoria_id'})
      this.hasMany(models.Sugerencia,{foreignKey:'subcategoria_id'})
    
    }
  }
  Subcategoria.init({
    id_subcategoria: {
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type:DataTypes.INTEGER
    },
    categoria_id: {type:DataTypes.INTEGER,
      //allowNull:false,
      references:{model:'Categoria',key:'id_categoria'}},
      
    descripcion: {type:DataTypes.STRING,
   // allowNull:false
  },
   
    titulo: {type:DataTypes.STRING,
    //allowNull:false
  }
  }, {
    sequelize,
    modelName: 'Subcategoria',
    tableName:'subcategoria'
  });
  return Subcategoria;
};