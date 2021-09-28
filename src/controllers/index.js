const { createUser, loginUser, logoutUser } = require('./auth');

const controllers = {
    createUser,
    loginUser,
    logoutUser,
};

module.exports = controllers;
