/*

Lection 1 - JavaScript Intro
  * JS Введение, jsfiddle, codepen
  * підключення скриптів, декілька окремих
  * базові команди введення-виведення
  * математичні операції
  * створення, найменування та використання змінних
  * типи(Number, String) + typeof
  * перетворення типів (явне, неявне), parseInt, NaN
  * debugger

*/

// kebab-case( mistake ), snake_kase(ok), camelCase(ok)

//age
//first_name
//firstName

// Type ----------- Number 1 1.2

// Iteger 1 Float 1.2

// Iteger age = 12
// Floar age = 12.2

age = 12;
ageSecond = 13.4;

b = age;

b = 6;

sum = age + b; // 12 +  6 => 18

// ---- input - output ----

console.log(sum);
console.log(age + b * 2);
console.log((age + b) * 2);

result = (age + b) * 2;

console.log(result);

a = 1;
b = 2;

result = a * b; // 1 * 2 => 2
console.log(result);

result = a + b;
console.log(result);

result = a - b;
console.log(result);

result = a / b;
console.log(result);

result = 11 % 2;
console.log(result, "це змінна result");
console.log(result, "result");

/// ------------- String ------------

name = "Valera";
lastName = "Ternavsky";

// ------ конкатенація
empty = " ";
fullName = name + empty + lastName;
console.log(fullName, "fullName");
fullName = name + " " + lastName; // string + string => 'ValeraTernavsky'

console.log(fullName);

// ------------ NaN  -- Not a Namber ------

result = name * lastName; // string * string // NaN * NaN => NaN

console.log(result, "result");

// -------- неявне перетворення даних

a1 = 12; // number
a3 = "5"; // string

a2 = "valera";

result = a1 + a2; // number + string => string + string ==> '12' + 'valera' => '12valera'
console.log(result, "result !");

result = a1 * a2; // number * string //number * NaN ==> NaN

console.log(result, "result");

result = a1 * a3; // number * string //number * number

console.log(result, "result");

result = a1 + a3; // number * string //number * number

console.log(result, "result"); /// string + string // '12' + 5' == > '125'

// ---------- явне перетворення даних
i = "12";
j = "10";

result = +i + +j; //  +string + +string ==>  number + number=> number
console.log(result, "result");

result = +i + j; //number + string ==> string
console.log(result, "result");

result = +i * j; //number * string ==> number * number
console.log(result, "result");

result = i;
console.log(result, "result");

console.log(-j, "j");
console.log(+i, "i");

// ---------- явне перетворення даних
i = "12";
j = "10";

console.log(parseInt(i), "parseInt i");
result = parseInt(i) + +j;
//  parseInt("12") + "10"; 12  + 10 == 22

// ----- diff + parseInt() ------
// ???
