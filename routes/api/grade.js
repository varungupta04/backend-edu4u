const express = require('express');
const router = express.Router();
const Grade = require('../models/grade');

router.get('/user/grades', async (req, res) => {
  try {
    // get list of all grades
    const grades = await Grade.find();
    res.json(grades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/user/grades', async (req, res) => {
  try {
    // create new grade
    const { studentId, courseId, grade } = req.body;

    const gradeData = await Grade.create({
      studentId,
      courseId,
      grade,
    });

    res.status(201).json({ gradeData });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
