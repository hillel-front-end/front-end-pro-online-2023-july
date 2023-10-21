//  -------- FIFO ---
class Queue {
  #queue = [];
  #generator = null;
  #inProgress = false;
  #cb = null;

  constructor(cb) {
    if (typeof cb === "function") {
      this.#cb = cb;
    }
  }

  isEmpty() {
    //bool
    return this.#queue.length === 0;
  }

  dequeue() {
    return this.#queue.shift();
  }

  enqueue(task) {
    console.log("---- add task to queue ----", task);

    this.#queue.push(task);

    console.log("---- show all task queue ----", this.#queue);

    if (!this.#inProgress) {
      this.#start();
    }
  }

  next() {
    return this.#generator.next();
  }

  #start() {
    console.log("---- call start ----");
    this.#inProgress = true;
    this.#generator = this.#process();
    this.next();
  }

  #finish() {
    console.log("---- call finish ----");

    this.#inProgress = false;
    this.#generator = null;
  }

  *#process() {
    console.log("---- start process ----");

    while (!this.isEmpty()) {
      const task = this.dequeue(); // { type: .., message: ... }
      task.message += " " + this.#queue.length;
      console.log("---- dequeue task ==>  ----", task);
      this.#cb(task);
      console.log("---- task list ==>  ----", this.#queue);
      yield;
    }

    this.#finish();
  }
}

class Alert {
  #mls = null;
  #alertNode = null;
  #queue = null;

  constructor({ mls = 2000 }) {
    this.#mls = mls;
    this.#queue = new Queue(this.updateALert.bind(this));
  }

  updateALert(config) {
    this.#show(config);

    setTimeout(() => {
      this.#hide(config.type);
      this.#queue.next();
    }, this.#mls);
  }

  addMessage(config) {
    if (config.type && config.message) {
      this.#queue.enqueue(config);
    }
  }

  // alert fade => alert success => alert info fade => aler fade

  #show(config) {
    this.#alertNode.classList.add(config.type);
    this.#alertNode.innerText = config.message;
    this.#alertNode.classList.remove("fade");
  }

  #hide(type) {
    this.#alertNode.classList.add("fade");
    this.#alertNode.innerText = "";
    this.#alertNode.classList.remove(type);
  }

  render() {
    this.#alertNode = document.createElement("div");
    this.#alertNode.classList.add("alert", "fade");

    document.body.append(this.#alertNode);
  }
}

function main() {
  const input = document.querySelector('input[type="text"]');
  // const radioTypeAlert = document.querySelector('input[type="radio"]:checked');
  const alert = new Alert({ mls: 5000 });
  alert.render();

  function onSubmitHandler(event) {
    event.preventDefault();
    const type = document.querySelector('input[type="radio"]:checked').value;

    // alert.updateALert({ type, message: input.value });
    alert.addMessage({ type, message: input.value });
  }

  document.querySelector("form").addEventListener("submit", onSubmitHandler);
}

window.onload = main;
