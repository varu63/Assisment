const Cell = require("../models/Cell");


// ✅ GET all cells
exports.getCells = async (req, res) => {
  try {
    const cells = await Cell.find().sort({ cellId: 1 });
    res.json(cells);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// 🔁 RESET grid (optional but useful)
exports.resetGrid = async (req, res) => {
  try {
    await Cell.updateMany({}, { owner: null });
    res.json({ message: "Grid reset" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// 📊 SIMPLE leaderboard
exports.getStats = async (req, res) => {
  try {
    const stats = await Cell.aggregate([
      { $match: { owner: { $ne: null } } },
      { $group: { _id: "$owner", count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};