// Array.prototype.forEach = function() {}

//---- var ---
let a = 12;
// let a = 13;
const b = 12;

// -------------

function toDo() {
  var o = 12;
}

// toDo();
// toDo();
// toDo();

if (false) {
  if (false) {
    var o = "hello inside if";
  }
}

// --- LET and Const ----
flag = true;

if (flag) {
  let o1 = "first if";

  if (true) {
    let o1 = "nested if";

    console.log(o1, "o1");
  }

  console.log(o1, "o1");
}

// console.log(o1, "o1");
// new
if (true) {
  let a3 = 11;
  //le = {a3: 11}
}

// old
if (true) {
  (function () {
    var a3 = 11;
    console.log("call IIFE");
  })();
}

// console.log(a3, 'a3');

// for (let i = 0; i < 3; ++i) {
//   // LE.FOR
//   console.log("> ----- i  < -----", i);

//   setTimeout(function () {
//     // LE = {scope: window}
//     console.log(i, "i");
//     console.log("---cal setTimeout----");
//   }, 3000);
// }

for (var i = 0; i < 3; ++i) {
  // LE.FOR
  console.log("> ----- i  < -----", i);

  (function (i) {
    setTimeout(function () {
      // LE = {scope: LE}
      //   console.log(i, "i");
      //   console.log("---cal setTimeout----");
    }, 3000);
  })(i);
}
console.log("after loop for");

// ----------------------

// ----------- object -------

const LAST_NAME = "lastName";
const FIRST_NAME = "first_name";
const SET_FULL_NAME = "setFullName2";

const person = {
  // toDo: function(){},
  // toDo() {}
  [FIRST_NAME]: "Valera", //create
  [LAST_NAME]: "Ternavsky",
  [SET_FULL_NAME]() {
    console.log("call setFullName");
  },
};

const keyName = "firstName";

console.log(person[FIRST_NAME], "firstName");
console.log(person[FIRST_NAME], "firstName"); /// read
console.log(person[FIRST_NAME], "firstName");

console.log(person[keyName], "keyName");

console.log(person[LAST_NAME], "LAST_NAME");

person[SET_FULL_NAME]();

console.log(person, "person");

// ----------- default params -------
const initial = { i: 3 };

function calculate(a = 0, b = 0, c = initial) {
  //   a = a || 0;
  //   b = b || 0;

  return a + b + c.i;
}

const result = calculate(1, 1);

console.log(result, "result");

// --------------- destruction -----------

const foo = {
  h: 12,
  b: "aaa",
  c: [],
  children: {
    name: "valera",
  },
};

// const h = foo.h;
// const arr = foo.c;

const {
  h,
  c: arr,
  children: { name },
} = foo;

console.log(h, "h");
// console.log(c, "c");
console.log(arr, "arr");
console.log(name, "name");

const mass = [1, false, "aaa", ["nested array"]];

// const first = mass[0];
// const bool = mass[1];

let [, , str, nestedArr] = mass;

// console.log(first, "first");
// console.log(bool, "bool");
console.log(str, "str");

function send({ url, path, port }) {
  console.log(url, path, port, "url, path, port");

  return {
    a1: 1,
    b1: 2,
    c1: 3,
  };
}

const { a1 } = send({
  path: "/posts",
  url: "https://roga-ta-kopita",
  port: 9009,
});

console.log(a1, "a1");
// console.log(b1, "b1");

/// ------- template string ----------

// '', "", ``

// const fullName = '<ul>
//     <li> Valera </li>
//     <li> alex </li>
//     <li> pety </li>
// </ul>';

// const name3 = "Valera";

// const getName = () => "Alex2";

// const fullName = `<ul>
//     <li> ${name3} </li>
//     <li> ${getName()} </li>
//     <li> pety </li>
// </ul>`;

// console.log(fullName, "fullName");

const mass2 = [
  { firstName: "Alex" },
  { firstName: "Sandra" },
  { firstName: "April" },
];

const getUser = (user) => `<li>${user.firstName}</li>`;

const getUsersListTemplate = (users) => {
  const template = `
        <ul>
            ${users.map((user) => getUser(user)).join("")}
        </ul>
    `;

  return template;
};

const template = getUsersListTemplate(mass2);

document.write(template);

// -------
