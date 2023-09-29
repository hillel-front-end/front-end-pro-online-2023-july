function HTMLElement(className, id) {
  console.log("---call HTMLElement ---", this);
  this.className = className;
  this.id = id;
}

HTMLElement.prototype.render = function () {
  console.log("Tag rendered from HTMLElement.prototype", this);
};

HTMLElement.prototype.rotate = function () {
  console.log("Common rotate", this);
};

const mySuper = (context, parentCnstr, args) => {
  parentCnstr.apply(context, args);
};

function IMGElement(src, ...args) {
  mySuper(this, HTMLElement, args);
  this.src = src;
}

IMGElement.prototype = Object.create(HTMLElement.prototype);

IMGElement.prototype.showPicture = function () {
  console.log("show picture", this.src);
};

function AnchorElement(href, className, id, flag = false) {
  mySuper(this, HTMLElement, [className, id]); // ==>  HTMLElement.apply(this, args);
  this.href = href;

  if (flag) {
    this.redirect = function () {
      console.log("---special redirect---");
    };
  }
}

// AnchorElement.prototype.__proto__ = HTMLElement.prototype;
AnchorElement.prototype = Object.create(HTMLElement.prototype);

AnchorElement.prototype.redirect = function () {
  console.log("rendireting....", this.href);
};

AnchorElement.prototype.rotate = function () {
  console.log("--- special for Anhors-----");
};

const link = new AnchorElement(
  "https://rogaTakopita.com",
  "link-className",
  "link-id"
);
const link2 = new AnchorElement("https://frizbiz.com", "link", "link", true);

const img = new IMGElement("./assets/img/picture.jpg", "picture", "logo");

// console.log(link, "link");
// console.log(AnchorElement.prototype, "AnchorElement.prototype");
// console.log(HTMLElement.prototype, "HTMLElement.prototype");

// console.log(link2, "link2");
// console.log(img, "img");

// link.redirect();
// link2.redirect();
// img.showPicture();
// --------------------

// link.render();
// link.redirect();
// link2.redirect();

// link.rotate();
// link2.rotate();

// img.rotate();

// link.render();
// img.render();

console.log(link, "link");
console.log(link.hasOwnProperty);

// link.foo();

// HTMLElement.prototype = new Object();

console.log(HTMLElement.prototype.__proto__, "HTMLElement.prototype");
console.log(Object.prototype, "Object.prototype");

console.log(HTMLElement.prototype.__proto__ === Object.prototype);

// const object = new Object();

// console.log(object, "object");
// link.hasOwnProperty();

// --------------------------

function Session(theme, userName, expDate) {
  if (!Session.instance) {
    Session.instance = this;

    this.theme = theme;
    this.userName = userName;
    this.expDate = expDate;
  }

  return Session.instance;
}

const session = new Session("dark", "Valera", Date.now());

const session2 = new Session();

console.log(session, "session");

console.log(session2, "session2");
// -------- pattern Singletone ----

// --------------- encapsulation -------------------

function HTMLCanvas(coordX, coordY) {
  this.coordX = coordX; // public
  this.coordY = coordY; // public

  const _COORD_K = 4.14; // private

  // this.getCoordK = function () {
  //   return _COORD_K;
  // };

  // this.setCoordK = function (v) {
  //   if (!v && v > 0 && v < 5) {
  //     _COORD_K = v;
  //   }
  // };

  Object.defineProperty(this, "coordK", {
    get() {
      return _COORD_K;
    },
  });
}

HTMLCanvas.prototype.calculate = function () {
  return Math.round(this.coordX * this.coordY * this.coordK);
};

const canvas = new HTMLCanvas(100, 200);

console.log(canvas, "coordK  ");

canvas.coordX = 500;

// console.log(canvas.getCoordK(), "canvas");

let a = canvas.calculate();

console.log(a, "a");


// function Slider() {

// }

// const slider = new Slider()

// slider.render()


// --------------------------------


