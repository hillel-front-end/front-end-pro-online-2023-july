import renderProducts from "./parts/products.js";
import Foo from './libs/unused';

// ---unused opt----
// const foo = new Foo();
// console.log(foo, 'foo');
// console.log(renderProducts, "renderProducts");
console.log(111);
const fetchAllProducts = () => {
  return fetch("https://dummyjson.com/products");
};

const main = () => {
  fetchAllProducts()
    .then((config) => config.json())
    .then(({ products }) => renderProducts(products));
};

window.onload = main;
