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
      // this.belongsTo(models.Subcategoria,{foreignKey:'subcategoria_id'}),
      this.hasMany(models.Sugerencia_archivo,{foreignKey:'sugerencia_id'}),
      this.belongsTo(models.Usuario,{foreignKey:'usuario_id'})
    }
  }
  Sugerencia.init({
    id_sugerencia:{
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type:DataTypes.INTEGER
    },
    subcategoria_id: {type:DataTypes.INTEGER,
    //references:{model:'Subcategoria',key:'id_subcategoria'}
  },
    descripcion: DataTypes.STRING,
    usuario_id: {type:DataTypes.INTEGER,
      references:{model:'Usuario',key:'id_usuario'}},
  }, {
    sequelize,
    modelName: 'Sugerencia',
    tableName:'sugerencia'
  });
  return Sugerencia;
};