function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function array2DFiller(array, MAX_ROWS, MAX_COLS) {
    for (let i = 0; i < MAX_ROWS; i++) {
        array[i] = []

        for (let j = 0; j < MAX_COLS; j++) {
            array[i][j] = random(1, 10);
        }
    }

    return array;
}

function calculateSums2DArray(array2D) {
    const sums = [];

    for (let i = 0; i < array2D.length; i++) {
        let sum = 0;

        for (let j = 0; j < array2D[i].length; j++) {
            sum += array2D[i][j];
        }

        sums.push(sum);
    }

    return sums;
}

function findMin(array) {
    let minItem = array[0];

    for (let i = 0, max = array.length; i < max; i++) {
        if (minItem > array[i]) {
            minItem = array[i];
        }
    }

    return minItem;
}

function findMax(array) {
    let maxItem = array[0];

    for (let i = 0, max = array.length; i < max; i++) {
        if (maxItem < array[i]) {
            maxItem = array[i];
        }
    }

    return maxItem;
}



const countRow = 4;
const countCol = 4;

const mass = []

function findMaxAndMinItemOfArray(array, countRow, countCol) {
    const mass = array2DFiller(array, countRow, countCol)
    const sums = calculateSums2DArray(mass);
    const minItem = findMin(sums);
    const maxItem = findMax(sums);

    return [
        minItem,
        maxItem
    ]
}

findMaxAndMinItemOfArray(mass, countRow, countCol);

// ---------


const mass2 = array2DFiller([], 5, 5);

console.log(mass2, 'mass2');

const sums = calculateSums2DArray(mass2);

console.log(sums, 'sums');

const min = findMin(sums);

console.log(min, 'min');

const max = findMax(sums);

console.log(max ,'max');

//
// let sums = []
//
// let max;
// let maxIndex;
// let min;
// let minIndex;
//
//
// for (let i = 0; i < mass4.length; i++) {
//     let sum = 0;
//
//     for (let j = 0; j < mass4[i].length; j++) {
//         sum += mass4[i][j];
//     }
//
//     // sums.push(sum);
//
//     if (i === 0) {
//         // ----- гіпотеза -----
//         max = sum
//         maxIndex = i;
//
//         min = sum;
//         minIndex = i;
//         continue;
//     }
//
//     if (sum > max) {
//         max = sum;
//         maxIndex = i;
//     }
//
//     if (sum < min) {
//         min = sum;
//         minIndex = i;
//     }
// }





