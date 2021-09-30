const { createUser, loginUser, logoutUser } = require('./auth');
const { createSubject, viewAllSubjects, deleteSubject, updateSubject } = require('./subject');

const controllers = {
    createUser,
    loginUser,
    logoutUser,
    createSubject,
    viewAllSubjects,
    deleteSubject,
    updateSubject,
};

module.exports = controllers;
