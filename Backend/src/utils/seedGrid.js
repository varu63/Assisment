require("dotenv").config();
const mongoose = require("mongoose");
const Cell = require("../models/Cell");

const MONGO_URI = process.env.MONGO_URI;

async function seedGrid() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected for seeding");

    // ⚠️ Clear old data (important during dev)
    await Cell.deleteMany({});
    console.log("Old cells deleted");

    const cells = [];

    // create 20x20 grid = 400 cells
    for (let i = 1; i <= 400; i++) {
      cells.push({
        cellId: i,
        owner: null,
      });
    }

    await Cell.insertMany(cells);

    console.log("Grid seeded with 400 cells");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedGrid();