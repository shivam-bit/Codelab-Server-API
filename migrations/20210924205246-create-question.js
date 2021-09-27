'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question_text: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      example: {
        type: Sequelize.TEXT
      },
      function_description: {
        type: Sequelize.STRING
      },
      return: {
        type: Sequelize.STRING
      },
      input_format: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      output_format: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      constraint: {
        type: Sequelize.STRING,
        allowNull: false
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Questions');
  }
};