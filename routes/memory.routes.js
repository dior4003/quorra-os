const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { saveMemory, listMemories } = require('../controllers/memory.controller');

router.use(auth);

router.post('/save', saveMemory);
router.get('/list', listMemories);

module.exports = router;

