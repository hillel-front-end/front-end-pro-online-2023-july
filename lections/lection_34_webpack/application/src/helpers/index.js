export const toCoin = (v) => v * 100;

export const fromCoin = (v) => v / 100;

export const calculateDiscountPrice = (discountPercentage, price) => {
    const discount = (discountPercentage / 100) * toCoin(price);
    const total = fromCoin(toCoin(price) - discount);
  
    return total.toFixed(2);
};

// export function foo() {
//
// }
