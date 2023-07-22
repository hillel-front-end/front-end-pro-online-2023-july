/*
  Задача. Разсортировать положительные и отрицательные числа по разным массивам. 
   *   30 случайных чисел в деапазоне от -5 до 5 разсортировать по массивам А и В, где А - массив положительных чисел, 
        В - отрицательных.
       Если число равно нуля, то игнорируем его.
   *   В массиве pos найти min - значение, и max - значение. Min - max поменять местами.
*/


const arr = [];
arr.length = 30;

const min = -5;
const max = 5;
const neg = [];
const pos = [];


for (let i = 0; i < arr.length; i += 1) {
    arr[i] = Math.round(Math.random() * (max - min) + min);

    if (arr[i] > 0) {
        pos[pos.length] = arr[i];
        continue;
    }

    if (arr[i] < 0) {
        neg[neg.length] = arr[i];
    }
}

// console.log(arr, 'arr');

//
// for (let i = 0; i < arr.length; i += 1) {
//   if (arr[i] > 0) {
//       pos[pos.length] = arr[i];
//       continue;
//   }
//
//   if (arr[i] < 0) {
//       neg[neg.length] = arr[i];
//   }
// }
//
console.log(pos, 'pos');
// console.log(neg, 'neg');
// ------------ Гіпотеза

let minItem = pos[0]
let minItemIndex = 0;
let maxItem = pos[0];
let maxItemIndex = 0;

for (let i = 0; i < pos.length; i++) {
    // console.log(pos[i])

    if (minItem >= pos[i]) {
        minItem = pos[i];
        minItemIndex = i;
    }

    if (maxItem <= pos[i]) {
        maxItem = pos[i]
        maxItemIndex = i;
    }
}

console.log(minItem, 'minItem');
console.log(minItemIndex, '<---- pos Min');
console.log(maxItem, 'maxItem');
console.log(maxItemIndex, '<--- pos Max');

const temp = pos[minItemIndex];
pos[minItemIndex] = pos[maxItemIndex];
pos[maxItemIndex] = temp;