const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { createNotification, listNotifications } = require('../controllers/notification.controller');

router.use(auth);

router.post('/create', createNotification);
router.get('/list', listNotifications);

module.exports = router;
