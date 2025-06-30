const mongoose = require('mongoose');

const commandSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  inputType: { type: String, enum: ['text', 'audio', 'image'], required: true },
  content: { type: String }, // Matn, audio URL yoki rasm yo‘li
  response: { type: String }, // AI javobi
  mood: { type: String }, // AI holati: inspired, tired, etc
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Command', commandSchema);
