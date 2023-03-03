'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('respuesta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
     
      descripcion: {
        type: Sequelize.STRING
      },
      hora_fecha: {
        type: Sequelize.STRING
      },
      hora_de_publicacion: {
        type: Sequelize.STRING
      },
      pregunta_id: {
        type: Sequelize.INTEGER
      },
      fecha_de_publicacion: {
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
    await queryInterface.dropTable('respuesta');
  }
};