const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  title: { type: String, required: true },
  status: { type: String },
  deadline: { type: Date, required: true },
});

module.exports = mongoose.model('Assignment', assignmentSchema);
