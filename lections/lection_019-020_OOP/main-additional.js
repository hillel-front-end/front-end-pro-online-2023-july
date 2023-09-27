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

link.foo();

// HTMLElement.prototype = new Object();

console.log(HTMLElement.prototype.__proto__, "HTMLElement.prototype");
console.log(Object.prototype, "Object.prototype");

console.log(HTMLElement.prototype.__proto__ === Object.prototype);

// const object = new Object();

// console.log(object, "object");
// link.hasOwnProperty();
