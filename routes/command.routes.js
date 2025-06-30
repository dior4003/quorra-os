const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { saveCommand, getRecentCommands } = require('../controllers/command.controller');

router.use(auth);

router.post('/save', saveCommand);
router.get('/recent', getRecentCommands);

module.exports = router;
