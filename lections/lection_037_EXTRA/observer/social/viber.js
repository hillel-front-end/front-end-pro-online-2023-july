import Sender from "./sender.js";
import observer from "../observer.js";

class Viber extends Sender {
  url = "https://api.viber/push";
  method = "post";

  constructor() {
    super();

    observer.subscribe(this.send.bind(this)); //
    console.log("--connect to Viber sender ---");
  }

  send(newItem) {
    console.log("---some specific sender to Viber ----", newItem);
    console.log(`sending ${this.url} ${this.method}`);
  }
}

new Viber();
