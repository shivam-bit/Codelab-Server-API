const { Subject } = require('../../models');
const ErrorHandlerClass = require('../utils/errorHandlerClass');

const createSubject = async (req, res, next) => {
    try {
        if (!req.body.subject_name) {
            return next(new ErrorHandlerClass('Subject Name is requires', 422));
        }
        req.body.createdAt = new Date();
        req.body.updatedAt = new Date();
        req.body.UserId = req.user.id;
        const subject = await Subject.create(req.body);
        return res.status(200).json({
            success: true,
            message: 'created subject',
            data: subject,
        });
    } catch (error) {
        return next(error);
    }
};
const viewAllSubjects = async (req, res, next) => {
    try {
        const subjectsArray = await Subject.findAll();
        return res.status(200).json({
            success: true,
            data: subjectsArray,
        });
    } catch (error) {
        return next(error);
    }
};

const deleteSubject = async (req, res, next) => {
    try {
        const deletedSubject = await Subject.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (deletedSubject !== 1) {
            return next(new ErrorHandlerClass('Invalid Subject id', 422));
        }
        return res.status(200).json({
            success: true,
        });
    } catch (error) {
        return next(error);
    }
};

const updateSubject = async (req, res, next) => {
    try {
        const subjectObj = await Subject.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!subjectObj) {
            return next(new ErrorHandlerClass('Inavlid Subject ID', 401));
        }
        if (subjectObj.UserId !== req.user.id) {
            return next(new ErrorHandlerClass('You are not the owner of this sibject', 401));
        }
        await Subject.update(
            {
                subject_name: req.body.subject_name,
                updatedAt: new Date(),
            },
            {
                where: {
                    id: req.params.id,
                },
            },
        );
        return res.status(200).json({
            success: true,
            message: 'subject name updated',
        });
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    createSubject,
    viewAllSubjects,
    deleteSubject,
    updateSubject,
};
