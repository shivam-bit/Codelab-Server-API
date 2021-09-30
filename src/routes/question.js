const { Router } = require('express');
const controller = require('../controllers/index');
const isAuthenticatedUser = require('../middlewares/isAuthenticatedUser');
const authorizedRoles = require('../middlewares/authorizedRoles');

const router = Router();

router.route('/create').post(isAuthenticatedUser, authorizedRoles('Instructor'), controller.createQuestion);
router.route('/:subjectId/all').get(isAuthenticatedUser, controller.viewAllQuestionsOfSubject);
router
    .route('/update/:questionId')
    .patch(isAuthenticatedUser, authorizedRoles('Instructor'), controller.updateQuestion);
router.route('').get(isAuthenticatedUser, controller.viewAllSubjects);

module.exports = router;
