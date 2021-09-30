const { Router } = require('express');
const authenticationRoutes = require('./auth');
const subjectRoutes = require('./subject');
const questionRoutes = require('./question');

const router = Router();
router.use('/auth', authenticationRoutes);
router.use('/subject', subjectRoutes);
router.use('/question', questionRoutes);

module.exports = router;
