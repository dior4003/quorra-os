const Command = require('../models/Command');

const saveCommand = async (req, res) => {
  try {
    const { inputType, content, response, mood } = req.body;
    const cmd = await Command.create({
      user: req.user.id,
      inputType,
      content,
      response,
      mood
    });
    res.status(201).json(cmd);
  } catch (err) {
    res.status(500).json({ error: 'Command save error' });
  }
};

const getRecentCommands = async (req, res) => {
  try {
    const cmds = await Command.find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .limit(25);
    res.json(cmds);
  } catch (err) {
    res.status(500).json({ error: 'Fetch error' });
  }
};

module.exports = { saveCommand, getRecentCommands };
