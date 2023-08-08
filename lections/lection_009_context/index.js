//--------------


// 1 - варіант
// function getFullName(obj) {
//     return obj.firstName + ' ' + obj.lastName;
// }
//
// const person  = {
//     firstName: 'Valera',
//     lastName: 'Ternavsky'
// }
//
// const person2  = {
//     firstName: 'Pety',
//     lastName: 'Ivanov',
//
// }


// console.log(getFullName(person));
//
// console.log(getFullName(person2));

// 2 - варіант


/*!!!!!!!!!!
   **** call As Method  ( this === до точки ==> expression,  declaration)
   object.method() ==> this === object
*/


function getFullName() {
    // this -- object
    console.log(this, 'this');
    return this.firstName + ' ' + this.lastName;
}

const person  = {
    firstName: 'Valera',
    lastName: 'Ternavsky',
    getFullName: getFullName
}

const person2  = {
    firstName: 'Pety',
    lastName: 'Ivanov',
    getFullName: getFullName
}

//console.log(person.getFullName());
// console.log(person2.getFullName())


const googleMap = {
    x: 100,
    y: 100,
    getMeta: function () {
        console.log(window, 'window');
        return [this.x, this.y];
    }
}


function getCoords() {
    return [this.x, this.y];
}


// googleMap.getCoords = getCoords;
// const coords = googleMap.getCoords();

googleMap.getMeta();


/* !!!!!!!!!!

**** call As function this === window (expression,  declaration)
 func() ==> this === window
**** call As function (with use strict) this === undefined  (expression, declaration)

"use strict"
 func() ==> this === undefined

*/



// ------------------ about window --------------

// ------- make global variable  with recording in window  (old standart)

// var x = 12;
// var y = 13;
// function globalFunction() {}
// var expression = function(){}

// console.log(window.x, window.y, window.globalFunction);


// ---------- make global variable without recording in window variable (new standart)

// without recording in window
// let x1 = 14;
// const x2 = 15;
// const toDo2 = function() {}

// "use strict"
// console.log(getCoords());
// console.log(window.x, window.y, 'window')


// console.log(window.getMeta);
// console.log(window.getCoords)
// console.log(getCoords, 'getCoords');
// console.log(window.navigator)

// -------------------- call apply -------------



const person3 = {
    firstName: 'Valera',
    lastName: 'Ternavsky',
}

const person4 = {
    firstName: 'AAAAA',
    lastName: 'BBBBB',
}

// person3.getFullName = getFullName;
//
// person3.getFullName('&');
//
// delete person3.getFullName;

console.log(person3, 'person3');
/**
   func.call(context, arg1, arg2, ... , argN )
  func.apply(context, [arg1, arg2, ... , argN])

 **/
console.log('without call method')
getFullName();

function getFullName(separator) {
    console.log(arguments, 'arguments');
    console.log(this, 'this');
    console.log(separator, 'separator');


    separator = separator || ' ';

    return this.firstName + separator + this.lastName;
}


console.log('with call method');
// getFullName.call(person3, 'arg1', 'arg2', 'arg3'); // person3.getFullName('arg1', 'arg2', 'arg3)

// getFullName.call(person4); /// person4.getFullName()

const args = ['arg1', 'arg2', 'arg3']

getFullName.apply(person3, args); // person3.getFullName('arg1', 'arg2', 'arg3')
//
// getFullName.apply(person4); /// person4.getFullName()


const obj = {
    a: 'aaa',
    b: 'bbb',
    toDo: function () {
        console.log(this.a, 'a');
        console.log(this.b, 'b');
    }
}

const obj2 = {
    a: 'hhhh',
    b: 'oooo'
};
// --------
obj.toDo();

/*
    obj2.toDo = obj.toDo ;
    obj2.toDo();
    delete obj2.toDo;

 */


obj.toDo.call(obj2); // this ==> obj2