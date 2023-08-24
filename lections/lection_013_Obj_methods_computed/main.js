/*
  chains __proto__, hasOwnProperty vs in, Obj.create()
  assignObject , .keys, values, entries,  freeze, seal
  computed: gaccessor properties + examples

 */

// __proto__

const nestedObject = {
  h: '2222',
  run: function () {
    console.log('---running---');
  }
}

const obj = {
  a: 12,
  'SOME_KEY': 13,
  __proto__: nestedObject // [[Prototype]]
};

// console.log(obj, 'obj')
// console.log(obj.h, 'h');
// obj.run();


// -------------

const Modal = {
  open: function () {
    console.log('---open modal ---', this)
  },
  close: function () {
    console.log('---modal close ---', this)
  }
}

let SignInModal = {
  send() {
    console.log('---send credential -----');
  }
};

const GalleyModal = {
  nextPicture: function () {
    console.log('---next picture --');
  },
  previousPicture() {
    console.log('---previous picture --');
  }
}

SignInModal.__proto__ = Modal;
GalleyModal.__proto__ = Modal;

const obj2 = Object.create(Modal);
// { __proto__: Modal }
console.log(obj2, 'obj2');


// function makeObjectChain(parent, child) {
//   const obj = Object.create(parent);
//   const result = Object.assign(
//       obj,
//       child
//   );
//
//   return result;
// }
//
// SignInModal = makeObjectChain(Modal, SignInModal);
//
// console.log(SignInModal, 'SignInModal');


// GalleyModal.open();
// GalleyModal.nextPicture();
// GalleyModal.nextPicture();
//
//
// SignInModal.open();
// SignInModal.send()
// SignInModal.close()

//

// ------ Object.assign()--------

const obj3 = { foo: 12 };
const obj4 = { l: false };
const obj5 = { p: 'jjjj'}

result = Object.assign(obj3, obj4, obj5);


console.log(result, 'result');

// -------------- in vs hasOwnProperty --------
const hasKey = 'nextPicture' in GalleyModal;

console.log(GalleyModal, 'GalleyModal');
console.log('nextPicture' in GalleyModal, 'has nextPicture');
console.log('close' in GalleyModal, 'has close');
console.log(Boolean(GalleyModal['nextPicture']))
console.log(Boolean(GalleyModal.nextPicture))
// console.log(GalleyModal);

for(let key in GalleyModal) {
  if (GalleyModal.hasOwnProperty(key))  {
    console.log(key, 'key');
    console.log(GalleyModal[key])
  }
}

// ---------------- freeze, seal ----------------

// Object.freeze({prop: value})
// const obj6 = Object.freeze({
//   a: 1,
//   b: 2,
//   c: Object.freeze({
//     a2: 13
//   })
// });

const obj6 = Object.seal({
  a: 1,
  b: 2,
  c: Object.seal({
    a2: 13
  })
});

// obj6 = {} // error

// modify
obj6.a = 2;
// remove
delete obj6.a;
// add
obj6.h = 1111;
// obj6.c.a2 = 14
console.log(obj6, 'obj6');



// ------------ computed ------------


const person = {
  firstName: 'Valera',
  lastName: 'Ternavsky',
  getFullName() {
      return this.firstName + ' ' + this.lastName;
  },
  fullName() {}
}

// const fullName = person.getFullName();
// const fullName = person.fullName;

console.log(person.firstName, 'fullName');