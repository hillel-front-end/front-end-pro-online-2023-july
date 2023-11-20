export default class Router {
  #routes = [];
  #original

  constructor(routes) {
    this.#routes = routes;

    this.#original = history.pushState;

    history.pushState = (...props) => {
      this.#onPushState(...props)
    };

  }

  #onPushState(...props) {
    this.#original.apply(history, [...props]); // change path

    const route = this.#findRoute(location.pathname);

    if (route) {
      this.#updateView(route.component);
    }
  }

  #findRoute(path) {
    if (!path) return null;

    let route = this.#routes.find(route => route.path === path);

    if (!route) {
      route = this.#routes.find(route => route.path === '*');
    }

    return route;
  }


  #updateView(Component) {
    document.querySelector('#app').innerHTML = new Component().render()
  }
}