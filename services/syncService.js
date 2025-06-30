const fs = require('fs');
const path = require('path');

const queuePath = path.join(__dirname, '../storage/pendingQueue.json');

const syncToServer = async () => {
  const queue = JSON.parse(fs.readFileSync(queuePath));
  if (!queue.length) return console.log('[Sync] No offline commands.');

  console.log(`[Sync] Sending ${queue.length} commands to server...`);

  // TODO: Replace with real HTTP POST to /command/save
  for (const item of queue) {
    console.log(`[Sync] Pretend syncing → "${item.content}"`);
    await new Promise((r) => setTimeout(r, 300)); // Simulate delay
  }

  fs.writeFileSync(queuePath, JSON.stringify([], null, 2));
  console.log('[Sync] Queue cleared!');
};

module.exports = { syncToServer };
