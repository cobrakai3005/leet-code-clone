const express = require("express");
const {
  submission,
  allSubmissions,
} = require("../controllers/submisstion.controller");

const router = express.Router();

router.post("/:id", submission);
router.get("/:userId", allSubmissions);

module.exports = router;
