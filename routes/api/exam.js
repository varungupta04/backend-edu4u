const express = require('express');
const router = express.Router();
const Exam = require('../models/exam');

router.get('/user/exam', async (req, res) => {
  try {
    // get list of all exams
    const exams = await Exam.find();
    res.json(exams);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

router.post('/', async (req, res) => {
  try {
    // create new exam
    const { course, date, time, location } = req.body;

    const exam = await Exam.create({
      course,
      date,
      time,
      location,
    });

    res.redirect('/landing');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
