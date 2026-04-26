const mongoose = require("mongoose");

const cellSchema = new mongoose.Schema({
  cellId: { type: Number, unique: true },
  owner: { type: String, default: null }
});

module.exports = mongoose.model("Cell", cellSchema);