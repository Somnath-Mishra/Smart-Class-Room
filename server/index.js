const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const { Question } = require("./models/Question.js");
const mongoose = require("mongoose");

const sampleQuestions = require("./sampleQuestion.js");
const dotenv = require("dotenv").config();

connectDb("Question");
//connectDb(
//  databaseName
//);
const app = express();

const port = process.env.PORT || 5001;
//app.get("/api/contacts",(req,res)=>{

//  res.status(200).json({message:"Get all contacts"});
//})

//making routes separately

//this is express built in middleware
app.use(express.json());

//All routes
const quizRoute = require("./routes/quizRoutes.js");

//app.use ("/api/contacts",require("./routes/contactRoute"));
//app.use("/SmartLab/users", connectCustomizeDatabase('Student'), require("./routes/StudentRoute"));
app.use("/api/quiz", quizRoute);

//app.use(errorHandler);

function callback() {
  console.log("successfully");
}
/*
app.get("/insertSampleQuestions", async (req, res) => {
  try {
    for (const questionData of sampleQuestions) {
      const question = new Question(questionData);
      await question.save();
    }
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
