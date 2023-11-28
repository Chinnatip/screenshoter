const express = require("express");
const cors = require("cors");
const { scrapeLogic } = require("./scrapeLogic");
const { screenshotLogic } = require("./screenshotLogic");
const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors()); 
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/scrape", (req, res) => {
  scrapeLogic(res);
});

app.post("/screenshot", (req, res) => {
  screenshotLogic(req, res);
});

app.get("/", (req, res) => {
  res.send("Render Puppeteer server is up and running!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
