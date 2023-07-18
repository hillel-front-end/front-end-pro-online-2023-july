// -------------- Повторення (&&,|| ДЗ, та приоритетність) ----------------

// let var
//
/*
    console.log(a2, 'a2');
    var a2 = 'aaa'
    console.log(FULL_NAME);

   const FULL_NAME = 'valera';
   let a = 12;
//    let a = 13;
*/

//bool false, null, 0, "", undefined, NaN

// +"avcc" -> NaN

// Number:

// +undefined => NaN
// +null => 0
// +'123' => 123
// +'' => 0,
// +"avcc" -> NaN

// && -- >  welcome' ||  2 === 3 && 2 && 'aaa' /// true || false && true && true

// ---------------------- isNaN, ! --------------------

console.log(!true); // false
console.log(!"lolo"); // !true ==> false
console.log(!null); // !false ==> true

const a = "lolo";

console.log(a || "A --- filled");

login = "123";

message = !login || "filled";

console.log(message, "message");

let isNumber = !isNaN(undefined); // undefined -- NaN --> !true -> false
console.log(isNumber, "isNumber");
isNumber = !isNaN("123"); // 123
console.log(isNumber, "isNumber");

!2 == 2 && 4 > 0; // ==>   false == true && true ==> false && true ==> false
!(2 == 2 && 4 > 0); // ==> !(true && true) ==> !true => false

// ------------- # 8 - if else else if -------------------------------

/*

if (conditional) {
 
}
*/

const conditional = false;

// const isNext = confirm("Is Next ??");

// if (isNext) {
//   console.log("--working----");
// }

/*

if (conditional) {
 
} else {

}
*/

let age; // undefined

if (age && age > 13) {
  //undefined && undefined > 13 ==> false && flase ==> false
  // age > 13 // 10 > 13 ==> false
  console.log("--allow--");
  let foo = false;
  console.log(foo, "foo");
} else {
  console.log("--denied---");
}

/*
if (false) {
 
} else if (false) {

} else if (false) {

} else {

}


*/

let time = 21;

if (time <= 10) {
  console.log("---Good morning");
} else if (time > 10 && time <= 20) {
  // 15 > 10 && 15 < 20 ==> true && true ==>  true
  console.log("---Good day--");
} else {
  console.log("---Good night--");

  //   let isGoToBed = confirm("Is go to bed");

  //   if (isGoToBed) {
  //     console.log("go to bed");
  //   }
}

// ------------- # 9 - loop do{}while(), while() {} -------------------------------

// if (true) {

// }

/*
 do {



 } while()

*/

// поист перевірка, роби - перевіряй

// let count = ;
// const MAX_TRY = 3;

// do {
//   console.log("input password", count);
//   //   count = count + 1;
//   count++;
// } while (count <= MAX_TRY); // f;

let countMaxTry = 3;
// do -- cond
// #if true - do
// #if false -- finish
do {
  //   console.log("input password", countMaxTry);
} while (--countMaxTry); //0 => false

/*
while(cond) {

}
*/

let index = 0;
const MAX_TRY_2 = 10;

while (index < MAX_TRY_2) {
  //   console.log("input password", index, MAX_TRY_2);

  index++;
  //   index = index + 2;
  // index += 2;
}

// console.log("---after - while -", index);

// --- for ----

/*
for(stage - 1; stage - 2; stage - 3) {
    stage - 4 
}
    stage - 1 -- var
    stage - 2 -- conditional
    stage - 3 -- counter
    stage - 4 -- body
*/

console.log("--start loop for ---");
let i = 0,
  max = 3;

// for (; i < max; ) {
//   console.log("input password", i);

//   i++;
// }

for (let i = 0, max = 3; 1 < 3; i++) {
  console.log("input password", i);
    // break;

  const password = prompt(); // asdasd

  if (true) {
    break;
  }

  console.log("--password--", password);
}

// for (let i = 0, j = 3; i < 3 && j != 0; i++, j--) {
//   console.log("input password", i);
// }

/*

    1 ---> 2 (true) --> 4
    3 ---> 2 (true) --> 4
    3 ---> 2 (true) --> 4
    3 ---> 2 (false) --> finish

*/

// ------------- # 10 - loop for, nested -------------------------------
