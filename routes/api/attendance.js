const express = require('express');
const router = express.Router();
const AttendanceRecord = require('../models/attendance');

router.get('/', async (req, res, next) => {
  try {
    const attendanceRecords = await AttendanceRecord.find();
    res.json(attendanceRecords);
  } catch (err) {
    next(err);
  }
});

router.post('/user/attendance', async (req, res, next) => {
  try {
    const { studentId, courseId, date, isPresent } = req.body;
    const attendanceRecord = await AttendanceRecord.create({
      studentId,
      courseId,
      date,
      isPresent,
    });
    res.redirect('/landing');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
