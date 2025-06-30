const Memory = require('../models/MemorySnapshot');

const saveMemory = async (req, res) => {
  try {
    const { context, mood, tags } = req.body;
    const mem = await Memory.create({ user: req.user.id, context, mood, tags });
    res.status(201).json(mem);
  } catch (err) {
    res.status(500).json({ error: 'Could not save memory' });
  }
};

const listMemories = async (req, res) => {
  try {
    const data = await Memory.find({ user: req.user.id, archived: false }).sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load memories' });
  }
};

module.exports = { saveMemory, listMemories };
