import getPicture from "./picture";
import getMainProductInfo from "./product-info";

const getProduct = ({ thumbnail, ...product }) => {
  const picture = getPicture(thumbnail);
  const mainInfo = getMainProductInfo(product);
  
  return `
  <section class="product-item">
    ${picture}
    <div class="content-wrapper">
      ${mainInfo}
      <div class="actions">
        <button id="cart"class="button green-solid cart">
            Add to Cart
        </button>
        <button class="button more">More Details</button>
      </div>
    </div>
  </section>`;
};

export default getProduct;