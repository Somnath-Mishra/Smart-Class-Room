const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },
  subject: {
    type: Array,
    required: true,
    trim: true,
  },
  topicTag: {
    type: Array,
    required: true,
    trim: true,
  },

  options:{
    type:Array,
    required:true

  },
  correctAns:{
    type:String,
    required:true,
  },


  ans: {
    type: String,
    required: true,
    trim: true,
  },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = { questionSchema, Question };
