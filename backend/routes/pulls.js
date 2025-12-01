const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const url = `https://api.github.com/repos/${process.env.GITHUB_USER}/${process.env.REPO_NAME}/pulls`;

    const response = await axios.get(url, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching pull requests:", error.message);
    res.status(500).json({ error: "Failed to fetch pull requests" });
  }
});

module.exports = router;
