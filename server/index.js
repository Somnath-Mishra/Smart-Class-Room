const express =  require ("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");


const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port=process.env.PORT || 5001;
//app.get("/api/contacts",(req,res)=>{

  //  res.status(200).json({message:"Get all contacts"});
//})

//making routes separately


//this is express built in middleware
app.use(express.json());

//app.use ("/api/contacts",require("./routes/contactRoute"));
app.use ("/SmartLab/users",require("./routes/StudentRoute"));


app.use(errorHandler); 

app.listen(port ,()=> {

    console.log('server running at port',port)
})
 