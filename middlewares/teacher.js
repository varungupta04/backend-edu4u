const ensureTeacher = (req, res, next) => {
    if (req.user.role === 'teacher') {
      return next();
    }
    res.redirect('/unauthorized');
  }
  