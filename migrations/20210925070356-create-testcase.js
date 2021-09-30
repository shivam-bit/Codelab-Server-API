module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Testcases', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            test_input: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            test_output: {
                type: Sequelize.TEXT,
                allowNull: false,
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
        await queryInterface.dropTable('Testcases');
    },
};
