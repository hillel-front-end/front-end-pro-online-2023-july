
// ------------  Test ---------------------

/*

level 1

* Массив [1, 2, 3, 4, 5] вывести на экран через разделитель ‘_’

* Организовать вывод массива [6,7,2,3,5,7] в виде списка, при помощи тегов ul-li

* В массиве [1,2,3,4,5,6] вырезать центральный элемент, если длина массива парная – вырезать два элемента, которые можно считать центральными

level 2

* Организовать циклический ввод с клавиатуры элементов, которые будут добавляться к существующему массиву A = [1,2,3] в конец. 
  Предусмотреть символ прекращения ввода «&»

Лекция

*/



// * Массив [1, 2, 3, 4, 5] вывести на экран через разделитель ‘_’

const mass = [1, 2, 3, 4, 5];

console.log(mass.join('_'));


//* Организовать вывод массива [6,7,2,3,5,7] в виде списка, при помощи тегов ul-li

const mass2 = ['Alex', 'Sandra', 'April'];

// document.write('<ul>');
// for (let i = 0, max = mass2.length; i < max; i++) {
//     document.write('<li>' + mass2[i] + '</li>');
// }
// document.write('</ul>');


// let template = '<ul>';
//
// for (let i = 0, max = mass2.length; i < max; i++) {
//     template += '<li>' + mass2[i] + '</li>'
// }
//
// template += '</ul>'
//
// document.write(template);

// Alex</li><li>Sandra</li><li>April

// <ul><li>Alex</li><li>Sandra</li><li>April</li></ul>

let template = '<ul><li>' + mass2.join('</li><li>')  + '</li></ul>';

console.log(template, 'template');

document.write(template)


/*
 В массиве [1,2,3,4,5,6] вырезать центральный элемент, если длина массива
  парная – вырезать два элемента, которые можно считать центральными
 */


/*
    [1, 2 , 3, 4, 5]  5 / 2 ==> 2,5 - 1  ==> 3 - 1 = > 2


    [1, 2, 3, 4, 5, 6]  6 / 2 ==> 3 - 1 = 2
 */



const mass3 = [ 1, 2, 3, 4, 5, 6 ]
const count = mass3.length % 2 === 0 ? 2 : 1;
const position = Math.ceil(mass3.length / 2) - 1;


console.log(count, 'count');
console.log(mass3.length, 'length');
console.log(position, 'position')


// ----------------
mass3.splice(position, count);
// ----------------


console.log(mass3, 'mass3');

/// -----------------

const arr = [];
arr.length = 5;

//--

// const arr1 = new Array(5)
// const arr1 = new Array(5, 4)
// console.log(arr, 'arr');
// console.log(arr1, 'arr1');


/*
  Lection 5 - Array
  * Двумерные массивы
  * Зубчатые массива\ Ступенчатые массивы
*/

const mixed = [1, 'aaa', false, null, [], []]

// console.log(mixed, 'mixed');

const team_1 = ['A', 'B', 'C', 'D'];
const team_2 = ['P', 'I', 'H', 'G'];
/// 2 x 4
const teams = [
    team_1,
    team_2
];

console.log(teams, 'teams');

const player_2_1 = teams[1][2]; // []

console.log(player_2_1)
/*

 [
  0 [0 , 1 , 2 ]
  1 [0 , 1 , 2 ]
 ]
 */

for (let i = 0; i < teams.length ; i++) {
    console.log(teams[i], i, 'team');

    for (let j = 0; j < teams[i].length; j++) {
        console.log(teams[i][j], 'player');
    }

}
// -----

const row = 4;
const col = 4;

const mass4 = new Array(row);

console.log(mass4, 'mass4');
console.log(mass4.length, ' mass4.length');

// ---------
for (let i = 0; i < mass4.length; i++) {
    mass4[i] = new Array(col)

    for (let j = 0; j < mass4[i].length; j++) {
        mass4[i][j] = Math.round(Math.random() * 20);
    }
}

// ---------
console.log(mass4, 'mass4');