/*
   19.15 - 19.25 --> Symbol
   19.25 - 19.40 --> Iterator
   19.40 - 20.15 --> Generator
   20.15 - Practice.
*/

// ------------ Symbol ---------------------
const id1 = "123qwert";
const id2 = "123qwert";

const sym1 = Symbol("hello world");
const sym2 = Symbol("hello world");

console.log(sym1, "sym1");
console.log(sym2, "sym2");

console.log(sym1 === sym2);
console.log(sym1 === sym1);

console.log(typeof sym1, "sym1");

// --- example:

const lib = {
  a: 11,
  b: 222,
  id: "aaa",
  next() {},
  [sym1]: "Some unique informattion",
  id: "bbb",
};

console.log(lib[sym2], "sym2"); // undefined
console.log(lib[sym1], "sym1"); // 'Some unique informattion'

lib.id = "cccc";

for (let key in lib) {
  console.log(key);
}

console.log(Object.keys(lib));
console.log(Object.values(lib));

// ------------ Iterator -------------------

//  --> Symbol.Iterator

// -->  [], {}

const arr = ["aaa", "bbb", "cc"];

const obj = {
  name: "Valera",
  lastName: "Ternavsky",
  age: 18,
  childrens: ["aaa", "vvv"],
};

// for (let i in arr ) {
//     console.log(arr[i])
// }

// for (let i of arr) {
//   console.log(i, "i");
// }

// for (let i of obj) { //  obj is not iterable
//   console.log(i, "i");
// }

const iterator = arr.entries();

// console.log(iterator.next()); // { value: .., done: boolen }
// console.log(iterator.next()); // { value: .., done: boolen }
// console.log(iterator.next()); // { value: .., done: boolen }
// console.log(iterator.next()); // { value: .., done: boolen }
// console.log(arr.entries())

// ------------> Symbol.iterator

console.log(Symbol.iterator, "Symbol.iterator");

flag = false;

// obj[Symbol.iterator] = function () {
//   return {
//     next() {
//       return { value: "aaa", done: true };
//     },
//   };
// };

// const iterator2 = obj[Symbol.iterator]();

// console.log(iterator2.next());

// ------

obj[Symbol.iterator] = function () {
  const keys = Object.keys(this);
  let current = 0;
  const self = this;

  //   console.log(this, "this");
  //   console.log(keys, "keys");
  //   console.log(current, "currenbt");

  return {
    next() {
      if (current < keys.length) {
        const key = keys[current++];
        const value = self[key]; //==> obj['name'] if current == 0
        // console.log(self, "self");
        // console.log(value, "value");
        return { value, done: false };
      }
      return { value: undefined, done: true };
    },
  };
};

// const iterator3 = obj[Symbol.iterator]();

// console.log(iterator3.next(), "iterator3");
// console.log(iterator3.next(), "iterator3");
// console.log(iterator3.next(), "iterator3");

for (let value of obj) {
  console.log(value, "value");
}
// Map, Set

// ------------- Generator * -----------------

function* getNumber() {
  console.log(" Part - 1");

  const loo = yield 1;

  console.log("Part - 2", loo);

  const b = yield 2;
  console.log("Part - 3");

  return 2;
}

const generator = getNumber();

console.log(generator.next());
console.log(generator.next("aaa"));
console.log(generator.next());

// for(let i of generator) {
//     console.log(i);
// }

// ------

function* foo(arr) {
  while (arr.length != 0) {
    const item = arr.pop();
    yield item;
  }
}

const generator2 = foo(["Valera", "Pety", "Alex"]);

console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());

/// ----------------

function* genAsync() {

  setTimeout(() => {
    console.log("222222");
  }, 3000);

  yield;

  console.log("11111");


}

const generator3 = genAsync();

generator3.next();
generator3.next();
// generator3.next();
