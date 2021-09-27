'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Testcases',[{
    test_input: "1",
    test_output: "true",
    createdAt: new Date(),
    updatedAt: new Date(),
    QuestionId:1
    },{
    test_input: "0",
    test_output: "false",
    createdAt: new Date(),
    updatedAt: new Date(),
    QuestionId:1
    },{
    test_input: "1",
    test_output: "odd",
    createdAt: new Date(),
    updatedAt: new Date(),
    QuestionId:2
    },{
    test_input: "2",
    test_output: "even",
    createdAt: new Date(),
    updatedAt: new Date(),
    QuestionId:2
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Testcases',null,{});
  }
};
