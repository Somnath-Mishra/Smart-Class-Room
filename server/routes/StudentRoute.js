const express = require("express");


const {registerStudent,loginStdent} = require("../Controllers/studentController");
const {sendOTP}=require("../Controllers/OTPController")
const {resetPasswordToken,resetPassword}=require('../Controllers/resetPassword')

const router=express.Router();



router.route("/update-password").post(resetPasswordToken)
router.route("/register").post(registerStudent);
router.route("/verification").post(sendOTP);
router.route("/login").post(loginStdent);
router.route("/change-password").post(resetPassword);


module.exports=router;