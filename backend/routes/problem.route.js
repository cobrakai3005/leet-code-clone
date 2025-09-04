const express = require("express");
const {
  findProblemsBySlug,
  findProblems,
} = require("../controllers/problem.controller");

const router = express.Router();

router.get("/", findProblems);
router.get("/:slug", findProblemsBySlug);

module.exports = router;
