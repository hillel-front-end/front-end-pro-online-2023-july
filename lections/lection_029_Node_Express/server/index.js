// function sum(a, b) {
//     return a + b;
// }
// result = sum(1, 2);
// console.log(result, 'result');

// ---------------------------

const http = require("http");

// console.log(http, "http");

const hostname = "127.0.0.1";
const port = 3000;

const getMovies = () => {
  return ["a", "b", "c"];
};

const getProducts = () => {
  return ["h", "o", "p"];
};



const server = http.createServer((req, res) => {
  console.log(req.url, "req");

  if (req.url.slice(1) === "movies") {
    const movies = getMovies();
    const response = {
      movies,
    };

    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response));


  } else if (req.url.slice(1) === "products") {

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(getProducts()));

  }else {
    res.statusCode = 404;
    res.end("404-not found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
