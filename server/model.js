const storeItems = require("./storeItems");

function getItemById(id) {
    return storeItems.find((item) => item.id === id);
};

function getOrderItems(order) {
    return order.map((id) => getItemById(id));
};

function getOrderTotal(order) {
    return order.reduce((total, id) => {
        const item = getItemById(id);
        return total += item.price;
    }, 0);
};

module.exports = {
    getItemById,
    getOrderItems,
    getOrderTotal
}