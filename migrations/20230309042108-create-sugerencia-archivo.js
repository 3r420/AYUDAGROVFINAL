'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sugerencia_archivos', {
      id_sugerencia_archivo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      archivo_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{tableName:'archivo'},
          key:'id_archivo'
        }
      },
      sugerencia_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{tableName:'sugerencia'},
          key:'id_sugerencia'
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
    await queryInterface.dropTable('sugerencia_archivos');
  }
};