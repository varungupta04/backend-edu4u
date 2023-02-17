const express = require('express');
const router = express.Router();
const Payment = require('../models/payment');

router.get('/payment', async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/payment', async (req, res) => {
  try {
    const { studentId, amount, date } = req.body;

    const payment = await Payment.create({
      studentId,
      amount,
      date,
    });

    res.redirect('/landing-page');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
