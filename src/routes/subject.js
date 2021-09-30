const { Router } = require('express');
const controller = require('../controllers/index');
const isAuthenticatedUser = require('../middlewares/isAuthenticatedUser');
const authorizedRoles = require('../middlewares/authorizedRoles');

const router = Router();

router.route('/create').post(isAuthenticatedUser, authorizedRoles('Instructor'), controller.createSubject);
router.route('/delete/:id').delete(isAuthenticatedUser, authorizedRoles('Instructor'), controller.deleteSubject);
router.route('/update/:id').patch(isAuthenticatedUser, authorizedRoles('Instructor'), controller.updateSubject);
// router.route('/update').post(controller.loginUser);
// router.route('/delete').post(isAuthenticatedUser, authorizedRoles('Instructor'), controller.logoutUser);
router.route('').get(isAuthenticatedUser, controller.viewAllSubjects);

module.exports = router;
