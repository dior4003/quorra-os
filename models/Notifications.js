const mongoose = require('mongoose');

const notifSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  body: String,
  type: { type: String, enum: ['reminder', 'system', 'custom'] },
  scheduledAt: { type: Date },
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notification', notifSchema);
