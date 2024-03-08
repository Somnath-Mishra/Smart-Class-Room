const express = require("express");


const {registerStudent,loginStudent} = require("../Controllers/studentController");
const {sendOTP}=require("../Controllers/OTPController")
const {resetPasswordToken,resetPassword}=require('../Controllers/resetPassword')
const {createClass,showAllClasses,getClassDetails} = require("../Controllers/classRoomController");
const router=express.Router();



router.route("/update-password").post(resetPasswordToken)
router.route("/register").post(registerStudent);
router.route("/verification").post(sendOTP);
router.route("/login").post(loginStudent);
router.route("/change-password").post(resetPassword);

// Get Details for a Specific Courses
//router.post("/getCourseDetails", getCourseDetails)

router.route("/allclasses").get(showAllClasses);
router.route("/getclassdeatils").get(getClassDetails);


module.exports=router;