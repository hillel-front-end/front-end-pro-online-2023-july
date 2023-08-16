// "use strict";

// declaration();

/*


 1. Hoisting (local, global)
 2. Lexical Environment
 3. Scope
 4. Closure
 5. Bind + Problems solution


*/
// global window
// var, function declaration() { }

// new  -- > let, const
//
// function foo() {
//     // local
//  console.log(this.a = 12);
//
//     function foo1() {
//         // local
//     }
// }
//
//
// // -----------
// foo(); // this === window
// // -----------
// 'use strict'
// foo(); // this === undefined
// // -----------
// const obj = {};
// obj.foo = foo;
// obj.foo(); // this === obj
// // -----------
// foo.call(obj)
// foo.apply(obj)
// // ------------


// --------- Hoisting ---------

// -------- old start -----------
/*
 a = undefined;
 expression = undefined;
 function declaration() {
    console.log(123);
 }

 */


console.log(a, 'a');
console.log(expression, 'expression');
console.log(declaration, 'declaration');

 a = a + 2 // undefined + 2

console.log(a, 'a');
// declaration();
// expression();

var a  = 12;
var expression = function () {}

function declaration() {
    console.log('---call function declaration ---');
}

// --- new start let, const ---

// console.log(a1, 'a1');
// console.log(expression2, 'expression2');

declaration2();
// ----- dead zone -----

let a1 = 13;
const expression2 = function () {}

function declaration2() {
    console.log('---call function declaration ---');
}

// ------------
// global scope

function foo() {
    localFn();

    // local scope
    // localA = undefined;
    console.log(localA, 'localA');
    // console.log(localA4, 'localA4');

    var localA = 12;

    //---dead zone Foo ---
    let localA2 = 13;
    const localA3 = 14;
    let localA4;

    console.log(localA4, 'localA4')

    function localFn() {
        console.log('---local FN ---')
    }
}

// console.log(localA, 'localA'); error
foo();

// console.log(localA, 'localA'); error

// ------------------ Lexical Environment(environmentRecord) -----------

var a5 = 'global variable';
// var a4 = 'global A4';

function somethingToDo() {
    /*
       LE.SomethingToDo = { a5: undefined, scope: window }
    */


    var a5 = 12;
    let a6L = 13;
    const a7L = 14;
    function a8(){}

    // read
    console.log(a5, 'a5');
    // console.log(a4, 'a4');

    /*
     LE.SomethingToDo = { a5: 12, a6L: 13, a7L: 14, a8: fn(){}, scope: GlobalScope }
     */

     // write
     a4 = 13; //GLOBALSCOPE.a4 = 13;
     a6L = 15;

    /*
    LE.SomethingToDo = { a5: 12, a6L: 15, a7L: 14, a8: fn(){}, scope: GlobalScope }
    */

 /*
     LE.SomethingToDo = { a5: 12, a6L: 13, a7L: 14, a8: fn(){}, scope: GlobalScope }
 */

    // LE.SomethingToDo = null
}

/*
function somethingToDo() {
    [[SCOPE]] -> window
}

 */
// console.log(a4, '----> a4');

somethingToDo(); // global var,

console.log(a4, 'a4');

// -----------

const o = 'var O from Global Scope';

// function p1() {
//     // LE.P1 = { scope: GLOBAl}
//
//     console.log(o, '0')
// }

function p2() {
      const o = 'var O from LE.P2';

    //LE.P2 = { O: '..', p1: fn(){},  scope: Global }

    function p1() {
        // let o = 13;
        // LE.P1 = { scope: LE.P2 }

        console.log(o, '0')
    }

    p1();
}


p2();


//---------------- Borrowing  --- Context ---------------

function toDo() {


    const arr = [];
    // const arr2 = arr.slice();

    const slice = arr.slice;

    // arguments.slice = slice;

    // console.log(arguments.slice(1), 'arg');

    // const array = slice.call(arguments);

    const array = [].slice.call(arguments);

    console.log(array, 'array');

    array.forEach(function (item) {
        console.log(item, 'item');
    })

}

toDo('arg1', 'arg2');