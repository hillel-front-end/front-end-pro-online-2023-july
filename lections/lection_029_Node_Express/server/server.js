const express = require("express");

const app = express();
const port = 3000;

// ----statuses -----

/*
Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)

*/

//---- http methods ----

// GET, POST

// app[http method](path, callback)

// --- > ROUTE
// GET:http://localhost:3000/movies

console.log(123);

const getMovies = () => {
  return ["a", "b", "c"];
};

app.get("/movies", (req, res) => {
  console.log("call MOVIES ROUTE");

  res.status(200).json({ movies: getMovies() });
});

// --- > ROUTE
// GET:http://localhost:3000/products

const getProducts = () => {
  return ["h", "o", "p"];
};

app.get("/products", (req, res) => {
  console.log("call MOVIES ROUTE");

  res.status(200).json({ products: getProducts() });
});

// your own route


// -----



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
