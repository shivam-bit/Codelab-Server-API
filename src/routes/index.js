const { Router } = require('express');
const authenticationRoutes = require('./auth');
const subjectRoutes = require('./subject');
const questionRoutes = require('./question');
const explanationRoutes = require('./explanation');

const router = Router();
router.use('/auth', authenticationRoutes);
router.use('/subject', subjectRoutes);
router.use('/question', questionRoutes);
router.use('/explanation', explanationRoutes);

module.exports = router;
