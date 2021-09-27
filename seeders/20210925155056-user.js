'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',[{
      name: "instructor1",
      email: "instructor1@gmail.com",
      password: "pass",
      profile_image: "",
      role:'Instructor',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "user",
      email: "user1@gmail.com",
      password: "pass",
      profile_image: "",
      role:'Student',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "user2",
      email: "user2@gmail.com",
      password: "pass",
      profile_image: "",
      role:'Student',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
