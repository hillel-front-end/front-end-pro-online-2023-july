/*
function set(y) {
  y = 1;
}
x = undefined

 */

function set(y) { // y = x
  y = 1;

  return y;
}

var x = 0;

set(x);

console.log(x); // 0(3) , Undefined or error(4)

// -----------

function addFruit(basket) { //basket = fruits
  basket[0] = "Apple";
}
// --------

var foo = 1;

function bar() {
  // le = { foo: undefined }

  if (!foo) {
    var foo = 10;
  }

  console.log(foo);
}

bar()






// ---------
var a = 1;

function b() {
  a = 10;

  return;

  function a() {}
}

b();

console.log(a, 'a');


// ---------
var user = {
  firstName: "Вася",
  sayHi: function() {
    console.log( this.firstName );
  }
};


setTimeout(user.sayHi.bind(user), 1000);

/// --------------

var fruits = [];
// const fruits2 = {}

addFruit(fruits);

console.log( fruits[0] );

//-------------------------

