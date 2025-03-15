const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

app.post('/api/bookings', async (req, res) => {
  const { name, email, phone, sessionType, date, time, specialRequest } = req.body;

  if (!name || !email || !phone || !sessionType || !date || !time) {
    return res.status(400).json({ message: 'All fields except special request are required' });
  }

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USER,
      subject: 'New Massage Booking Request',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Session Type: ${sessionType}
        Date: ${date}
        Time: ${time}
        Special Request: ${specialRequest || 'None'}
      `,
    });

    res.status(200).json({ message: 'Booking request sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send booking request' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
