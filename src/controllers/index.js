const { createUser, loginUser, logoutUser } = require('./auth');
const { createSubject, viewAllSubjects, deleteSubject, updateSubject } = require('./subject');
const { createQuestion } = require('./question');

const controllers = {
    createUser,
    loginUser,
    logoutUser,
    createSubject,
    viewAllSubjects,
    deleteSubject,
    updateSubject,
    createQuestion,
};

module.exports = controllers;
