/* # - 1 Functions intro. DRY and Separation concept (small chunks, Single Responsibility)
    * create, call, call with params, arguments, return, scope
    * call func in body, callback
   # - 2 Debugger
   # - 3 Declaration, expression, arrow  & diff
*/

/*
let firstName = 'Valera';

alert();console.log()

function getFullName() {
  let firstName = 'Valera';

  if () {

  }
}

*/

let condition = true;

if (condition) {
  const FIRST_NAME = 'Valera';
  const LAST_NAME = 'Ternavsky';
}

console.log(22);

// ------------Function Declaration
// DESCRIBE FUNCTION
function getFullName() {
  const FIRST_NAME = 'Valera';
  const LAST_NAME = 'Ternavsky';

  console.log(FIRST_NAME + ' ' + LAST_NAME);
}


// getFullName();// CALL FUNCTION
//
// getFullName();// CALL FUNCTION
//
// getFullName();// CALL FUNCTION


for (let i = 0; i < 3; i++) {
  getFullName()
}

// --------Function expression


const toDo = function () {
  console.log('123');
};


toDo();



// ----- diff declaration and expression



// console.log(a);
// let a = 1;


// sum();
// mull();

// function sum() {
//   let result = 0;
//
//   for (let i = 0, max = 5; i < max; i++) {
//     result += i;
//   }
//
//   console.log(result, 'sum');
// }

const mull = function () {
  let result = 1;

  for (let i = 1, max = 5; i < max; i++) {
    result *= i;
  }

  console.log(result, 'mull')
}

// sum();
// mull();

/// ----- input, output ----------

// alert('hello'), confirm(), propmt()

console.log(alert);
console.log(sum);

function arrayFiller(mass, n, m) { // формальні параметри --> (mass, n, m)
  mass = mass || [];
  n = n || 3;
  m = m || 5;

  mass.length = n;

  // const array = new Array(n);

  for (let j = 0; j < mass.length; j++) {
    mass[j] = Math.round(Math.random() * m);
  }

  // console.log(mass, 'mass');

  return mass;
}

const array = new Array(6);

let result;

console.log('---- first call arrayFiller --')
result = arrayFiller(array, 15, 116, 'aaaa')// передача фактичних параметрів
console.log(result, 'result');

console.log('---- second call arrayFiller --')
result = arrayFiller([], 20)
console.log(result, 'second result');

console.log('---- third call arrayFiller --')
result = arrayFiller();
console.log(result, 'third result');


// const valueFromUser = prompt('aaa')
// console.log(valueFromUser, 'valueFromUser')

// ---------

function sum(max) {
  // console.log('---before return --')
  if (!Boolean(max)) { // Boolean(max) === false
    console.log('maxx ===> ', max);
    return 0;
  }
  // console.log('---after return --')


  let result = 0;

  for (let i = 0; i < max; i++) {
    result += i;
  }

  console.log(result, 'sum');
  return result;
}

// 0 - 5

let value = sum(5);
console.log(value, 'value');

value = sum(5);
console.log(value, 'value');

value = sum();
console.log(value, 'value second');



// ------------- arguments -----------


function sumArgs(a, b, c, d) { // arguments = [1, 2, 3, 4]
  console.log(arguments, 'arguments');
  // let result = a + b;
  //
  // return result;
  // return a + b + c + d;
  // ------
  let result = 0;

  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i]
  }

  return result;
}

result = sumArgs(1, 2, 3, 4);// arguments = [1, 2, 3, 4]
console.log(result, 'result');

result = sumArgs(4, 5, 6);// arguments = [4, 5, 6]
console.log(result, 'result');

result = sumArgs(4, 5, 6, 6, 7, 8, 9, 10);// arguments = [4, 5, 6]
console.log(result, 'result');

/// -----

function  argumentsToArray() {
  const arr = [];

  console.log(arguments, 'arguments');

  for (let i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }

  console.log(arr, 'arr')

  return arr;
}

mass = argumentsToArray(1, 'asasd', false, null, []);


// --------------- Debugger  -----------



