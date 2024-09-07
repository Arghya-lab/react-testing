export const add = (a, b) => a + b;

export const totalCost = (productPrices, deliveryCharge = 0) => {
  const totalProductPrice = productPrices.reduce(
    (acc, productPrice) => add(acc, productPrice),
    0
  );
  return `$${add(totalProductPrice, deliveryCharge)}`;
};
