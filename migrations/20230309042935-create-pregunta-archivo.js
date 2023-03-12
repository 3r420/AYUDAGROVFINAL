'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pregunta_archivos', {
      id_pregunta_archivo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
     
      pregunta_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{tableName:'pregunta'},
          key:'id_pregunta'
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
    await queryInterface.dropTable('pregunta_archivos');
  }
};