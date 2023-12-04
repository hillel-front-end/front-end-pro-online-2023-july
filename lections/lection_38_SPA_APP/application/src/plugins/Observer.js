export default class Observer {
  observers = [];
  // observers = [fn, fn, fn];

  subscribe(fn) {
    if (typeof fn === "function") {
      this.observers.push(fn);
    }
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((currFn) => currFn != fn);
  }

  broadcast(data) {
    this.observers.forEach((fn) => fn(data));
  }
}


