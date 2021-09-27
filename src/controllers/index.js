const { User } = require('../../models');

const createUser = async (req, res) => {
    req.body.createdAt = new Date();
    req.body.updatedAt = new Date();
    try {
        const user = await User.create(req.body);
        return res.status(200).json({
            user,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createUser,
};
