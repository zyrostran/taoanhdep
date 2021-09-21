const express = require("express");
const router = express.Router();

const fs = require("fs");
const path = require("path");

router.get("/", (req, res) => {
     res.send(fs.readFileSync(path.join(__dirname, "index.html"), "utf-8"));
})

module.exports = router;