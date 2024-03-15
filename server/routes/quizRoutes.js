const {
  createCustomizeQuiz,
  createMultiplayerQuiz,
} = require("../controllers/quizController");

const router = require("express").Router();

router.post("/practice", createCustomizeQuiz);
router.post("/create", createMultiplayerQuiz);

module.exports = router;
