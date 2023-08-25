// ------- accessor properties (getter, setter) --------
const person = {
  firstName: "Valera",
  lastName: "Ternavsky",
  // getFullName() {
  //   return this.firstName + " " + this.lastName;
  // },

  // --> getter -> computed
  get fullName() {
    console.log("--calll getter ---");

    if (this.firstName && this.lastName) {
      return this.firstName + " " + this.lastName;
    }

    return "anonym";
  },

  // --> setter ->
  set fullName(value) {
    console.log(value, "value");
    if (typeof value === "string" && value.length > 10) {
      // -- security write ---
      const splitedFullName = value.split(" ");

      console.log(splitedFullName, "splitedFullName");
      this.firstName = splitedFullName[0];
      this.lastName = splitedFullName[1];
    }
  },
};

// const fullName = person.getFullName();

console.log(person.firstName, "fullName");

console.log(person.fullName, "fullName");
console.log(person, "person");

person.firstName = "Alex";

/// ----> read
console.log(person.fullName, "fullName"); // call getter get fullName() {}

// ----write

person.fullName = "Pety Petrov";

console.log(person, "person");

for (let key in person) {
  console.log(person[key], "key");
}

// --------------------

const rectangle = {
  top: 100,
  left: 300,
  right: 500,
  bottom: 250,
  get width() {
    console.log("---calculate width---");
    return this.right - this.left;
  },
  get height() {
    console.log("---calculate height---");
    return this.bottom - this.top;
  },

  get area() {
    console.log("---calculate area---");
    return this.width * this.height;
  },
};

// console.log(rectangle.width, "width");
// console.log(rectangle.height, "height");

// rectangle.bottom = 500;

// console.log(rectangle.height, "height");

// console.log(rectangle.area, "area");

// ----- Proxy ----

const database = [
  {
    title: "cola",
    price: "12.22$",
    isAvailable: true,
  },
  {
    title: "pepsi",
    price: "13.22$",
    isAvailable: false,
  },
];

const store = {
  get availableProducts() {
    return database.filter((product) => product.isAvailable);
  },

  sort() {
    // return this.availableProducts.sort(..)
  },
};

// ----- side effect ----

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

const shape = {
  coords: {
    left: 100,
    right: 200,
    top: 100,
    bottom: 200,
  },

  calc() {
    // heavy calculate
    return Object.values(this.coords).reduce(
      (accum, current) => accum + current,
      0
    );
  },

  get peremiter() {
    // ------->> Fix  <<----------

    // ------->> Fix  <<----------
    const total = this.calc();

    // ---> side effect << -----
    history.records.push({
      totalPerimeter: total,
      coords: Object.assign({}, this.coords),
    });

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

console.log(shape.peremiter, "per");
console.log(shape.peremiter, "per");
console.log(shape.peremiter, "per");

shape.coords.right = 500;
shape.coords.left = 300;
console.log(shape.peremiter, "per");

history.print();


// -------------------------------------------


