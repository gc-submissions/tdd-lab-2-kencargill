const { formatCurrency, getCoins } = require("../src/js/money-functions.js");

describe("formatCurrency", () => {
  test('Given the amount 0, returns "$0.00"', () => {
    // arrange

    //act
    const format = formatCurrency(0);

    //assert
    expect(format).toBe("$0.00");
  });

  test('Given the amount 1, it returns "$1.00"', () => {
    // arrange

    //act
    const format = formatCurrency(1);

    //assert
    expect(format).toBe("$1.00");
  });

  test('Given the amount 1.5, it returns "$1.50"', () => {
    // arrange

    //act
    const format = formatCurrency(1.5);

    //assert
    expect(format).toBe("$1.50");
  });

  test('Given the amount 0.01, it returns "$0.01"', () => {
    // arrange

    //act
    const format = formatCurrency(0.01);

    //assert
    expect(format).toBe("$0.01");
  });

  test('Given the amount 527.6789, it returns "$527.68"', () => {
    // arrange

    //act
    const format = formatCurrency(527.6789);

    //assert
    expect(format).toBe("$527.68");
  });

  test('Given the amount -1, it returns "-$1.00"', () => {
    // arrange

    //act
    const format = formatCurrency(-1);

    //assert
    expect(format).toBe("-$1.00");
  });

  test('Given the amount -300, it returns "-$300.00"', () => {
    // arrange

    //act
    const format = formatCurrency(-300);

    //assert
    expect(format).toBe("-$300.00");
  });

  test('Given the amount -63.556, it returns "-$63.56"', () => {
    // arrange

    //act
    const format = formatCurrency(-63.556);

    //assert
    expect(format).toBe("-$63.56");
  });
});

describe("getCoins", () => {
  test('32 cents produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2', () => {
    // arrange

    //act
    const coins = getCoins(32);

    //assert
    expect(coins).toStrictEqual({
      quarters: 1, 
      dimes: 0, 
      nickels: 1, 
      pennies: 2
    });
  });

  test('10 cents produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0', () => {
    // arrange

    //act
    const coins = getCoins(10);

    //assert
    expect(coins).toStrictEqual({
      quarters: 0, 
      dimes: 1, 
      nickels: 0, 
      pennies: 0
    });
  });

  test('27 cents produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2', () => {
    // arrange

    //act
    const coins = getCoins(27);

    //assert
    expect(coins).toStrictEqual({
      quarters: 1, 
      dimes: 0, 
      nickels: 0, 
      pennies: 2
    });
  });

  test('68 cents produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3', () => {
    // arrange

    //act
    const coins = getCoins(68);

    //assert
    expect(coins).toStrictEqual({
      quarters: 2, 
      dimes: 1, 
      nickels: 1, 
      pennies: 3
    });
  });
});