const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    enum: ["Admin", "Student", "Instructor"],
    required: true,
  },

  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Classroom",
    },
  ],
  image: {
    type: String,
  },
  token: {
    type: String,
  },
  
  resetPasswordExpires: {
    type: Date,
  },
  courseProgress: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CourseProgress",
    },
  ],
  performance: [
    {
      solvedQuestion: [
        {

          type: String,
          reuired: true,
        },
      ],
      attendance: [
        {
          type: Number,
        },
      ],
    },
  ]
});
module.exports = mongoose.model("User", userSchema);

