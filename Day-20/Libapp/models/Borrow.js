const mongoose = require('mongoose');

const BorrowSchema = new mongoose.Schema({
  student: { type: String, ref: 'students', required: true },
  book: { type: String, ref: 'books', required: true },
  borrowDate: { type: Date, default: Date.now },
  returnDate: { type: Date,default:null },
  returned: { type: Boolean, default: false },
}, { timestamps: true});

module.exports = mongoose.model('borrows', BorrowSchema);