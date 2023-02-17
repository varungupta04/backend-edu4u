const express = require('express');
const mongoose = require('mongoose');

// import routes
const courseRoutes = require('./routes/api/course');
const examRoutes = require('./routes/api/exam');
const facultyRoutes = require('./routes/api/faculty');
const gradeRoutes = require('./routes/api/grade');
const messageRoutes = require('./routes/api/message');
const paymentRoutes = require('./routes/api/payment');
const timetableRoutes = require('./routes/api/timetable');
const assignmentRoutes = require('./routes/api/assignment');
const attendanceRoutes = require('./routes/api/attendance');
const authRoutes = require('./routes/api/authentication');

const app = express();

// middleware to parse JSON request bodies
app.use(express.json());

// connect to MongoDB database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// set up routes
app.use('/courses', courseRoutes);
app.use('/exams', examRoutes);
app.use('/faculty', facultyRoutes);
app.use('/grades', gradeRoutes);
app.use('/messages', messageRoutes);
app.use('/payments', paymentRoutes);
app.use('/timetables', timetableRoutes);
app.use('/user/assignment', assignmentRoutes);
app.use('/user/attendance', attendanceRoutes);
app.use('/user/auth', authRoutes);

// start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
