const { Explanation, Question } = require('../../models');
const ErrorHandlerClass = require('../utils/errorHandlerClass');

const createExplanation = async (req, res, next) => {
    try {
        if (!req.body.sample_input) {
            return next(new ErrorHandlerClass('Sample input is required', 422));
        }
        if (!req.body.sample_output) {
            return next(new ErrorHandlerClass('Sample output is required', 422));
        }
        req.body.createdAt = new Date();
        req.body.updatedAt = new Date();
        const newExplanation = await Explanation.create(req.body);
        return res.status(200).json({
            success: true,
            message: 'Explanation created successfully',
            data: newExplanation,
        });
    } catch (error) {
        return next(error);
    }
};

const updateExplanation = async (req, res, next) => {
    try {
        const explanationExist = await Explanation.findOne({
            where: {
                id: req.params.explanationId,
            },
        });
        if (!explanationExist) {
            return next(new ErrorHandlerClass('Invalid Explanation ID', 422));
        }
        req.body.updatedAt = new Date();
        await Explanation.update(req.body, {
            where: {
                id: req.params.explanationId,
            },
        });
        return res.status(200).json({
            success: true,
            message: 'Question content updated',
        });
    } catch (error) {
        return next(error);
    }
};

const deleteExplanation = async (req, res, next) => {
    try {
        const explanationDeleted = await Explanation.destroy({
            where: {
                id: req.params.explanationId,
            },
        });
        if (!explanationDeleted) {
            return next(new ErrorHandlerClass('Invalid Explanation ID', 422));
        }
        return res.status(200).json({
            success: true,
            message: 'Explantion Deleted Successfully',
        });
    } catch (error) {
        return next(error);
    }
};

const viewAllExplanationsOfQuestion = async (req, res, next) => {
    try {
        const questionExist = await Question.findOne({
            where: {
                id: req.params.questionId,
            },
        });
        if (!questionExist) {
            return next(new ErrorHandlerClass('Invalid Question ID', 422));
        }
        const explanationsList = await Explanation.findAll({
            where: {
                QuestionId: req.params.questionId,
            },
        });
        return res.status(200).json({
            success: true,
            data: explanationsList,
        });
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    createExplanation,
    updateExplanation,
    deleteExplanation,
    viewAllExplanationsOfQuestion,
};
