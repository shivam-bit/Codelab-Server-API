const jwt = require('jsonwebtoken');
const { User } = require('../../models');
const ErrorHandlerClass = require('../utils/errorHandlerClass');

const key = 'jwtsecretkey';
const isAuthenticatedUser = async (req, res, next) => {
    try {
        let token;
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        } else {
            return next(new ErrorHandlerClass('Inavlid user', 400));
        }
        const decoded = jwt.verify(token, key);
        req.user = await User.findByPk(decoded.id);
        next();
    } catch (error) {
        return next(error);
    }
};

module.exports = isAuthenticatedUser;
