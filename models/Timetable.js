const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  day: { type: String, required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
});

module.exports = mongoose.model('Timetable', timetableSchema);
