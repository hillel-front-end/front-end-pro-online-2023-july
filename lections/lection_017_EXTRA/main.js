// ---> rest - spread

function toDoSomething() {
  return {
    a: 1,
    b: 2,
    c: 3,
  };
}

const obj = {
  a: 1,
  b: 2,
  c: 3,
  g: [],
  todo() {},
};

// const obj2 = Object.assign({}, obj);
// obj.c = 'aaa';

//-------------------
const obj2 = {
  ...obj,
  c: "valera",
};

// console.log(obj, "obj");
// console.log(obj2, "obj2");

//

const arr = [1, 2, 3];
const arr2 = [0, ...arr, 4];

console.log(arr2, "arr2");

function toDoSomething(arg1, arg2, ...args) {
  console.log(args, "args");
  console.log(arg1, arg2, "arg1, arg2,");

  return {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    arr: [],
  };
}

const { a, b } = toDoSomething(1, 2, 3, 4);

// console.log(a, b, "a, b");
// console.log(valera, "valera");

// ------------------------------------------------

const history = {
  records: [],
  print() {
    document.write("<ul>");
    document.write(
      this.records
        .map(
          (record) =>
            "<li>" +
            record.totalPerimeter +
            " " +
            JSON.stringify(record.coords) +
            "</li>"
        )
        .join(" ")
    );
    document.write("</ul>");
  },
};

const useMemo = (cb) => {
  const cache = {};

  return (...arg) => {
    const key = JSON.stringify(arg);

    if (cache[key]) {
      console.log("from cache");
      return { result: cache[key], cached: true };
    }

    console.log("calc");
    const result = cb(...arg);
    cache[key] = result;

    return { result, cached: false };
  };
};

const shape = {
  coords: {
    left: 100,
    right: 200,
    top: 100,
    bottom: 200,
  },

  calc: useMemo((coords) => {
    return Object.values(coords).reduce((accum, current) => accum + current, 0);
  }),

  get peremiter() {
    const { result: total, cached } = this.calc(this.coords);

    // ---> side effect << -----

    if (!cached) {
      history.records.push({
        totalPerimeter: total,
        coords: Object.assign({}, this.coords),
      });
    }

    return total;
  },

  set peremiter(value) {
    const COUNT__SIDES = 4;
    const oneSide = Math.round(value / COUNT__SIDES);

    this.coords = {
      left: oneSide,
      right: oneSide,
      top: oneSide,
      bottom: oneSide,
    };
  },
};

// console.log(shape.peremiter, "per");
// console.log(shape.peremiter, "per");
// console.log(shape.peremiter, "per");

// console.log(shape.calc);

// shape.coords.right = 500;
// shape.coords.left = 300;

// console.log(shape.peremiter, "per");

// history.print();

// -------------------------------------------
