// Import the required modules
const express = require("express")
const router = express.Router()

// Import the Controllers

// Classroom Controllers Import
const {
  createClass,
  showAllClasses,
  getClassDetails
} = require("../Controllers/classRoomController")




// Importing Middlewares
const { auth, isTeacher, isStudent, isAdmin } = require("../middleware/authMiddleware")



// Courses can Only be Created by Instructors
router.post("/createClass", auth, isTeacher, createClass)





module.exports = router