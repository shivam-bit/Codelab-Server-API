const ErrorHandlerClass = require('../utils/errorHandlerClass');

module.exports = (err, req, res, _next) => {
    let message = 'Internal Server Error';
    let errorCode = 500;
    switch (err.name) {
        case 'JsonWebTokenError': {
            message = 'JSON Web token is invalid. Try Again!';
            const error = new ErrorHandlerClass(message, 401);
            res.status(error.statusCode).json({
                success: false,
                message: error.message,
            });
            break;
        }
        default: {
            message = err.message || message;
            errorCode = err.statusCode || errorCode;
            res.status(errorCode).json({
                success: false,
                message,
            });
            break;
        }
    }
};
