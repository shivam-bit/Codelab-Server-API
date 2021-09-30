module.exports = {
    up: async (queryInterface, Sequelize) =>
        queryInterface.addColumn(
            'Subjects', // name of Source model
            'UserId', // name of the key we're adding
            {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Users', // name of Target model
                    key: 'id', // key in Target model that we're referencing
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
        ),

    down: async (queryInterface, _Sequelize) =>
        queryInterface.removeColumn(
            'Subjects', // name of Source model
            'UserId', // key we want to remove
        ),
};
