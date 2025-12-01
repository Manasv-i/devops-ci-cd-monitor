const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const url = `https://api.github.com/repos/${process.env.GITHUB_USER}/${process.env.REPO_NAME}/actions/runs`;

    const response = await axios.get(url, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    });

    // We only send the workflow_runs array
    res.json(response.data.workflow_runs);
  } catch (error) {
    console.error("Error fetching pipeline runs:", error.message);
    res.status(500).json({ error: "Failed to fetch pipeline runs" });
  }
});

module.exports = router;
