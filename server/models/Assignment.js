const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
    Name: {
        type:String,
        required:true
    },
    Description: {
        type:String,
    },
   Document:{

        type:String

    },
      startDate: {
        type: Date,
        default: Date.now,
      },
      dueDate: {
        type: Date,
        required: true,
      }

},
{
    timestamps:true,
});

module.exports = mongoose.model("Assignment", assignmentSchema);