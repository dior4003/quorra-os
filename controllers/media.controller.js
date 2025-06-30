const Media = require('../models/Media');

const uploadMedia = async (req, res) => {
  try {
    const { title, type, url, duration } = req.body;
    const media = await Media.create({ user: req.user.id, title, type, url, duration });
    res.status(201).json({ message: 'Media saved', media });
  } catch (err) {
    res.status(500).json({ error: 'Media upload failed' });
  }
};

const getUserMedia = async (req, res) => {
  try {
    const media = await Media.find({ user: req.user.id });
    res.json(media);
  } catch (err) {
    res.status(500).json({ error: 'Fetch failed' });
  }
};

module.exports = { uploadMedia, getUserMedia };
