const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  taskName: String,
  status: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Log', logSchema);
