const Notification = require('../models/Notification');

const createNotification = async (req, res) => {
  try {
    const notif = await Notification.create({
      user: req.user.id,
      ...req.body
    });
    res.status(201).json(notif);
  } catch (err) {
    res.status(500).json({ error: 'Notification creation failed' });
  }
};

const listNotifications = async (req, res) => {
  try {
    const notifs = await Notification.find({ user: req.user.id }).sort({ scheduledAt: -1 });
    res.json(notifs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load notifications' });
  }
};

module.exports = { createNotification, listNotifications };

