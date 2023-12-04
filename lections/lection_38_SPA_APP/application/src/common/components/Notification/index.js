import './notification.scss'
import Queue from "@/plugins/Queue";
import Component from "@/plugins/Component";
import {mutation_types, store} from "@/store";

export default class Notification extends Component{
  #mls = null;
  #notificationNode = null;
  #queue = null;

  constructor(props) {
    super(props);


    this.#queue = new Queue(this.updateNotification.bind(this));
    store.subscribe(mutation_types.CHANGE_NOTIFY_CONFIG, (payload) => {
      this.addMessage(payload)
    })
  }

  updateNotification(config) {
    this.#show(config);

    setTimeout(() => {
      this.#hide(config.type);
      this.#queue.next();
    }, 5000);
  }

  addMessage(config) {
    if (config.type && config.message) {
      this.#queue.enqueue(config);
    }
  }

  // notification fade => notification success => notification info fade => alert fade

  #show(config) { // { message: '', type: 'error' }
    this.#notificationNode.classList.add('alert-' + config.type);
    this.#notificationNode.innerText = config.message;
    this.#notificationNode.classList.remove("fade");
  }

  #hide(type) {
    this.#notificationNode.classList.add("fade");
    this.#notificationNode.innerText = "";
    this.#notificationNode.classList.remove('alert-' + type);
  }



  render() {
    this.#notificationNode = document.createElement("div");
    this.#notificationNode.classList.add("notification", "alert", "fade");

    return this.#notificationNode;
  }
}