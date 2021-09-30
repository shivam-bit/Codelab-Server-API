module.exports = {
    up: async (queryInterface, Sequelize) => {
        queryInterface.addColumn('Testcases', 'QuestionId', {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Questions',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
        });
    },

    down: async (queryInterface, _Sequelize) => queryInterface.removeColumn('Testcases', 'QuestionId'),
};
