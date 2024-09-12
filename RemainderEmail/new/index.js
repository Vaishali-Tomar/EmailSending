const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from a .env file

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Email sending route
app.post("/send-email", (req, res) => {
    const { to, subject, text } = req.body; // Get email data from request body

    // Create the transporter object for sending emails
    const transporter = nodemailer.createTransport({
        service: "gmail",
        secure: true,
        port: 7000,
        auth: {
            user: process.env.EMAIL, // Load your email from environment variables
            pass: process.env.EMAIL_PASSWORD // Load your email password from environment variables
        }
    });

    // Email options
    const mailOptions = {
        from: process.env.EMAIL, // Sender address
        to, // Receiver email (extracted from request body)
        subject, // Email subject (extracted from request body)
        text // Email content (extracted from request body)
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            return res.status(500).json({ message: "Email failed to send", error });
        }
        console.log("Email sent successfully:", info.response);
        res.status(200).json({ message: "Email sent successfully", info });
    });
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
