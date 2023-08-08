// -----------------------------------------

// forEach, map, filter, reduce, reduceRight

const response = {
  Search: [
    {
      Title: "Harry Potter and the Deathly Hallows: Part 2",
      Year: "2011",
      imdbID: "tt1201607",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    },
    {
      Title: "Harry Potter and the Sorcerer's Stone",
      Year: "2001",
      imdbID: "tt0241527",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
    },
    {
      Title: "Harry Potter and the Chamber of Secrets",
      Year: "2002",
      imdbID: "tt0295297",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_SX300.jpg",
    },
    {
      Title: "Harry Potter and the Prisoner of Azkaban",
      Year: "2004",
      imdbID: "tt0304141",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg",
    },
    {
      Title: "Harry Potter and the Goblet of Fire",
      Year: "2005",
      imdbID: "tt0330373",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg",
    },
    {
      Title: "Harry Potter and the Order of the Phoenix",
      Year: "2007",
      imdbID: "tt0373889",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTA3MmRmZDgtOWU1Ny00ZDc5LWFkN2YtNzNlY2UxZmY0N2IyXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    },
    {
      Title: "Harry Potter and the Deathly Hallows: Part 1",
      Year: "2010",
      imdbID: "tt0926084",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg",
    },
    {
      Title: "Harry Potter and the Half-Blood Prince",
      Year: "2009",
      imdbID: "tt0417741",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg",
    },
    {
      Title: "Harry Potter 20th Anniversary: Return to Hogwarts",
      Year: "2022",
      imdbID: "tt16116174",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTZkNWEyZTgtYzJlOS00OWNiLTgwZjMtZGU5NTRhNDNjOTRhXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg",
    },
    {
      Title: "Harry Potter and the Forbidden Journey",
      Year: "2010",
      imdbID: "tt1756545",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDM0YzMyNGUtMTU1Yy00OTE2LWE5NzYtZDZhMTBmN2RkNjg3XkEyXkFqcGdeQXVyMzU5NjU1MDA@._V1_SX300.jpg",
    },
  ],
  totalResults: "133",
  Response: "True",
};

let movies = response["Search"];

console.log(movies, "movies");

// movies.forEach(function (item, index) {
//   console.log(item, "item");
//   console.log(index, "index");
// });

const titles = movies.map(function (item, index) {
  //   console.log(item, "item");
  //   console.log(index, "index");
  return item["Title"];
});

movies = movies.map(function (item) {
  return {
    title: item.Title,
    poster: item.Poster,
    year: item.Year,
  };
});

console.log(movies, "movies");
console.log(titles, "titles");

const filteredMovies = movies.filter(function (item, index) {
  return item.year > 2010;
});

console.log(filteredMovies, "filteredMovies");

// ---------------------

// console.log(movies)
// let totalBalances = 0;
//
// for ( ..) {
//   totalBalances += users[i].balances;
// }

// [ 'a', 'b', 'c' ]

let total = 0;

total = movies.reduce(function (accumulation, current, index) {
  // console.log(current, 'current');
  // console.log(accumulation, 'accumulation')

  return accumulation + Number(current.year);
}, total)

console.log(total / movies.length, 'total');

//----------

/*

  {
    "Harry Potter and the Deathly Hallows: Part 2": "2011",
    "Harry Potter and the Sorcerer's Stone": "2001"
  }

 */

const start = {};

const obj = movies.reduce(toDo, start)

function toDo(accum, current, index,  mass) {
  console.log(mass, 'mass');
  accum[current.year] = current.title;
  return accum;
}

const arr = [
  { year: 2022, title: 'a'},
  { year: 2021, title: 'b'},
  { year: 2020, title: 'c'},
];

const obj2 = arr.reduce(toDo, {});

console.log(obj2, 'obj2');


// const obj = movies.reduce(function (accum, current) {
//   accum[current.year] = {
//     poster: current.poster,
//     title: current.title
//   };
//
//   return accum;
// }, start)

const year = '2005';

console.log(movies, 'movies');

// console.log(obj[year], 'obj');

console.log(obj, 'obj');