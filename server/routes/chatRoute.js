const router = require("express").Router();

const responseToMsg = require("../controllers/chatController");
router.post("/", responseToMsg);

module.exports = router;
