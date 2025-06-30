const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { updateSettings, getSettings } = require('../controllers/settings.controller');

router.use(auth);

router.get('/', getSettings);
router.post('/update', updateSettings);

module.exports = router;
