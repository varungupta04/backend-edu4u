const express = require('express');
const router = express.Router();
const Message = require('../models/message');

router.get('/user/messages', async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/user/messages', async (req, res) => {
  try {
    const { senderId, recipientId, subject, message } = req.body;
    const messageData = await Message.create({
      senderId,
      recipientId,
      subject,
      message,
    });
    res.redirect('/landing');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
