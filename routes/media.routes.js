const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { uploadMedia, getUserMedia } = require('../controllers/media.controller');

router.use(auth);

router.post('/upload', uploadMedia);
router.get('/my', getUserMedia);

module.exports = router;
