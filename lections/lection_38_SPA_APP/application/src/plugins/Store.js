import Observer from "@/plugins/Observer";
import PubSub from "@/plugins/PubSub";

export default class Store {
  state = null;
  mutations = null;
  #pubSub = null;

  constructor({ state, mutations }) { // { state: { ... }, mutation: { CHANGE_NOTIFY_CONFIG: func(){}, fn2, ... ,  ... fn}
    this.state = state
    this.mutations = mutations;
  }

  onInit() {
    console.log('on init')
    this.#pubSub = new PubSub()
  }


  dispatch(event, payload) { // MUTATION_TYPE = 'CHANGE_NOTIFY_CONFIG'
    // 1.
    const fn = this.mutations[event];

    if (typeof fn === 'function') {
      fn.call(this.mutations,  this.state, payload)
    }

    this.#pubSub.broadcast(event, payload)

  }

  subscribe(event, fn){
    console.log(event, 'pybsub');
    this.#pubSub.subscribe(event, fn);
  }

}