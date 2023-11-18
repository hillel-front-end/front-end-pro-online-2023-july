class Observer {
  observers = [];

  subscribe(fn) {
    if (typeof fn === "function") {
      console.log("add subscriber", fn);
      this.observers.push(fn);
    }
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((currFn) => currFn != fn);
  }

  broadcast(data) {
    console.log("starting broadcast", this.observers);
    this.observers.forEach((fn) => fn(data));
  }
}

export default new Observer();
