const express = require("express");
const cors = require("cors");
const cellRoutes = require("./routes/cellRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/cells", cellRoutes);

module.exports = app;