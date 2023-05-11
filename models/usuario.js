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
      this.belongsTo(models.Rol,{foreignKey:'rol_id'}),
      this.hasMany(models.Valorar_Respuesta,{foreignKey:'usuario_id',onDelete:'cascade'}),
      this.hasMany(models.Sugerencia,{foreignKey:'usuario_id'}),
      this.hasMany(models.Pregunta,{foreignKey:'usuario_id',onDelete:"cascade"})
    }
  }
  Usuario.init({
    id_usuario: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    rol_id:{type:DataTypes.INTEGER,
      allowNull:false,
      references:{model:'Rol',key:'id_rol'}
  },
    nombre:{ type:DataTypes.STRING,
       allowNull:false,
       validate:{}
    //   validate:{
    //   notNull:{
    //     msg:'Porfavor ingrese su nombre '
    //   },
    //   isAlpha:{
    //     msg:'el nombre solo puede contener letras'
    //   },
    //   len:{
    //     args:[3, 50],
    //     msg:'El nombre deve contener como minimo tres (3) caracteres'
    //   },
    //   },
  },
    apellido:{type: DataTypes.STRING,
       allowNull:false,
      // validate:{
      //   notNull:{
      //     len:[3,50],
      //     msg:'Porfavor ingrese su apellido con minimo 3 caracters'
      //   }
      //   },
    },
    correo_electronico: {type:DataTypes.STRING,
       allowNull:false,
      // unique:true,
      // validate:{
      //   notNull:{
      //     msg:'Porfavor ingrese su correo'
      //   },
      //   isEmail: true,
      //   },
    },
    
    contrasena: {type:DataTypes.STRING,
       allowNull:false,
      // validate: {
      //   is: /^[0-9a-f]{64}$/i
      // }
    },
    
    telefono: {type:DataTypes.INTEGER,
     allowNull:false},
    direccion: {type:DataTypes.STRING,
      allowNull:false},
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuario',
  });
  return Usuario;
};