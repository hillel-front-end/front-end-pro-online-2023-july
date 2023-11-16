import renderProducts from "./parts/products";
import Foo from "./libs/unused";
import _ from "lodash";
// import "./common-styles.css";
import "./common-styles.scss";

// ---- assets -----
import xml from "./assets/data";
import json from "./assets/config";
// ---- assets -----

// ----=-- alias ----=--
import "./parts/test-1/test-2/test-3/test";

// ----=-- alias ----=--
console.log(xml, "xml");
var parser = new DOMParser();
var score_as_xml = parser.parseFromString(xml, "application/xml");
console.log(score_as_xml.querySelector("model"), "score_as_xml");

console.log(json, "json");
console.log(_, "_");
// ---unused opt----
// const foo = new Foo();
// console.log(foo, 'foo');
// console.log(renderProducts, "renderProducts");

console.log(111122233344);
const fetchAllProducts = () => {
  return fetch("https://dummyjson.com/products");
};

const main = () => {
  fetchAllProducts()
    .then((config) => config.json())
    .then(({ products }) => ({
      products: _.sortBy(products, (product) => product.price),
    }))
    .then(({ products }) => renderProducts(products));
};

window.onload = main;

const a = 1;
