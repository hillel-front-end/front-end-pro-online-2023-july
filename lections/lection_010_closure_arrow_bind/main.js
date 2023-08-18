/*

    Closure
    Arrow + This
    Bind, Lost this
    Hash table

 */

// LE, Scope, hoisting

// --------- Closure -----------

function sum() {
    // Sum_LE = { a: 1, b: 2 }
    const a = 1;
    const b = 2;

    return function () {
        //console.log(Sum_LE.a, Sum_LE.b}
        console.log(a, b);
    }
}


console.log(sum, 'sum');
const fn = sum();

fn();
fn();
fn();


// ----------

function counter() {
    let count = 0;

    return function () {
        return ++count;
    }
}

const increment = counter();

console.log(increment, 'increment');

let result = increment();
console.log(result, 'result');

result = increment();
console.log(result, 'result');

result = increment();
console.log(result, 'result');

function secondCounter() {
    let count = 0;

    return ++count;
}

let result_2 = secondCounter();
console.log(result_2, 'result_2');

result_2 = secondCounter();
console.log(result_2, 'result_2');

result_2 = secondCounter();
console.log(result_2, 'result_2');

// ----------

function iterator(collection) {

    if (!Array.isArray(collection)) {
        console.warn('Collection is not array');
        return null;
    }

    let current = 0;

    function next() {
        return collection[++current];
    }

    function previous() {
        return collection[--current];
    }

    function hasNext() {
        return current !== collection.length - 1;
    }


    return {
        next: next,
        previous: previous,
        hasNext: hasNext
    };
}

const config = iterator(['pic-1.jpg', 'pic-2.jpg', 'pic-3.jpg', 'pic-4.jpg'])

console.log(config, 'config');

// console.log(config.hasNext());
// console.log(config.next())
// console.log(config.hasNext());
// console.log(config.next());
// console.log(config.hasNext());

while (config.hasNext()) {
    console.log(config.next());
}


// ----------- Arrow -----------

function dec() {
}

const expression = function () {
}

// ---> new

// 1 --> without arguments
// 2 --> without this

const arrow = (a, b) => {
    // console.log(t)
    // console.log(arguments, 'arg');
    console.log(a, b);
};

arrow(1, 2);

const arrow2 = (a, b) => a + b;

const arr = [{a: 12}, {a: 13}];
arr.forEach((item) => console.log(item))

const mass = arr.map(item => item.a);
console.log(mass, 'mass');

const print = (a, b) => console.log(a, 'a');


// ----> 2 arrow -> without this

const toDo = () => {
    console.log(this, 'this');
};

toDo();


const obj = {
    name: 'Valera',
    run: function () {

        const toDo2 = () => {
            console.log(arguments, 'arg');
            console.log(this, 'this toDo2');
        };

        toDo2();
    }
};

const obj2 = {
    name: 'Alex'
};

obj.run(1, 2, 3);

obj.run.call(obj2, 4, 5, 6);

// ---------- Bind ---------

console.log('----------- Bind -------')

const obj3 = {
    name: 'Alex'
};

function foo(arg1, arg2, arg3, arg4) {
    console.log(arguments, 'arg');
    console.log(this, 'this');
    console.log(arg1, 'arg1');
    console.log(arg2, 'arg2');
    console.log(arg3, 'arg3');
    console.log(arg4, 'arg4')
}


// foo.apply(obj3, [1, 2])
// foo.call(obj3, 1, 2)

// fn.bind(context, ar1, arg2);

// foo.call(obj3, 1, 2)
const foo2 = foo.bind(obj3, 1, 2);

// console.log(foo2, 'foo2');
// console.log(foo, 'foo');

// foo2(3, 4);
// console.log('----next call foo2() --')
// foo2('ag1', 'ag2');
// foo2();
// foo2();

console.log('------ My Bind -------');

const object = {
    a: 1,
    b: 1
}


function myBind(context) {
    const selfFn = this;
    const argsMyBind = [].slice.call(arguments, 1);

    return function () {
        const argsWrap = [].slice.call(arguments, 0);
        const combineArgs = argsMyBind.concat(argsWrap);

        return selfFn.apply(context, combineArgs);
    }
}

sum2.myBind = myBind;

function sum2() {
    console.log('--call sum2---', this);
    console.log(arguments, 'arguments');

    return this.a + this.b;
}

// console.log(sum2, 'sum original');
//
// console.dir(sum2, 'sum2');


sum2Cp = sum2.myBind(object, 1, 2, 3, 4); // custom

// result = sum2Cp(5, 6, 7)

// result = sum2Cp('aaaa', 'bbb', 'ccc')

// console.log(sum2Cp, 'sum2Cp from binde');

// sum2.bind(); // original


// result = sum2.call(object);
// console.log(result, 'result');
// console.dir(foo.myBind(obj3, 1, 2), 'foo');


// -------- use case (Lost Context) ---------


const operations = {
    a: 1,
    b: 12,
    sum: function () {
        console.log(this, 'this');
        result = this.a + this.b;

        console.log(result, 'result');
    },
    mul: function () {
        return this.a * this.b;
    }
}


// action = () => {}
// action = action.bind(obj);
// action(); undefined, window

function doFunction(action) {
    console.log(action, 'action');
    result = action();
    console.log(result, 'result');
}

// doFunction(operations.sum.bind(operations));

// doFunction(() => operations.sum())
// doFunction(operations.mul);

// setTimeout(operations.sum.bind(operations), 3000)
// setTimeout(() => operations.sum(), 3000)
// let count = 0;
// setInterval(() => {
//     count++;
//
//     console.log(count, '--count--');
//     operations.sum()
// }, 3000)

// -----------