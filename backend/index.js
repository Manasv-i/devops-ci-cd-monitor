const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const commitsRoute = require("./routes/commits");
const pullsRoute = require("./routes/pulls");
const issuesRoute = require("./routes/issues");
const pipelineRoute = require("./routes/pipeline");

// Use routes
app.use("/commits", commitsRoute);
app.use("/pulls", pullsRoute);
app.use("/issues", issuesRoute);
app.use("/pipeline", pipelineRoute);

// Test route
app.get("/", (req, res) => {
  res.send("Backend running...");
});

// Start server
app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
