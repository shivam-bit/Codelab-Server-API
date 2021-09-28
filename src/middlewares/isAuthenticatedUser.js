const jwt = require('jsonwebtoken');
const { User } = require('../../models');

const key = 'jwtsecretkey';
const isAuthenticatedUser = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    } else {
        return res.status(400).json({
            success: false,
            message: 'inavlid user',
        });
    }
    const decoded = jwt.verify(token, key);
    req.user = await User.findByPk(decoded.id);
    next();
};

module.exports = isAuthenticatedUser;
