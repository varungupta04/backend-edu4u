const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/auth');


// Route to authenticate the user
router.post('user/auth', verifyToken, async (req, res, next) => {
  try {
    res.redirect('/dashboard');
  } catch (err) {
    next(err);
    // Check the user credentials here???
  }
});

router.post('/logout', async (req, res, next) => {
  try {
    
    req.logout();

    
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
