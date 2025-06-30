const Settings = require('../models/Settings');

const updateSettings = async (req, res) => {
  try {
    const updated = await Settings.findOneAndUpdate(
      { user: req.user.id },
      req.body,
      { new: true, upsert: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update settings' });
  }
};

const getSettings = async (req, res) => {
  try {
    const settings = await Settings.findOne({ user: req.user.id });
    res.json(settings);
  } catch (err) {
    res.status(500).json({ error: 'Settings fetch failed' });
  }
};

module.exports = { updateSettings, getSettings };

