const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");

const {cloudinaryConnect} =require("./config/cloudinaryConfig")
const path=require("path");
const bodyParser=require('body-parser');
const cors = require('cors');
const Blog=require("./models/blog.js")
//var formidable = require('express-formidable');

// const dotenv = require("dotenv").config();



// connectDb();
cloudinaryConnect();
// const app = express();

// app.use(cors());

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static(path.resolve(__dirname,'public')));

const port=process.env.PORT || 5001;

// app.use(express.json());
const { Question } = require("./models/Question.js");
const mongoose = require("mongoose");

const sampleQuestions = require("./sampleQuestion.js");
const dotenv = require("dotenv").config();

connectDb("Question");
//connectDb(
//  databaseName
//);
const app = express();

// const port = process.env.PORT || 5001;
//app.get("/api/contacts",(req,res)=>{

//  res.status(200).json({message:"Get all contacts"});
//})


cloudinaryConnect();


// app.use ("/SmartLab/users",require("./routes/auth"));
// app.use ("/SmartLab/teachers",require("./routes/teacherRoutes"));



// app.use(errorHandler); 


 

//this is express built in middleware
app.use(express.json());

//All routes
const quizRoute = require("./routes/quizRoutes.js");

const blogRoute=require("./routes/blogRoute.js");
//app.use ("/api/contacts",require("./routes/contactRoute"));
//app.use("/SmartLab/users", connectCustomizeDatabase('Student'), require("./routes/StudentRoute"));
app.use("/api/quiz", quizRoute);

app.use("/api/blog",blogRoute);

//app.use(errorHandler);

function callback() {
  console.log("successfully");
}
/*
app.get("/insertSampleQuestions", async (req, res) => {
  try {
    // for (const questionData of sampleQuestions) {
      // const question = new Question(questionData);
      // await question.save();
    // }
    const bData=new Blog({
      tag:"Productivity",
      titile:"Boost Your Productivity",
      message:"sleep 8 hours"
    });
    await bData.save();
    console.log("Sample questions inserted successfully.");
    res.status(200).send("Sample questions inserted successfully.");
  } catch (error) {
    console.error("Error inserting sample questions:", error);
    res.status(500).send("Error inserting sample questions.");
  }
});
*/
app.listen(port, () => {
  console.log(`server running at port, ${port} https://localhost:${port}`);
});
