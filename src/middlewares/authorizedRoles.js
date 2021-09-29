const ErrorHandlerClass = require('../utils/errorHandlerClass');

const authorizedRoles =
    (...roles) =>
    (req, _res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandlerClass('Unathorized role', 403));
        }
        return next();
    };

module.exports = authorizedRoles;
