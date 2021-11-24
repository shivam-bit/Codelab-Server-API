const { Solver, Question } = require('../../models');
const ErrorHandlerClass = require('../utils/errorHandlerClass');

const createSubmission = async (req, res, next) => {
    try {
        if (!req.params.questionId) {
            return next(new ErrorHandlerClass('QuestionId is required', 422));
        }
        const questionExist = await Question.findOne({
            where: {
                id: req.params.questionId,
            },
        });
        if (!questionExist) {
            return next(new ErrorHandlerClass('Invalid Question ID', 422));
        }
        req.body.createdAt = new Date();
        req.body.updatedAt = new Date();
        req.body.QuestionId = req.params.questionId;
        req.body.UserId = req.user.id;
        console.log(req.body)
        const newSubmission = await Solver.create(req.body);
        return res.status(200).json({
            success: true,
            message: 'Submission Successful',
            data: newSubmission,
        });
    } catch (error) {
        return next(error);
    }
};

const createTestcase = async (req, res, next) => {
    try {
        if (!req.body.test_input) {
            return next(new ErrorHandlerClass('Input is required', 422));
        }
        if (!req.body.test_output) {
            return next(new ErrorHandlerClass('Output is required', 422));
        }
        req.body.createdAt = new Date();
        req.body.updatedAt = new Date();
        const newTestcase = await Testcase.create(req.body);
        return res.status(200).json({
            success: true,
            message: 'Testcase created successfully',
            data: newTestcase,
        });
    } catch (error) {
        return next(error);
    }
};

const updateTestcase = async (req, res, next) => {
    try {
        const testcaseExist = await Testcase.findOne({
            where: {
                id: req.params.testcaseId,
            },
        });
        if (!testcaseExist) {
            return next(new ErrorHandlerClass('Invalid Explanation ID', 422));
        }
        req.body.updatedAt = new Date();
        await Testcase.update(req.body, {
            where: {
                id: req.params.testcaseId,
            },
        });
        return res.status(200).json({
            success: true,
            message: 'Testcase content updated',
        });
    } catch (error) {
        return next(error);
    }
};

const deleteTestcase = async (req, res, next) => {
    try {
        const testcaseDeleted = await Testcase.destroy({
            where: {
                id: req.params.testcaseId,
            },
        });
        if (!testcaseDeleted) {
            return next(new ErrorHandlerClass('Invalid Testcase ID', 422));
        }
        return res.status(200).json({
            success: true,
            message: 'Testcase Deleted Successfully',
        });
    } catch (error) {
        return next(error);
    }
};

const viewAllTestcases = async (req, res, next) => {
    try {
        const questionExist = await Question.findOne({
            where: {
                id: req.params.questionId,
            },
        });
        if (!questionExist) {
            return next(new ErrorHandlerClass('Invalid Question ID', 422));
        }
        const testcasesList = await Testcase.findAll({
            where: {
                QuestionId: req.params.questionId,
            },
        });
        return res.status(200).json({
            success: true,
            data: testcasesList,
        });
    } catch (error) {
        return next(error);
    }
};
module.exports = {
    createSubmission,
};
