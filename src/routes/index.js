const { Router } = require('express');
const controller = require('../controllers/index');

const router = Router();

router.get('/', (req, res) => {
    res.json('server is up');
});

router.post('/create', controller.createUser);

module.exports = router;
