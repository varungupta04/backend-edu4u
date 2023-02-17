const ensureAdmin = (req, res, next) => {
    if (req.user.role === 'admin') {
      return next();
    }
    res.redirect('/unauthorized');
  }
  