module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Solvers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            plag_score: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: async (queryInterface, _Sequelize) => {
        await queryInterface.dropTable('Solvers');
    },
};
