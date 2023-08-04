/*
  1.  reference vs primitive type
  2.  object intro + diff from array
  3.  operation with object (crud), key as string, return  several things {..}
  4.  object methods
  5.  operator in, for - in
  6.  example assignObject (copy)
  8.  own: forEach, map, filter, make reduce, reduceRight 

*/

//   1.  reference vs primitive type

// ----- float, number, string, null, undefined, Symbol --- primitive

// --- function, array, object --- reference

// --- > primitive:
let a1 = "abc";

let b2 = a1;

// console.log(a1, "a1");
// console.log(b2, "b2");

b2 += "-prim";

// console.log(a1 === b2, "a1 == b2");

// console.log(b2, "b2");

// console.log(a1, "a1");

// let b3 = "aaa";

// b3 = a1;

// ------ > reference

let ref1 = ["a", "b", "c"];

let ref2 = ref1;
let ref3 = ref2;

// console.log(ref1, "ref1");
// console.log(ref2, "ref2");

ref2[0] = "111";

// console.log(ref2, "ref2");
// console.log(ref1, "ref1");
// console.log(ref3, "ref3");

// console.log(ref1 === ref2);

console.log("-----1-----");

const random = function (n) {
  return Math.floor(Math.random() * n);
};

function fillArray(array, length) {
  // array = mass
  array = array.slice();

  for (let index = 1; index < length; index++) {
    array[index] = random(10);
  }

  console.log(array, "array");

  return array;
}

let mass = ["hello"];

fillArray(mass, 5);

console.log(mass, "mass");

// --------------------------------------
console.log("---------- Object -----------");

const propName = 0;
const propAge = 1;
const propIsMarried = 2;

const human = [27, "Valera", false];

// console.log(human[propAge], "propAge");
// console.log(human[propIsMarried], "propIsMarried");
// console.log(human[propName], "propName");

// ---------

/*
 .box  {
   width: 100px;
   heigth: 100px;
   color: blue;

   width: 100px;
 }

*/

/*
  const variable = {
    property: value,
    'property-2': value
  }

  value ==> Type
  
*/

//// -----create-----
console.log("-----create-----");

const box = {
  width: 100,
  heigth: 100,
  color: "blue",
  width: 200,
};

// console.log(box, "box");

const firstName = "valera";
const lastName = "ternasky";

const human2 = {
  name: firstName,
  lastName: lastName,
  age: 28,
  isMarrid: true,
  children: [
    {
      name: "Teona",
    },
  ],
  swim: function () {
    /// method
    console.log("---swimming---");
  },
};

console.log(human2, "human2");

// prompt();
// console.log();

console.log("----- read -----");

const foo = human2.name;
const children = human2.children;
console.log(console);
human2.swim();

console.log(foo, "name");
console.log(children[0], "children");
console.log(human2.children[0]);

///------

const a3 = ["a", "b"];

const first = 0;
console.log(a3[first]);
console.log(a3[0]);

const obj = { a: 1 };

const keyA = "a";

console.log(obj[keyA], "a");
console.log(obj["a"], "a");
console.log(obj.a, "a");

console.log(obj.keyA); // mistake obj.keyA ===> undefined

// ---- write ---

human2.color = "blue";

console.log(human2, "human2");

human2.color = "yellow";

console.log(human2, "human2");

// --- delete ---

delete human2.color;

console.log(human2, "human2");

// ------- loop -------
human2.run = function () {
  console.log("---running ---");
};

human2.sleep = function () {
  console.log("---sleepping ---");
};

for (let key in human2) {
  console.log("------");
  console.log(key, "key");
  console.log(human2[key], "value");

  if (typeof human2[key] === "function") {
    // const fn = human2[key];
    // console.log(fn, "fn");
    // fn();
    human2[key]();
  }
}

console.log(human2, "human2");

/// ------- Copy -----
console.log("------- Copy -----");

const person = {
  name: "valera",
  lastName: "ternavsky",
  age: 28,
};

function copy(obj) {
  const newObj = {};

  for (const key in obj) {
    //key = 'name'
    newObj[key] = obj[key]; ///newObj['name'] =  obj['name']
  }

  return newObj;
}

const person2 = copy(person); //obj = person

console.log(person, "person");
console.log(person2, "person2");

console.log(person === person2);

// -----------------------
