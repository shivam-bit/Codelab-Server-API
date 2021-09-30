module.exports = {
    up: async (queryInterface, Sequelize) =>
        queryInterface.bulkInsert('Explanations', [
            {
                sample_input: ' some input 1',
                sample_output: ' some output 1 ',
                explanation_statment: ' some explanation 1 ',
                createdAt: new Date(),
                updatedAt: new Date(),
                QuestionId: 1,
            },
            {
                sample_input: ' some input 2',
                sample_output: ' some output 2 ',
                explanation_statment: ' some explanation 2 ',
                createdAt: new Date(),
                updatedAt: new Date(),
                QuestionId: 2,
            },
        ]),

    down: async (queryInterface, _Sequelize) => queryInterface.bulkDelete('Explanations', null, {}),
};
