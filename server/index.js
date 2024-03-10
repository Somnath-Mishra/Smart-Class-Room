const express =  require ("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const {cloudinaryConnect} =require("./config/cloudinaryConfig")
const path=require("path");
const bodyParser=require('body-parser');
const cors = require('cors');
//var formidable = require('express-formidable');

const dotenv = require("dotenv").config();



connectDb();
cloudinaryConnect();
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.resolve(__dirname,'public')));

const port=process.env.PORT || 5001;
//app.get("/api/contacts",(req,res)=>{

  //  res.status(200).json({message:"Get all contacts"});
//})

//making routes separately


//this is express built in middleware
app.use(express.json());


cloudinaryConnect();

//app.use ("/api/contacts",require("./routes/contactRoute"));
app.use ("/SmartLab/users",require("./routes/auth"));
app.use ("/SmartLab/teachers",require("./routes/teacherRoutes"));


app.use(errorHandler); 


app.listen(port ,()=> {

    console.log('server running at port',port)
})
 