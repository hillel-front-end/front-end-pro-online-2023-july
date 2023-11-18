import _ from "lodash";

export default class Widget {
  constructor() {
    console.log("I am widget");

    const friends = _.groupBy(
      [
        { name: "Alex", age: 10 },
        { name: "Pety", age: 20 },
        { name: "Valera", age: 1 },
        { name: "Anna", age: 10 },
      ],
      "age"
    );

    console.log(friends, "friends");
  }

  async sendAjax() {
    const data = await Promise.resolve(["aaaa"]);
    console.log(data, "data");
  }
}

const widget = new Widget();

console.log(widget, "widget 1");
