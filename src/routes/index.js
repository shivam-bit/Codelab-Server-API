const { Router } = require('express');
const authenticationRoutes = require('./auth');
const subjectRoutes = require('./subject');

const router = Router();
router.use('/auth', authenticationRoutes);
router.use('/subject', subjectRoutes);

module.exports = router;
