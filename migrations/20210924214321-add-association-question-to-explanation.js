'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Explanations',
      'QuestionId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Questions', 
          key: 'id', 
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Explanations',
      'QuestionId'
      );
  }
};
