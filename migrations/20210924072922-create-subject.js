module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Subjects', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            subject_name: {
                allowNull: false,
                type: Sequelize.STRING,
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
        await queryInterface.dropTable('Subjects');
    },
};
