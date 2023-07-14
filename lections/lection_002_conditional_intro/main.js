/*
  1. повторення
  1.1  diff + and parseInt
  1.2 typeof
  2. alert, confirm, prompt
  3. smart operation, ++, --
  4. review var, let, const
  5. null, undefined
  6. bool, isNaN
  7. logical operators [>,<, >=, <=, ==, ====, !] 
  8. таблиця істиності (&&, ||)
  8.1 default value with prompt (next lesson)
  13. консоль розробника, debugger (next lesson)


*/
// -------------- № 1 - Повторення -----------------------

console.log(1 * "12"); // number string => 1 * 12 => 12
console.log(2 / "abc"); // number /  string == > number * NaN
console.log(2 * 1 + "1" * 2, '2 * 1 + "1"');

//---------

console.log(+"123");
console.log(parseInt("12.5"));
console.log(parseFloat("123.4"));
console.log(Number("123"));
console.log(String(123));
console.log("" + 123);

// ------------> typeof <------
foo = 2 * 1 + "1" + 2;

console.log(typeof foo, "<--- typeof ");

// -------------- № 2 - alert, confirm, prompt -----------------------

//alert("dddd");

// value = Number(prompt("Input value as number"));
// value = prompt("Input value as number");
// value = Number(value);

// console.log(value, "value");

// -------- diff + and parseInt()

console.log(parseInt("123abc"), "parseInt"); //123
console.log(parseInt("a123"));
console.log(parseInt("123abc123"));
console.log(+"123abc", "+");

// -------------- № 3 -  smart operation, ( ++, --), % -----------------------

counter = 0;

counter = counter + 1;
console.log(counter, "counter");

counter = counter + 1; // counter = 1 + 1
console.log(counter, "counter");

counter += 1; // counter = counter + 1;
console.log(counter, "counter");

counter -= 1; // counter = counter - 1;
console.log(counter, "counter");

// ---- increment++ dec--

console.log("--------");
console.log(counter, "counter before");
v = counter++;
console.log(counter, "counter agter");
console.log(v, "v");

console.log("--------");
console.log(counter, "counter before");
v = ++counter;
console.log(counter, "counter agter");
console.log(v, "v");

// -------------- № 4 -  intro review var, let, const -----------------------
// Ecmascript es5 es6(2015) es 2016

p0 = 1;

console.log(p, "p");
var p = 2;

var p = 3;

console.log(p, "p");

// ----------
// console.log(p2, "p2");

let p2 = 3;

p2 = 5;

const PI = 3.14;

p3 = 4;

const FULL_NAME_SECOND = "Valera";

// -------------- № 5 -  null, undefined -----------------------

let h;

console.log(h, "h");

h = 12;

console.log(h, "h");

h = null;

/*
  *********************ШПОРГАЛКА********************************
  ============== Важно помнить преобразования к Number =============
   +null  ->  0
   +""    ->  0      (пустая строка - 0)
   +"123" -> 123 (число в строке - число)
   +true\false -> 1\0
   +"abc" -> NaN (при ошибке результат NaN)
   +undefined -> NaN
  *****************************************************
*/

// -------------- № 6 -  Bool, Boolean() isNaN()  -----------------------

bool = true; // true false
bool2 = false;
console.log(typeof bool, "typeof bool");

let a1 = 12;
// let a2 = prompt();
// console.log(a2, "a2");

// result = isNaN(a2); //
// console.log(result, "result");

/* 
********************ШПОРГАЛКА*********************************
============= Важно помнить преобразования к Boolean ===============
    1) 0, null, undefined, NaN, "" -> false
    2) все остальное -> true
*****************************************************
*/

// -------------- № 7 - logical operators [>,<, >=, <=, ==, ===, !]   -----------------------
let a4 = 12;
let a5 = 13;

console.log(a4 > a5, ">");
console.log(a4 < a5, "<");

a4 = 10;
a5 = 10;
console.log(a4 >= a5, ">=");
console.log(a4 <= a5, ">=");

a4 = "10";
a5 = 10;
console.log(a4 == a5, "a4 == a5"); // string == number // number == number // 10 == 10 => true
console.log(a4 === a5, "===");

console.log(a4 > a5);
console.log("45" > "11", " > ");
console.log("hello" === "hello");
// console.log(12);

// ------------- # 8 - таблиця істиності/перевірка на істеність [&& (усіх), || (хоча б одного)] -------------------------------

// && ||
// (1 + 1) + 2 == >2 + 2 => 4

/*

  true && false => false,
  false && true => false
  false && false ==> false
  true  && true ==> true

*/

// ============= Важно помнить преобразования к Boolean ===============
//     1) 0, null, undefined, NaN, "" -> false
//     2) все остальное -> true
// *****************************************************
// */

// --------- && --------------
w1 = "w1 ";
w2 = "";
w3 = "w3";

let result = w1 && w2 && w3; //  false && true

console.log(result, "result");

console.log(Boolean(result));

// ----- || --------

/*

  true  || false => true,
  false || true => true
  true  || true ==> true
  false || false ==> false

*/

result = w1 || w2 || w3;

console.log(result, "result");

w1 = "w1 ";
w2 = "";
w3 = "w3";

result = (w1 && w2) || w3; // true && false || true => false || true => true

result = w3 || (w1 && w2);

console.log(result, "result");
console.log(Boolean(result));
// ------------------------------------------------------------------
