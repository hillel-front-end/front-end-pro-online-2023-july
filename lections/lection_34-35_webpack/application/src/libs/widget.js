export default class Widget {
  constructor() {
    console.log("I am widget");
  }

  async sendAjax() {
    const data = await Promise.resolve(["aaaa"]);
    console.log(data, "data");
  }
}

const widget = new Widget();

console.log(widget, "widget 1");
