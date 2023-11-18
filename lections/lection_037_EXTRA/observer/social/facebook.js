import Sender from "./sender.js";
import observer from "../observer.js";

class Facebook extends Sender {
  url = "https://api.facebook/push";
  method = "post";

  constructor() {
    super();

    observer.subscribe(this.send.bind(this)); //
    console.log("--connect to Facebook sender ---");
  }

  send(newItem) {
    console.log("---some specific facebook to Viber ----", newItem);
    console.log(`sending ${this.url} ${this.method}`);
  }


  // more methods
}

new Facebook();
