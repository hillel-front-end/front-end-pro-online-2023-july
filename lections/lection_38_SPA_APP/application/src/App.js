import Component from "@/plugins/Component";

export default class App extends Component {
  render() {
    return `
      <main class="main-app">
          <header class="header">
            <span class="header__logo">JS Native SPA</span>
          </header>
          <div class="router-view"></div>
      </main>
    `
  }
}