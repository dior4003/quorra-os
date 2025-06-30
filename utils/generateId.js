const { randomBytes } = require('crypto');
module.exports = () => randomBytes(6).toString('hex');
