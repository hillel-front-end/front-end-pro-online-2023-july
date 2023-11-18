import Sender from "./sender.js";
import observer from "../observer.js";

class Telegram extends Sender {
  constructor() {
    super();
    observer.subscribe(this.send);
    console.log("--connect to Telegram sender ---");
  }

  send(newItem, token) {
    console.log("---some specific sender to Telegram ----", newItem);
  }
}

new Telegram();