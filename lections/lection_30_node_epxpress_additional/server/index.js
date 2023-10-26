const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const { type } = require("os");
const app = express();

const port = 4000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// privateRoutes = ["users"];

app.use((req, resp, next) => {
  //   console.log(req.path, "path");
  //   console.log(req.headers, "headers");
  if (req.headers.authorization) {
    next();
    return;
  }

  resp.status(401).json({
    message: "User unauthorized",
  });
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.get("/", (request, response) => {
  response.status(200).json({
    status: "success",
    welcome: true,
  });
});

const readModel = (url, cb) => {
  fs.readFile("./model/users.json", "utf-8", cb);
};

//GEt: http://localhost:4000/users
app.get("/users", (request, response) => {
  readModel("./model/users.json", (e, data) => {
    console.log(typeof data, "data");
    console.log(request.query, "query");
    let users;

    if (typeof data === "string") {
      users = JSON.parse(data);
    }

    const { minAge = "", maxAge = "" } = request.query;

    if (minAge && maxAge) {
      users = users.filter((user) => user.age >= minAge && user.age <= maxAge);
    }

    // response.status(200).send(data);
    response.status(200).json({
      status: "ok",
      users: users,
      count: users.length,
    });
  });

  //   response.send("ok");
});

// http://localhost:4000/users/1
app.get("/users/:id", (req, res) => {
  console.log(req.params, "params"); // { id: 12 }

  const { id = "" } = req.params;

  console.log(req.path);
  //   const id = req.path.slice(-1);

  readModel("./model/users.json", (e, data) => {
    let users;

    if (typeof data === "string") {
      users = JSON.parse(data);
    }

    if (users.length === 0) {
      res.status(500).json({
        message: "Users list is empty",
      });
      return;
    }

    const user = users.find((user) => Number(user.id) === Number(id));

    if (!user) {
      res.status(404).json({
        message: "User is not defined",
      });
      return;
    }

    res.status(200).json({ user });
  });
});

const DB_URL = "./model/users.json";

app.post("/add-user", (req, res) => {
  console.log(req.body, "body");
  const newUser = req.body;

  readModel(DB_URL, (error, usersAsJSON) => {
    const users = JSON.parse(usersAsJSON);

    if (users.length) {
      users.push({
        ...newUser,
        id: users.length,
      });

      fs.writeFile(DB_URL, JSON.stringify(users), (e) => {
        console.log(e, "e");
      });
    }
    res.send("ok");
  });
});
