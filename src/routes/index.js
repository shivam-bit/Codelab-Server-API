const { Router } = require('express');
const authenticationRoutes = require('./auth');
const subjectRoutes = require('./subject');
const questionRoutes = require('./question');
const explanationRoutes = require('./explanation');
const testcaseRoutes = require('./testcase');
const submissionRoutes = require('./submission');
const judgeRoutes = require('./judge');

const router = Router();
router.use('/auth', authenticationRoutes);
router.use('/subject', subjectRoutes);
router.use('/question', questionRoutes);
router.use('/explanation', explanationRoutes);
router.use('/testcase', testcaseRoutes);
router.use('/submission', submissionRoutes);
router.use('/create', judgeRoutes);
module.exports = router;
