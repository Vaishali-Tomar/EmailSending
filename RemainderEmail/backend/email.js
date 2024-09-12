// const nodemailer = require('nodemailer');
// require('dotenv').config();

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.EMAIL_PASSWORD
//   }
// });

// const sendEmail = (to, subject, message) => {
//   const mailOptions = {
//     from: process.env.EMAIL,
//     to,
//     subject,
//     text: message,
//   };

//   return transporter.sendMail(mailOptions);
// };

// module.exports = sendEmail;
