const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true, unique: true },
  copiesAvailable: { type: Number, default: 1 },
  genre: { type: String },
  publishedDate: { type: Date },
}, { timestamps: true, _id: false });

module.exports = mongoose.model('books', BookSchema);