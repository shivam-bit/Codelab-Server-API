'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Subjects',[{
      subject_name:"C++",
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId:1
    },{
      subject_name:"Python",
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId:1
    }])
  },

  down: async (queryInterface, Sequelize) => {
   queryInterface.bulkDelete('Subjects', null, {});
  }
};
