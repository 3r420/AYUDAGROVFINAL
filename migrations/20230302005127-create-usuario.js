'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuario', {
      id_usuario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rol_id:{
        type:Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model:{tableName:'rol'},
          key:'id_rol'
          
        }
      },
      nombre: {
        type: Sequelize.STRING,
         allowNull: false,
   
      },
      apellido: {
        type: Sequelize.STRING,
         allowNull: false,
      
      },
      correo_electronico: {
        type: Sequelize.STRING,
        // unique:true,
         allowNull: false,
      },
      contrasena: {
        type: Sequelize.STRING,
         allowNull: false,
      },
     
      telefono: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // unique:true,
      },
      direccion: {
        type: Sequelize.STRING,
         allowNull: false,
      },
      estado: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuario');
  }
};