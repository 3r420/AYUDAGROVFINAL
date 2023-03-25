'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('respuesta', {
            id_respuesta: {
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

            descripcion: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            hora_fecha: {
                type: Sequelize.STRING,
                allowNull: false,
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