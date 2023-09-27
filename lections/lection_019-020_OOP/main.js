// this || Hoisting || scope || LE || Closure

// --------- this ---------

function todo() {
  console.log(this, "this");
}

// #1 -> this ==> window, use strict ==> undefined

todo();

// #2 --> this obj.toDo(); ==> obj

function toDoSomething() {
  console.log(this.a, "obj");
}

var a = "global a";

const obj = {
  a: 12,
  toDo() {
    console.log(this, "this");
    console.log(obj.a, "obj");
  },
  toDoSomething,
};

obj.toDo();
obj.toDoSomething();

const obj2 = {
  a: 11111,
  toDoSomething: toDoSomething,
};

obj2.toDoSomething();

toDoSomething();

// #3 --> this => arrow =>

obj3 = {
  toDo3() {
    const arrow = () => {
      console.log(this, "this");
    };

    arrow();
  },
};

obj3.toDo3();

// #4 ==> call, apply, bind

function toDoSomething2() {
  console.log(this, "this");
}

console.log("---------------");
toDoSomething2.call(obj, 1, 2);
toDoSomething2.apply(obj2, [1, 2]);

// --> bind

toDoSomething2_clone = toDoSomething2.bind(obj);

console.log(toDoSomething2, "toDoSomething2");
console.log(toDoSomething2_clone, "toDoSomething2_clone");

toDoSomething2();
toDoSomething2();
// toDoSomething2();

toDoSomething2_clone();

// ------------------------------------

const parent = {
  toDo() {
    console.log("11111", this);
  },
};

const child = {
  // __proto__: parent,
};
child.__proto__ = parent;

child.toDo();

console.log(child, "child");

// ---------------------------------- OOP -------------------------

const a1 = new Array();
const b = [];

console.log(a1.slice === b.slice);

console.log(a1, b);

// ----------------------------------------------------------------

// const obj5 = new Object();
// const person = {
//   firstName: "valera",
//   lastName: "...",
//   role: "....",
//   run() {
//     //....
//   },
// };

// const person3 = {
//   firstName: "valera",
//   lastName: "...",
//   role: "....",
//   run() {
//     //....
//   },
// };

// console.log(obj5, "obj5");

//__proto__: Array.prototype
Array.prototype.myFoo = function () {
  console.log("This is myFoo Function", this);
};

const arr = [1];
const arr2 = new Array("aaaa", "bbb");

arr.myFoo();
arr2.myFoo();

console.log(arr, "arr");
console.log(arr2, "arr2");

// ----------------

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.role = "admin";

  this.run = function () {
    console.log(this.firstName, "running...");
  };
}

/*
 1. new --> {}
 2. call function constructor ( Person() )
 3. this => (1)
 4. { __proto__: Person.prototype}
*/

const person = new Person("Valera", "Ternavsky");
const person2 = new Person("Alex", "Petrov");
const person3 = new Person("Alex2", "Petrov");

console.log(person, "person");
console.log(person2, "person2");
console.log(person3, "person3");

console.dir(Person, "Person !!");

// ----------------------------------------

function HTMLElement(tagName, className, id) {
  this.tagName = tagName;
  this.className = className;
  this.id = id;

  if (tagName.toLowerCase() === "anchor") {
    this.href = "";

    this.redirect = function () {
      console.log("change url");
    };
  } else if (tagName.toLowerCase() === "img") {
    this.src = "some url to picture";

    this.showPicture = function () {
      console.log("show picture");
    };
  }
}

HTMLElement.prototype.render = function () {
  console.log("Tag rendered");
};

HTMLElement.prototype.rotate = function () {
  console.log("Rotating");
};

console.log("-----------");
const anchorInstance = new HTMLElement("anchor", "link", "facebook-link");
const imgInstance = new HTMLElement("img", "picture", "picture");
console.log(anchorInstance, "anchorInstance");
console.log(imgInstance, "imgInstance");

anchorInstance.redirect();

anchorInstance.render();

/*
 1. new --> {}
 2. call function constructor ( Person() )
 3. this => (1)
 4. { __proto__: Person.prototype}
*/

const mass4 = new Array();

const div = new HTMLElement("div");

// console.log(div.render(), 'div');
// -------------------------------------
