const { Router } = require('express');
const controller = require('../controllers/index');
const isAuthenticatedUser = require('../middlewares/isAuthenticatedUser');
const authorizedRoles = require('../middlewares/authorizedRoles');

const router = Router();
router.route('/create').post(isAuthenticatedUser, authorizedRoles('Instructor'), controller.createExplanation);
router
    .route('/update/:explanationId')
    .patch(isAuthenticatedUser, authorizedRoles('Instructor'), controller.updateExplanation);
router
    .route('/delete/:explanationId')
    .delete(isAuthenticatedUser, authorizedRoles('Instructor'), controller.deleteExplanation);
router.route('/view-all/:questionId').get(isAuthenticatedUser, controller.viewAllExplanationsOfQuestion);
module.exports = router;
