import add from "./add";

/**
 * @param {number} productPrices
 * @param {number} deliveryCharge
 * @returns {string}
 */
const totalCost = (productPrices, deliveryCharge = 0) => {
  const totalProductPrice = productPrices.reduce(
    (acc, productPrice) => add(acc, productPrice),
    0
  );
  return `$${add(totalProductPrice, deliveryCharge)}`;
};

export default totalCost;
