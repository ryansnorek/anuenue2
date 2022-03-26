const storeItems = require("./storeItems");

function getItemById(id) {
  return storeItems.find((item) => item.id === id);
}

function getOrderItems(order) {
  return order.map((item) => getItemById(item.id));
}

function getOrderTotal(orderItems) {
  return orderItems.reduce((total, item) => {
    return (total += item.price);
  }, 0);
}

module.exports = {
  getItemById,
  getOrderItems,
  getOrderTotal,
};
