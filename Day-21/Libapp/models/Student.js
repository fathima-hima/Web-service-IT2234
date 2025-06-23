const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  studentId: { type: String, required: true, unique: true },
  department: { type: String },
  year: { type: Number },
}, { timestamps: true, _id: false });

module.exports = mongoose.model('students', StudentSchema);
