function calculateChange(payment, total) {
    return payment - total;
};

// function isSufficientPayment (payment, total) {
//     return payment >= total;
// };
// above functions the same as line 10

const isSufficientPayment = (payment, total) => payment >= total;

function calculateTotal (itemsArray) {
    let sum = 0;
    itemsArray.forEach(item => (sum += item.price));
    return sum;
};

function addItem (itemsArray, name, price) {
    itemsArray.push({name: name, price: price});
};

function removeItem (itemsArray, index) {
    itemsArray.splice([index], 1);
}

module.exports = { calculateChange, isSufficientPayment, calculateTotal, addItem, removeItem };