'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'Solvers',
      'QuestionId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Questions', 
          key: 'id', 
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'Solvers',
      'QuestionId'
    )
  }
};
