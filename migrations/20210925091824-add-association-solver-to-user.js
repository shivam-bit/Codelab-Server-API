module.exports = {
    up: async (queryInterface, Sequelize) => {
        queryInterface.addColumn('Solvers', 'UserId', {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        });
    },

    down: async (queryInterface, _Sequelize) => {
        queryInterface.removeColumn('Solvers', 'UserId');
    },
};
