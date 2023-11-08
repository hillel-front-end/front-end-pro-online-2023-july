const toCoin = (v) => v * 100;
const fromCoin = (v) => v / 100;

const getPicture = (thumbnail) => {
  if (!thumbnail) {
    thumbnail =
      "https://40.media.tumblr.com/2a46a0ec64f5d1c0dcc8814baf9833f4/tumblr_nj930lpXGB1qif4c6o1_1280.jpg";
  }

  return `
  <div class="image-wrapper">
      <img
        src="${thumbnail}"
        alt=""
        class="image"
      />
  </div>
  
  `;
};

const calculateDiscountPrice = (discountPercentage, price) => {
  const discount = (discountPercentage / 100) * toCoin(price);
  const total = fromCoin(toCoin(price) - discount);

  return total.toFixed(2);
};

const getMainProductInfo = ({
  title,
  price,
  discountPercentage,
  description,
}) => {
  const total = calculateDiscountPrice(discountPercentage, price);

  return `
    <div class="main-info">
      <div class="title">
        <h4>${title}</h4>
      </div>
      <div class="price">
        ${price}
        <span class="discount">${total}</span> 
      </div>
      <div class="description">${description}</div>
    </div>
  `;
};

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

function updateView(products) {

  const template = `
    <article class="products">
      ${products.map((product) => getProduct(product)).join("")}
    </article>
  `;

  document.body.innerHTML = template;
}