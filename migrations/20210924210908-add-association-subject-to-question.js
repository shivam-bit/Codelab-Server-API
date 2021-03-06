module.exports = {
    up: async (queryInterface, Sequelize) =>
        queryInterface.addColumn(
            'Questions', // name of Source model
            'SubjectId', // name of the key we're adding
            {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Subjects', // name of Target model
                    key: 'id', // key in Target model that we're referencing
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
        ),

    down: async (queryInterface, _Sequelize) =>
        queryInterface.removeColumn(
            'Questions', // name of Source model
            'SubjectId', // key we want to remove
        ),
};
