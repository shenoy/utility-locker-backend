const express = require("express");
const app = express();
const data = require("./data");
const port = 5000;

const allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(allowCrossDomain);

app.get("/", (req, res) => res.status(200).json({ status: "success", data }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.listen(port, () => console.log(` listening at http://localhost:${port}`));
