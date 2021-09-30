const { Question, Subject } = require('../../models');
const ErrorHandlerClass = require('../utils/errorHandlerClass');

const createQuestion = async (req, res, next) => {
    try {
        if (!req.body.question_text) {
            return next(new ErrorHandlerClass('Question text is missing', 422));
        }
        if (!req.body.input_format) {
            return next(new ErrorHandlerClass("Question's input format is required", 422));
        }
        if (!req.body.output_format) {
            return next(new ErrorHandlerClass("Question's output format is required", 422));
        }
        if (!req.body.constraint) {
            return next(new ErrorHandlerClass("Question's constraint is required", 422));
        }
        if (!req.body.SubjectId) {
            return next(new ErrorHandlerClass('Question Should must belong to a subject', 422));
        }
        req.body.createdAt = new Date();
        req.body.updatedAt = new Date();
        const ques = await Question.create(req.body);
        return res.status(200).json({
            success: true,
            message: 'question created successfully',
            data: ques,
        });
    } catch (error) {
        return next(error);
    }
};

const viewAllQuestionsOfSubject = async (req, res, next) => {
    try {
        const subjectExist = await Subject.findOne({
            where: {
                id: req.params.subjectId,
            },
        });
        if (!subjectExist) {
            return next(new ErrorHandlerClass('Invalid Subject ID', 422));
        }
        const questionsList = await Question.findAll({
            where: {
                SubjectId: req.params.subjectId,
            },
        });
        return res.status(200).json({
            success: true,
            data: questionsList,
        });
    } catch (error) {
        return next(error);
    }
};

const updateQuestion = async (req, res, next) => {
    try {
        const questionExist = await Question.findOne({
            where: {
                id: req.params.questionId,
            },
        });
        if (!questionExist) {
            return next(new ErrorHandlerClass('Invalid Question ID', 422));
        }
        req.body.updatedAt = new Date();
        await Question.update(req.body, {
            where: {
                id: req.params.questionId,
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

module.exports = {
    createQuestion,
    viewAllQuestionsOfSubject,
    updateQuestion,
};
