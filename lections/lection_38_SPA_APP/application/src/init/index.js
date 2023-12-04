

export default function init(App, libs) {
  libs.store?.onInit();

  document.querySelector('#app').append(new App().render());

  libs.router?.onInit()
}