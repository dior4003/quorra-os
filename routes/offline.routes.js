const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { savePendingCommand, listPendingCommands } = require('../controllers/offline.controller');

router.use(auth);

router.post('/queue', savePendingCommand);
router.get('/queue', listPendingCommands);

module.exports = router;
