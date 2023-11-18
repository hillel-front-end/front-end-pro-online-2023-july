import Sender from "./sender.js";
import observer from "../observer.js";

class Email extends Sender {
  constructor() {
    super();
    observer.subscribe(this.send);
    console.log("--connect to email sender ---");
  }

  send(newItem) {
    // if (newItem.type == 'loptop') ....
    // ....
    console.log("---some specific sender to Email ----", newItem);
  }
}

new Email();
