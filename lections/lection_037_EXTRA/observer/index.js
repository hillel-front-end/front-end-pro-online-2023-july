// import Viber from "./social/viber.js";
// import Telegram from "./social/tg.js";
// import Email from "./social/email.js";

// const socials = {
//   viber: new Viber(),
//   telegram: new Telegram(),
//   email: new Email(),
// };

// ---> Example backend logic
// import "./social/viber.js";
// import "./social/tg.js";
// import "./social/email.js";
// import "./social/facebook.js";
// import "./social/twiter.js";

// ---> Example front end logic
import "./page-parts/block-1.js";
import "./page-parts/block-2.js";
import "./page-parts/block-3.js";

import observer from "./observer.js";

class StoreCollection extends Array {
  constructor(...items) {
    super(...items);
  }

  add(item) {
    super.push(item);
    this.broadcast(item);
  }

  splice(index, count) {
    super.splice(index, count);
  }

  broadcast(newItem) {
    // --> back end
    // socials.viber.send(newItem);
    // socials.telegram.send(newItem, '123213');
    // socials.email.send(newItem);

    // --> front end

    // document.querySelector(".block-1").innerHTML =
    //   renderTemplateBlock1(newItem);
    // document.querySelector(".block-2").innerHTML =
    //   renderTemplateBlock2(newItem);
    // document.querySelector(".block-3").innerHTML =
    //   renderTemplateBlock3(newItem);

    observer.broadcast(newItem);
  }
}

const collection = new StoreCollection(
  { title: "Harry Potter", price: 22, type: "book" },
  { title: "Star Wars", price: 6, type: "CD" },
  { title: "Avatar", price: 16, type: "CD" },
  { title: "Dell", price: 8, type: "laptop" }
);

function onClickHandler() {
  collection.add({
    title: "macbook",
    price: 3000,
    type: "laptop",
  });
}

document.querySelector("button").addEventListener("click", onClickHandler);

function onInputHandler() {
  observer.broadcast(this.value);
}

document
  .querySelector(".reactive-field")
  .addEventListener("input", onInputHandler);
