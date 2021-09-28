const { Router } = require('express');
const controller = require('../controllers/index');
const isAuthenticatedUser = require('../middlewares/isAuthenticatedUser');

const router = Router();

router.route('/create').post(controller.createUser);
router.route('/login').post(controller.loginUser);
router.route('/logout').post(isAuthenticatedUser, controller.logoutUser);

module.exports = router;
