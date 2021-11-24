const { createUser, loginUser, logoutUser } = require('./auth');
const { createSubject, viewAllSubjects, deleteSubject, updateSubject } = require('./subject');
const { createQuestion, viewAllQuestionsOfSubject, updateQuestion, deleteQuestion } = require('./question');
const {
    createExplanation,
    updateExplanation,
    deleteExplanation,
    viewAllExplanationsOfQuestion,
} = require('./explanation');
const { createTestcase, updateTestcase, deleteTestcase, viewAllTestcases } = require('./testcase');
const { createSubmission } = require('./submission');
const { judge } = require('./judge');

const controllers = {
    createUser,
    loginUser,
    logoutUser,
    createSubject,
    viewAllSubjects,
    deleteSubject,
    updateSubject,
    createQuestion,
    viewAllQuestionsOfSubject,
    updateQuestion,
    deleteQuestion,
    createExplanation,
    updateExplanation,
    deleteExplanation,
    viewAllExplanationsOfQuestion,
    createTestcase,
    updateTestcase,
    deleteTestcase,
    viewAllTestcases,
    createSubmission,
    judge,
};

module.exports = controllers;
