const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

// app.get('/', () => {})

const whiteOriginsLitst = ["http://127.0.0.1:5500", "http://rogaAndcopita.com"];

app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (whiteOriginsLitst.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "GET, POST, HEAD, PUT");
  res.setHeader("Access-Control-Max-Age", "60");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Login, Authorization"
  );

  // Access-Control-Expose-Headers
  // Access-Control-Allow-Credentials

  next();
});

const readModel = (url, cb) => {
  fs.readFile(url, "utf-8", cb);
};

app.get("/test", (req, res) => {
  res.status(200).json({ success: true });
});

app.post("/test", (req, res) => {
  console.log(req.body, "body");

  readModel("./model/users.json", (error, data) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(data);
  });
});

app.put("/test", (req, res) => {
  res.status(200).json({ success: true });
});

app.listen(4000, () => {
  console.log("staerted");
});

//http://127.0.0.1:5500/ -> localhost:4000
