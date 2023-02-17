const ensureStudent = (req, res, next) => {
    if (req.user.role === 'student') {
      return next();
    }
    res.redirect('/unauthorized');
  }