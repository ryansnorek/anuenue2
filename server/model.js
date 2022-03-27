const storeItems = require("./storeItems");

function getItemById(id) {
  return storeItems.find((item) => item.id === id);
}

function getLineItems(order) {
  return order.map((item) => {
    const product = getItemById(item.id);
    const lineItem = {
      price: product.price,
      quantity: item.qty
    }
    return lineItem;
  });
}

function getOrderTotal(orderItems) {
  return orderItems.reduce((total, item) => {
    return (total += item.price);
  }, 0);
}

module.exports = {
  getItemById,
  getLineItems,
  getOrderTotal,
};
