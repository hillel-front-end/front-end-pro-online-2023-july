/* Decomposition min, max
   Scope Intro
   HOF:
      * callback(s), ex.: doFunction, compose
      * return function, decorator
   IIFE (Immediately Invoked Function Expression)
   Arrow Function
*/



/// ----------- Scope Intro -----------------------

const outer = 'outer var';



function foo(arg) {
    const local = 'local var';
    var local2 = 'local var 2';
    let local3 = 'local var 3';

    loca4 = 'local4';

    console.log(outer, 'outer');
}

foo('params');



// console.log(local, 'local');
// console.log(local2, 'local2');
// console.log(local3, 'local3');
// console.log(arg, 'arg');

// console.log(loca4, 'local4');



// ----------- HOF (Higher-Order Function) ---------



const toDo = function() {
    console.log('----toDo----');
}


// const arg = toDo;
//
//
// arg();
// arg();
// arg();

// ---- callback

function callMe(callback) {
    console.log(callback(), 'arg');

}

callMe(toDo)

const mul = function (a, b) {
    return a + b;
};

const div = function (a, b) {
    return a / b;
};

const sum = function (a, b) {
    return a + b;
};

function doMath(a, b, action) {
    // console.log(a, 'a');
    // console.log(b, 'b');
    // console.log(action, 'action');

    let result;

    if (typeof action === 'function') {
        result = action(a, b);
    }

    // const result = action(a, b);

    console.log(result, 'result');
}
// console.log('-------------')
//
// doMath(10, 5, sum)// action = sum
// console.log('-------------')
// doMath(15, 3, div)// action = div


function anotherTodo() {
    function nestedFunc() {
        console.log('--- nested Func ---')
    }


    return nestedFunc;
}

fn = anotherTodo();

// console.log(fn, 'fn');
fn();


// --------------------- -------------




// logger('Response from server');
// loggerError('call Todo function');


function loggerDecorator(loggerFn) {

    function logWithTime(message) {
        loggerFn(message)
        console.log(new Date().toLocaleString())
    }


    return logWithTime;
}

console.log('---- decorators ----');

// loggerDecorator(logger, 'Some message');
// loggerDecorator(logger, 'Some another message');
// loggerDecorator(loggerError, 'Some error message');
const logger = function (message) {
    console.log(message, '-- logger ---');
};

const loggerError = function (message) {
    console.error(message, '---error logger-');
};


const loggerWithTime = loggerDecorator(logger)
;const loggerErrorWithTime = loggerDecorator(loggerError);
//
loggerWithTime('Some message');
loggerWithTime('Some another message');

logger('Some message')

loggerErrorWithTime('Some error message');
//
loggerErrorWithTime('aaaaaa');

// ----------


// function sumArray(array) {
//     let sum = 0;
//
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//
//     return sum;
// }
//
//
// function sumOfArrayPlusTen(funcSum, array) {
//     const sum = funcSum(array);
//
//    return sum + 10;
// }
//
// sumOfArrayPlusTen(sumArray, [1, 2, 3, 5])
//
// const s = sumArray([1, 2, 3, 5]);
// console.log(s ,' s');