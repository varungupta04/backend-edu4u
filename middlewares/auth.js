
const ensureTeacher = (req, res, next) => {
  if (req.user.role === 'teacher') {
    return next();
  }
  res.redirect('/unauthorized');
}


function checkUserCredentials(username, password) {
   
    if (username === 'user' && password === 'password') {
      
      const userData = { id: 1, name: 'John Doe', role: 'student' };
      return {
        status: 200,
        message: 'Success',
        data: userData,
      };
    } else {

      return {
        status: 401,
        message: 'Unauthorized',
        data: null,
      };
    }
  }
  