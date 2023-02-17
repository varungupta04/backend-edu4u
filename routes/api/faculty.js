const express = require('express');
const router = express.Router();
const Faculty = require('../models/faculty');

router.get('/faculty', async (req, res, next) => {
  try {
    // get list of all faculty members
    const facultyMembers = await Faculty.find();

    res.json(facultyMembers);
  } catch (err) {
    next(err);
  }
});

router.post('/faculty', async (req, res, next) => {
  try {
    // create new faculty member
    const { name, email, department } = req.body;

    const facultyMember = await Faculty.create({
      name,
      email,
      department,
    });

    res.redirect('/landing-page');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
