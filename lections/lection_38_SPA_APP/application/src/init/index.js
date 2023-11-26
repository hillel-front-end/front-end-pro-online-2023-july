

export default function init(App, libs) {
  document.querySelector('#app').innerHTML = new App().render();
  libs.forEach(lib => lib.onInit());
}