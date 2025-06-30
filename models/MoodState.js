const mongoose = require('mongoose');

const moodSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  state: { type: String }, // e.g. happy, focused, sleepy, sarcastic
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MoodState', moodSchema);
