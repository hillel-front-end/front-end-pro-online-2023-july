import Sender from "./sender.js";
import observer from "../observer.js";

class Twitter extends Sender {
  constructor() {
    super();
    observer.subscribe((...arg) => this.send(...arg));
  }

  send(newPost) {
    console.log("Sending to Twitter", newPost);
  }
}

new Twitter();
