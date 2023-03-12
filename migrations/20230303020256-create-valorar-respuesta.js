'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('valorar_respuesta', {

      id_valorar: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      respuesta_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{tableName:'respuesta'},
          key:'id_respuesta'
        }
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{tableName:'usuario'},
          key:'id_usuario'
        }
      },
      calificacion: {
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
    await queryInterface.dropTable('valorar_respuesta');
  }
};