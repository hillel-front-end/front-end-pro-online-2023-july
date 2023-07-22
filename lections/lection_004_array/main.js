/*
Lection 3 - Array
 * Math
 * [], [].length
 * new Array()
 * Доступ по индексу
 * Обращение к первому/последнему элементу массива
 * Добавление элемента в массив
 * [].length = 20 || data[30] = 'foo'
 * Заполнения массива случайными числами
 * Пример - перебор (for - for - of)
 * 
 * Практика:
  - min, max (10 - 20),
*/


// ------------ # 1 - infinity loop + break --------------
//
// while (true) {
//     const isNext = confirm();
//
//     if (!isNext) {
//         break;
//     }
//
//     // toDo something
//     console.log('toDo something')
// }

// console.log('---finish---')

// -----> for <-------

// for (;;) {
//     const isNext = confirm();
//
//     if (!isNext) {
//         break;
//     }
//
//     console.log('toDo something')
// }

// console.log('---finish---')


// ------------ # 2 Math -----------------


/*
  1. Math
  Math.round() - возвращает число, округлённое к ближайшему целом
  Math.floor() - возвращает целое число, которое меньше или равно данному 
  Math.ceil() - округляет аргумент до ближайшего большего целого.
  Math.random() - получени случайного числа от 0 - 1
  Форумула получени случайного числа в диапазоне от min (включительно) до max (не включительно):
    Math.random() * (max - min) + min;
*/

const min = 10;
const max = 20;

let random = Math.random() * (max - min) + min;
console.log(random)

const round = Math.round(random);
console.log(round, 'round')

const floor = Math.floor(random);
console.log(floor, 'floor')

const ceil = Math.ceil(random);
console.log(ceil, 'ceil')



// ----------------- Array ---------------------------

let team = 'Mike, ALex, Fil, Lil';
console.log(team, 'team');

team += ', ' + 'Valera';
console.log(team, 'team')

let player = 'Mike';

const mixin = [false, '', 1, null, undefined]; ///bad

let phones = ['apple', 'samsung', 'lg' ];

console.log(phones, 'phones');

// ---------------------- read ---------------
// 0 -- first


phones = ['apple', 'samsung', 'lg', 'xiomi' ];

let first = phones[0]
console.log(first, 'first');


let len = phones.length;
let length = phones['length']

console.log(length, 'length');
console.log(len, 'len')

// console.log(phones[0], '0');
// console.log(phones[1], ' 1');
// console.log(phones[2], '2');

//---
let index = 0;
// console.log(phones[index++], '0');
// console.log(phones[index++], ' 1');
// console.log(phones[index++], '2');

/*
    phones[index]
    index = index  + 1; // 1
    phones[index]
    index = index  + 1; // 2
    phones[index]
*/


phones = ['apple', 'samsung', 'lg', 'xiomi', 'fff', 'aaa' ];
length = phones.length;
console.log(phones, 'phones');

for (let i = 0; i < length; i++) {
    // console.log(phones[i], i)
}

// ---- last element

let last = phones[4]; // bad

// good
let lastIndex = phones.length - 1;
last = phones[lastIndex]

console.log(last, 'last');


// ------ write -------

let mass = [];

// let userName = prompt('Input name');

let userName = 'valera';
// mass[0] = userName;
// mass[5] = userName;
// console.log(mass, 'mass');

const COUNT_USERS = 3;
let users = [];

console.log(users, 'users');

// for (let i = 0; i < COUNT_USERS; i++) {
//     console.log(users[i]);
// }
// console.log(users.length, 'length');

// for (let i = 0; i < COUNT_USERS; i++) {
//     users[i] = prompt('Input user name');
//     console.log(users.length, 'length');
// }

// console.log(users, 'users')


users.length = 3;

// for (let i = 0, max = users.length; i <= max; i++) {
//     console.log(i ,users.length, 'i, leng');
//     users[i] = prompt('Input user name ' + (i + 1));
// }

users = ['aaa', 'bbbb', 'ccccc', 'kkk'];
console.log(users, 'users');


//read last
console.log(users[users.length - 1]);

//// add last
users[users.length] = 'Valera';

// -------
console.log(users, 'users');

let data = [];


data[5] = 'aaa';

console.log(data, 'data');

// let temp = data[5];
// data[5] = 'bbb';
// data[5 + 1] = temp;

// ------

// let temp = data[data.length - 1];
// data[data.length - 1] = 'bbb';
// data[data.length] = temp;

// console.log(data)

// console.log(data, data');


// for (let i = 0; i < data.length; i++) {
//
//     if (!data[i]) {
//         continue;
//     }
//
//     console.log(data[i]);
// }