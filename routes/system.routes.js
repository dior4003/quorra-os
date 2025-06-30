const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const root = require('../middlewares/rootGuard');

router.use(auth);
router.use(root);

router.post('/volume', (req, res) => {
  // Stub: bu yerda volume’ni o‘zgartirish kodi ishlatiladi (child_process orqali)
  res.json({ message: 'Volume o‘zgartirildi (simulyatsiya)' });
});

router.post('/alarm', (req, res) => {
  res.json({ message: 'Alarm o‘rnatildi' });
});

router.post('/wifi', (req, res) => {
  res.json({ message: 'WiFi boshqaruvi bajarildi' });
});

module.exports = router;
