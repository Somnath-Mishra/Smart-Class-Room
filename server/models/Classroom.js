const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    className: {
        type:String,
    },
    classDescription: {
        type:String,
    },
    instructor: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },

    whatYouWillLearn: {
        type:String,
    },


    studentsEnrolled: [{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    }]
});

module.exports = mongoose.model("Classroom", courseSchema);