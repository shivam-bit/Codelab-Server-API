const { User } = require('../../models');
const sendJwtToken = require('../utils/jwtToken');

const createUser = async (req, res) => {
    req.body.createdAt = new Date();
    req.body.updatedAt = new Date();
    try {
        const user = await User.create(req.body);
        sendJwtToken(user, 200, res);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email,
            },
        });
        const isPasswordValid = user.isPasswordValid(req.body.password);
        if (isPasswordValid) {
            sendJwtToken(user, 200, res);
        } else {
            res.status(400).json({
                success: false,
            });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const logoutUser = async (req, res) => {
    try {
        res.cookie('token', 'none', {
            expires: new Date(Date.now()),
            httpOnly: true,
        });
        res.status(200).json({
            success: true,
            message: 'logged out successful',
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createUser,
    loginUser,
    logoutUser,
};
