const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  department: { type: String, required: true },
  faculty: { type: mongoose.Schema.Types.ObjectId, ref: 'Faculty', required: true },
});

module.exports = mongoose.model('Course', courseSchema);
