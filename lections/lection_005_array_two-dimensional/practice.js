/// Таблица с 1 рендером на основе 2мерного массива



// В двумерном массиве A размером n на m. Заполнить случайными числами.
//     1. Найти ряд, где сумма элементов наименьшая
//     2. Найти ряд, где сумма элементов найбольшая
//     3. Поменять ряды местами (1 и 2 пункт)

const n = 4;
const m = 4;

const mass4 = new Array(n);



for (let i = 0; i < mass4.length; i++) {
    mass4[i] = new Array(m)

    for (let j = 0; j < mass4[i].length; j++) {
        mass4[i][j] = Math.round(Math.random() * 3);
    }
}
// ---------
console.log(mass4, 'mass4');

let sums = []

let max;
let maxIndex;
let min;
let minIndex;


for (let i = 0; i < mass4.length; i++) {
    let sum = 0;

    for (let j = 0; j < mass4[i].length; j++) {
        sum += mass4[i][j];
    }

    // sums.push(sum);

    if (i === 0) {
        // ----- гіпотеза -----
        max = sum
        maxIndex = i;

        min = sum;
        minIndex = i;
        continue;
    }

    if (sum > max) {
        max = sum;
        maxIndex = i;
    }

    if (sum < min) {
        min = sum;
        minIndex = i;
    }
}


console.log(max, 'max');
console.log(maxIndex, 'maxIndex');
console.log(min, 'min');
console.log(minIndex, 'minIndex');
console.log(sums, 'sums');




