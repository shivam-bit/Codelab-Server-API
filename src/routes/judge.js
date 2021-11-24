const { Router } = require('express');
const controller = require('../controllers/index');
const isAuthenticatedUser = require('../middlewares/isAuthenticatedUser');
// const authorizedRoles = require('../middlewares/authorizedRoles');

const router = Router();

router.route('/judge/:questionId').post(controller.judge);

module.exports = router;
