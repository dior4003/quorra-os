const fs = require('fs');
const path = require('path');

const logPath = path.join(__dirname, '../logs/anomaly.log');

const watchdog = (req, res, next) => {
  const suspicious = req.headers['x-robot-attack'] === 'true';
  if (suspicious) {
    const log = `[${new Date().toISOString()}] Suspicious request from ${req.ip}\n`;
    fs.appendFileSync(logPath, log);
  }
  next();
};

module.exports = watchdog;
