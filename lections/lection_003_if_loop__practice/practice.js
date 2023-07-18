/*
    Ввести с клавиатуры 2 числа a и b (где a <<< b). 
    Запустить цикл перебора от a до b. 
    Вывести в консоль квадраты чётных чисел.
    Возвести в 5тую степень четные числа при помощи цикла do{} while()

*/
//  squre: 2 * 2

//step = > 2^5 => 2 * 2 * 2

let a = +prompt("Input first value");
let b = +prompt("Input second value");

console.log(a, "a");
console.log(b, "b");

console.log(typeof a, "a");
console.log(typeof b, "b");

if (typeof a === "string" && typeof b === "string") {
  a = Number(a);
  b = Number(b);
  console.log("---transform to number---");
}

console.log(a, "a");
console.log(b, "b");

console.log("------------");

// for (let i = a; i <= b; i++) {
//   console.log(i, "i");
// }
// a = 10
// b = 4

if (a > b) {
  let temp = b;
  b = a;
  a = temp;
}

console.log(a, "a");
console.log(b, "b");
// 5 - 10

// 2 * 2 * 2 ==> 8

for (; a <= b; a++) {
  //   console.log(a, "a");
  if (a % 2 !== 0) {
    console.log(a, "a inside if");
    continue;
  }

  console.log(a, "a outeside if");

  let total = 1;
  let stepen = 3;
  //   console.log(stepen, "stepen");

  do {
    total *= a;
  } while (--stepen);

  console.log("for a ==>", a, "total ==>", total);
}
