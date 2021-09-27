/* eslint-disable no-unused-vars */
module.exports = {
    up: async (queryInterface, Sequelize) =>
        queryInterface.bulkInsert('Questions', [
            {
                question_text: 'A C++ question text with question id 1',
                example: 'A C++ question example with question id 1',
                function_description: 'A C++ question function description with question id 1',
                return: 'A C++ question function return statement with question id 1',
                input_format: 'A C++ question input format with question id 1',
                output_format: 'A C++ question output format with question id 1',
                constraint: '0< n,ar[i]<=1000',
                createdAt: new Date(),
                updatedAt: new Date(),
                SubjectId: 1,
            },
            {
                question_text: 'A Python question text with question id 2',
                example: 'A  Python question example with question id 2',
                function_description: 'A  Python question function description with question id 2',
                return: 'A  Python question function return statement with question id 2',
                input_format: 'A  Python question input format with question id 2',
                output_format: 'A  Python question output format with question id 2',
                constraint: '0< n,ar[i]<=1000',
                createdAt: new Date(),
                updatedAt: new Date(),
                SubjectId: 2,
            },
        ]),

    down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Question', null, {}),
};
