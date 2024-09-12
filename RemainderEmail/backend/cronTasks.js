// const cron = require('node-cron');
// const Task = require('./models/Task.js');
// const Log = require('./models/Log.js');
// const sendEmail = require('./email.js');

// const scheduleTasks = async () => {
//   try {
//     const tasks = await Task.find({});
    
//     tasks.forEach(task => {
//       cron.schedule(task.cronExpression, async () => {
//         try {
//           await sendEmail(task.emailRecipient, task.subject, task.message);
//           const log = new Log({ taskName: task.name, status: 'Executed' });
//           await log.save();
//           console.log(`Task ${task.name} executed and logged.`);
//         } catch (error) {
//           console.error(`Error executing task ${task.name}:`, error);
//         }
//       });
//     });
//   } catch (error) {
//     console.error('Error scheduling tasks:', error);
//   }
// };

// module.exports = scheduleTasks;
