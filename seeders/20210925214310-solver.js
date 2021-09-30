module.exports = {
    up: async (queryInterface, Sequelize) =>
        queryInterface.bulkInsert('Solvers', [
            {
                plag_score: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
                QuestionId: 1,
                UserId: 1,
            },
            {
                plag_score: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
                QuestionId: 1,
                UserId: 2,
            },
            {
                plag_score: 0,
                createdAt: new Date(),
                updatedAt: new Date(),
                QuestionId: 2,
                UserId: 1,
            },
            {
                // plag_score: 0, this will check default value for plag_score
                createdAt: new Date(),
                updatedAt: new Date(),
                QuestionId: 2,
                UserId: 2,
            },
        ]),

    down: async (queryInterface, _Sequelize) => queryInterface.bulkDelete('Solvers', null, {}),
};
