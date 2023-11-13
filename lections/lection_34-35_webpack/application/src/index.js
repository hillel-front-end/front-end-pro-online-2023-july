import renderProducts from "./parts/products";
import Foo from "./libs/unused";
// import "./common-styles.css";
import "./common-styles.scss";

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
    .then(({ products }) => renderProducts(products));
};

window.onload = main;
