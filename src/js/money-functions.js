function formatCurrency (amount) {
    if (amount < 0){
        num = amount * -1
        num = num.toFixed(2);
        return `-$${num}`;
    } else {
        num = amount.toFixed(2);
        return `$${num}`;
    };
};

function getCoins (cents) {
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;

    let remainder = 0;
    let amtInCoin = 0;

    for (cents ; cents > 0;) {
        if (cents >= 25) {
            remainder = cents % 25
            amtInCoin = cents - remainder
            quarters = amtInCoin / 25
            cents = remainder
        } else if (cents >= 10){
            remainder = cents % 10
            amtInCoin = cents - remainder
            dimes = amtInCoin / 10
            cents = remainder
        } else if (cents >= 5){
            remainder = cents % 5
            amtInCoin = cents - remainder
            nickels = amtInCoin / 5
            cents = remainder
        } else if (cents >= 1){
            remainder = cents % 1
            amtInCoin = cents - remainder
            pennies = amtInCoin / 1
            cents = remainder    
        }}

return {
    "quarters": quarters,
    "dimes": dimes, 
    "nickels": nickels,
    "pennies": pennies
};

}

module.exports = { formatCurrency, getCoins }