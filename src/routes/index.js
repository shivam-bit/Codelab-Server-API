const { Router } = require('express');
const authenticationRoutes = require('./auth');

const router = Router();
router.use('/auth', authenticationRoutes);

module.exports = router;
