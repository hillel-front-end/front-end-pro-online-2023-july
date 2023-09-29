/*
class Name {

}
*/
class HTMLElement {
  constructor(className, id) {
    console.log("---- HTMLElement constructor ----", this);
    this.className = className;
    this.id = id;
  }

  render() {
    console.log("Tag rendered from HTMLElement.prototype", this);
  }

  rotate() {
    console.log("Common rotate", this);
  }
}

class AnchorElement extends HTMLElement {
  #dataset = 12;

  #privateMehod() {}

  onClick = () => {
    console.log("---click-----", this);
  };

  //   onSubmit = function() {}

  constructor(href, className, id, flag = false) {
    // console.log("---- AnchorElement, constructor ----", this);

    super(className, id); // call parent constructor
    this.href = href;

    this.#dataset = 13; // rewrite private inside class

    if (flag) {
      this.redirect = function () {
        console.log("---special redirect---", this);
      };
    }
  }

  /// --> access to private
  get dataset() {
    return this.#dataset;
  }

  set dataset(v) {
    if (!v && v > 0 && v < 5) {
      this.#dataset = v;
    }
  }

  redirect() {
    console.log("rendireting....", this.#dataset);
  }
}

const link = new AnchorElement(
  "https://rogaTakopita.com",
  "link-className",
  "link-id",
  false
);

console.log(link, "link");
// link.redirect();//

// console.log(link.dataset, 'd')

link.redirect();

// link.#privateMethod(); error

// link.#dataset = 'aaaa';

// link.dataset = 13;
// console.log(link.dataset, "dataset");

// setTimeout(link.onClick, 1000);
// setTimeout(() => link.redirect(), 1000);
// setTimeout(link.redirect.bind(link), 1000);

// function setTimeout(cb) { // cb = link.redirect
//     cb();
// }
