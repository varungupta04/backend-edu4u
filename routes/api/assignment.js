const express = require('express');
const router = express.Router();
const Assignment = require('./models/assignment');

router.get('/user/assignments', async (req, res, next) => {
  try {
    const assignments = await Assignment.find();
    res.json(assignments);
  } catch (err) {
    next(err);
  }
});

router.post('/assignments', async (req, res, next) => {
  try {
    const { title, deadline, status } = req.body;
    const assignment = await Assignment.create({ title, deadline, status });
    res.redirect('/landing');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
