import { calculateDiscountPrice } from "../helpers/index.js";

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

export default getMainProductInfo;