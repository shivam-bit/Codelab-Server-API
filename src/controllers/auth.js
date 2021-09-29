const { User } = require('../../models');
const sendJwtToken = require('../utils/jwtToken');
const ErrorHandlerClass = require('../utils/errorHandlerClass');

const createUser = async (req, res, next) => {
    try {
        if (!req.body.name) {
            return next(new ErrorHandlerClass('Name is required', 422));
        }
        if (!req.body.password) {
            return next(new ErrorHandlerClass('Password is required', 422));
        }
        if (!req.body.email) {
            return next(new ErrorHandlerClass('Email is required', 422));
        }
        req.body.createdAt = new Date();
        req.body.updatedAt = new Date();
        const user = await User.create(req.body);
        return sendJwtToken(user, 200, res);
    } catch (error) {
        return next(error);
    }
};

const loginUser = async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email,
            },
        });
        if (!user) {
            return next(new ErrorHandlerClass('Inavlid Email', 401));
        }
        const isPasswordValid = user.isPasswordValid(req.body.password);
        if (!isPasswordValid) {
            return next(new ErrorHandlerClass('Inavlid Password', 401));
        }
        return sendJwtToken(user, 200, res);
    } catch (error) {
        return next(error);
    }
};

const logoutUser = async (req, res, next) => {
    try {
        res.cookie('token', 'none', {
            expires: new Date(Date.now()),
            httpOnly: true,
        });
        return res.status(200).json({
            success: true,
            message: 'logged out successful',
        });
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    createUser,
    loginUser,
    logoutUser,
};
