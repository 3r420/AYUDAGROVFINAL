'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('respuesta_archivos', {
      id_respuesta_archivo: {
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
      archivo_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{tableName:'archivo'},
          key:'id_archivo'
        }
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
    await queryInterface.dropTable('respuesta_archivos');
  }
};