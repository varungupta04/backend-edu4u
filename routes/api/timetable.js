const express = require('express');
const router = express.Router();
const Timetable = require('../models/timetable');

router.get('/user/timetable', async (req, res, next) => {
  try {
    // get list of all timetables
    const timetables = await Timetable.find();
    res.json(timetables);
  } catch (error) {
    next(error);
  }
});

router.post('/user/timetable', async (req, res, next) => {
  try {
    // create new timetable
    const { courseId, day, start, end } = req.body;

    const timetable = await Timetable.create({
      courseId,
      day,
      start,
      end,
    });

    res.redirect('/landing-page');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
