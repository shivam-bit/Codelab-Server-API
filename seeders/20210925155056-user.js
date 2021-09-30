const bcrypt = require('bcrypt');

const hashedPassword = (password) => bcrypt.hashSync(password, 10);
module.exports = {
    up: async (queryInterface, Sequelize) =>
        queryInterface.bulkInsert('Users', [
            {
                name: 'instructor1',
                email: 'instructor1@gmail.com',
                password: hashedPassword('pass'),
                profile_image: '',
                role: 'Instructor',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'user',
                email: 'user1@gmail.com',
                password: hashedPassword('pass'),
                profile_image: '',
                role: 'Student',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'user2',
                email: 'user2@gmail.com',
                password: hashedPassword('pass'),
                profile_image: '',
                role: 'Student',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]),

    down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
