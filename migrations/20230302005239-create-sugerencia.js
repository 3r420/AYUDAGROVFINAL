'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sugerencia', {
      id_sugerencia: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    
      subcategoria_id: {
        type: Sequelize.INTEGER,
        // references:{
        //   model:{tableName:'subcategoria'},
        //   key:'id_subcategoria'
        // }
      },
      descripcion: {
        type: Sequelize.STRING
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        references:{model:{tableName:'usuario'},key:'id_usuario'},
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
    await queryInterface.dropTable('sugerencia');
  }
};