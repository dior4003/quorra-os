const fs = require('fs');
const path = require('path');

const queuePath = path.join(__dirname, '../storage/pendingQueue.json');

const savePendingCommand = (req, res) => {
  try {
    const queue = JSON.parse(fs.readFileSync(queuePath));
    queue.push({ userId: req.user.id, ...req.body });
    fs.writeFileSync(queuePath, JSON.stringify(queue, null, 2));
    res.status(200).json({ message: 'Queued offline' });
  } catch (err) {
    res.status(500).json({ error: 'Offline queue error' });
  }
};

const listPendingCommands = (_, res) => {
  try {
    const queue = JSON.parse(fs.readFileSync(queuePath));
    res.json(queue);
  } catch (err) {
    res.status(500).json({ error: 'Could not read queue' });
  }
};

module.exports = { savePendingCommand, listPendingCommands };
