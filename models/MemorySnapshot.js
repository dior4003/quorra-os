const mongoose = require('mongoose');

const memorySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  context: { type: String },
  mood: { type: String },
  tags: [String],
  archived: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MemorySnapshot', memorySchema);
