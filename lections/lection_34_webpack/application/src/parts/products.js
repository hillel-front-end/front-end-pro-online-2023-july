import getProduct from "./product.js";

const renderProducts = async (products) => {
  const template = `
      <article class="products">
        ${products.map((product) => getProduct(product)).join("")}
      </article>
    `;


  document.body.innerHTML = template;
};

console.log("products");

export default renderProducts;

