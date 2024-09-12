const express = require('express');
const Task = require('../models/Task.js');
const Log = require('../models/Log.js');
const router = express.Router();
const cron = require('node-cron');
const nodemailer = require('nodemailer');

// Create new task
router.post('/add', async (req, res) => {
  const { name, cronExpression, emailRecipient, subject, message } = req.body;

  const task = new Task({ name, cronExpression, emailRecipient, subject, message });
  await task.save();

  // Schedule task
  cron.schedule(cronExpression, async () => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: emailRecipient,
      subject,
      text: message
    };

    transporter.sendMail(mailOptions, async (error, info) => {
      const status = error ? 'Failed' : 'Executed';
      await new Log({ taskName: name, status }).save();
    });
  });

  res.json({ message: 'Task added and scheduled' });
});

// Get all tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Get all logs
router.get('/logs', async (req, res) => {
  const logs = await Log.find();
  res.json(logs);
});

module.exports = router;
