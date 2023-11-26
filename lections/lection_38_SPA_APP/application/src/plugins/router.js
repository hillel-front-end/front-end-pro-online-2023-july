export default class Router {
  #routes = [];
  #guardBefore = null;

  constructor(routes) {
    this.#routes = routes;
  }

  onInit() {
    console.log('----onInit----');
    const original = window.history.pushState;
    window.history.pushState = this.#pushState.bind(this, original)
    window.onpopstate = ({ state = {} }) => this.#onUpdate(state?.pathTo);// toDo: refactoring!
    document.addEventListener('click', this.#onClickHandler.bind(this))
    window.history.pushState({}, '', location.pathname);
    console.log(location.pathname)
  }

  setGuardBefore(cb) {
    if (!cb) return null;


    this.#guardBefore = cb;
  }


  #pushState(original, state, title, pathTo) {
    console.log('----My pushState----');

    if (!pathTo) return;
    // before
    const pathFrom = location.pathname;

    const next = (redirect = pathTo) => {
      original.apply(history, [{ ...state, path: pathTo }, title, redirect]);
      this.#onUpdate(redirect);
    };

    if (typeof this.#guardBefore === 'function') {
      this.#guardBefore(pathTo, pathFrom, next)
    } else {
      next();
    }
  }

  #onUpdate(path = location.pathname) {
    const route = this.#findRoute(path) || this.#findRoute('*'); // toDo: refactoring
    this.#updateView(route.component);
  }

  #onClickHandler(event) {
    event.preventDefault();
    const node = event.target;

    if (node.dataset.routerLink) { // behaviour
      window.history.pushState({}, '', node.dataset.routerLink)
    }
  }

  #findRoute(path) {
    if (!path) return null;
    return this.#routes.find(route => route.path === path);
  }

  #updateView(Component) {
    document.querySelector('.router-view').innerHTML = new Component().render()
  }
}