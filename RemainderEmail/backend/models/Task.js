const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: String,
  cronExpression: String,
  emailRecipient: String,
  subject: String,
  message: String,
  status: {
    type: String,
    default: 'Active'
  }
});

module.exports = mongoose.model('Task', taskSchema);
