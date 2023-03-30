'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Archivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //define association here
      this.hasMany(models.Pregunta_archivo,{foreignKey:'archivo_id'});
      this.hasMany(models.Sugerencia_archivo,{foreignKey:'archivo_id'});
      this.hasMany(models.Respuesta_archivo,{foreignKey:'archivo_id'})
    }
  }
  Archivo.init({
    id_archivo: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
     
    },
    nombre_archivo: {type:DataTypes.STRING,
      //allowNull: false,
      
     
    },
         
    url: {type:DataTypes.STRING,
      // validate:{
      //   isUrl:{
      //     msg:'tiene que ser una url valida'
      //   }
      // }
    },
  }, {
    sequelize,
    modelName: 'Archivo',
    tableName:'archivo'
  });
  return Archivo;
};