const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Mongo ulanishi
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB ulandi.'))
  .catch((err) => console.error('MongoDB xatolik:', err));

// Marshrutlar
app.use('/auth', require('./routes/auth.routes'));
app.use('/media', require('./routes/media.routes'));
app.use('/memory', require('./routes/memory.routes'));
app.use('/command', require('./routes/command.routes'));
app.use('/notifications', require('./routes/notification.routes'));
app.use('/settings', require('./routes/settings.routes'));
app.use('/system', require('./routes/system.routes'));
app.use('/offline', require('./routes/offline.routes'));

// Serverni ishga tushirish
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Quorra OS ishga tushdi: http://localhost:${PORT}`));
