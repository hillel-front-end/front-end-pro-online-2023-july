export default class PubSub {
  subscribers = {};

  // subscribers = {
  //   CHANGE_NOTIFY_CONFIG: [fn, fn, fn, fn],
  //   CHANGE_USER_INFO: [fn, fn, fn]
  // };

  subscribe(event, fn) { // event = 'CHANGE_NOTIFY_CONFIG'
    const HAVE_SUBSCRIBERS_BY_EVENT = this.subscribers[event];

    if (HAVE_SUBSCRIBERS_BY_EVENT) {
      this.subscribers[event].push(fn)
    } else {
      this.subscribers[event] = [fn]
    }

  }

  broadcast(event, data) {
    const listeners = this.subscribers[event]; // [fn, fn]

    if (Array.isArray(listeners)) {
      listeners.forEach((fn) => fn(data));
    }
  }
}


