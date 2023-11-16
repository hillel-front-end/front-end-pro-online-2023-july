import getProduct from "./product";

const renderProducts = async (products) => {
  const template = `
      <article class="products">
        ${products.map((product) => getProduct(product))}
      </article>
    `;

  document.body.innerHTML = template;
};

console.log("products2");

export default renderProducts;
