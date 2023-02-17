const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  title: { type: String, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model('Exam', examSchema);
