const { Router } = require('express');
const controller = require('../controllers/index');
const isAuthenticatedUser = require('../middlewares/isAuthenticatedUser');
const authorizedRoles = require('../middlewares/authorizedRoles');

const router = Router();
router.route('/create').post(isAuthenticatedUser, authorizedRoles('Instructor'), controller.createTestcase);
router
    .route('/update/:testcaseId')
    .patch(isAuthenticatedUser, authorizedRoles('Instructor'), controller.updateTestcase);
router
    .route('/delete/:testcaseId')
    .delete(isAuthenticatedUser, authorizedRoles('Instructor'), controller.deleteTestcase);
router.route('/view-all/:questionId').get(isAuthenticatedUser, controller.viewAllTestcases);
module.exports = router;
