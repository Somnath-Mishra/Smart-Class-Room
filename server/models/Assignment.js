const mongoose = require('mongoose');
const { Question } = require('./Question');

const assignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: Question
  }]
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = { Assignment, assignmentSchema };
