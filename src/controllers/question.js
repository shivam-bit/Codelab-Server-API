const { Question } = require('../../models');
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

module.exports = {
    createQuestion,
};
