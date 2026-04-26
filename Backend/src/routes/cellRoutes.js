const express = require("express");
const router = express.Router();

const {
  getCells,
  resetGrid,
  getStats
} = require("../controllers/cellController");

router.get("/", getCells);          // GET /api/cells
router.post("/reset", resetGrid);   // optional
router.get("/stats", getStats);     // optional

module.exports = router;