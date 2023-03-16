'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Pregunta,{foreignKey:'usuario_id'}),
      this.belongsTo(models.Rol,{foreignKey:'rol_id'})
    }
  }
  Usuario.init({
    id_usuario: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    rol_id:{type:DataTypes.INTEGER,
      references:{model:'Rol',key:'id_rol'}},
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    correo_electronico: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    repetir_contrasena: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuario',
  });
  return Usuario;
};