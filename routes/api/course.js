const express = require('express');
const router = express.Router();
const Course = require('./models/Course');

router.get('/course', async (req, res, next) => {
  try {
    // get list of all courses
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    // create new course
    const { name, department } = req.body;

    const course = await Course.create({
      name,
      department,
    });

    res.redirect('/landing-page');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
