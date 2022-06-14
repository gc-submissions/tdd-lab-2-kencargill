const { calculateChange, isSufficientPayment, calculateTotal, addItem, removeItem } = require("../src/js/cart-functions.js");

describe("calculateChange", () => {
  test('when payment is 5 and total is 6 then change is 1', () => {
    // arrange
    const total = 5;
    const payment = 6;

    //act
    const change = calculateChange(payment, total);

    //assert
    expect(change).toBe(1);
  });

  test('when payment is 13.03 and total is 12.3 then change is 0.73', () => {
    // arrange
    const total = 12.3;
    const payment = 13.03;

    //act
    const change = calculateChange(payment, total);

    //assert
    expect(change).toBeCloseTo(0.73); // toBeCloseTo because of the decimal
  });

  test('when payment is 25 and total is 20 then change is 5', () => {
    // arrange
    const total = 20;
    const payment = 25;

    //act
    const change = calculateChange(payment, total);

    //assert
    expect(change).toBeCloseTo(5);
  });
});

describe("isSufficientPayment", () => {
  test('when payment is 5 and total is 6 expect isSufficientPayment to return true', ()=> {
    // arrange
    const total = 5;
    const payment = 6;

    // act
    const isSufficient = isSufficientPayment(payment, total);

    // assert
    expect(isSufficient).toBe(true);
  })
});

describe("calculateTotal", () => {
  test('calculates the total with one item', () => {
    // arrange
    const items = [{ name:"ball", price: 4.99 }];

    // act
    const total = calculateTotal(items);

    // assert
    expect(total).toEqual(4.99);
  });

  test('calculates the total with three items', () => {
    // arrange
    const items = [
      { name:"ball", price: 3.50 }, 
      { name:"ball", price: 12.99 }, 
      { name:"ball", price: 0.03 }
    ];

    // act
    const total = calculateTotal(items);

    // assert
    expect(total).toBeCloseTo(16.52);
  });

  test('calculates the total and expects it to be 0', () => {
    // arrange
    const items = [];

    // act
    const total = calculateTotal(items);

    // assert
    expect(total).toBe(0);
  });

  test('calculates the total with three items', () => {
    // arrange
    const items = [
      { name:"ball", price: 10 }, 
      { name:"ball", price: 12 },
      { name:"ball", price: 20 }, 
      { name:"ball", price: 10 }
    ];

    // act
    const total = calculateTotal(items);

    // assert
    expect(total).toBe(52);
  });
});

describe("addItem", () => {
  test('adds an item to empty array', () => {
    // arrange
    let itemsArray = [];

    // act
    addItem(itemsArray, "beans", 3);

    // assert
    expect(itemsArray).toContainEqual({name: "beans", price: 3});
  });

  test('add sugar to array with beans', () => {
    // arrange
    let itemsArray = [{name: "beans", price: 3}];

    // act
    addItem(itemsArray, "sugar", 2);

    // assert
    expect(itemsArray).toContainEqual({name: "beans", price: 3}, {name: "sugar", price: 2});
  });

  test('add cheetos to array with three items', () => {
    // arrange
    let itemsArray = [
      {name: "beans", price: 3},
      {name: "sugar", price: 2},
      {name: "milk", price: 1}
  ];

    // act
    addItem(itemsArray, "cheetos", 1);

    // assert
    expect(itemsArray).toContainEqual(
      {name: "beans", price: 3}, 
      {name: "sugar", price: 2},
      {name: "milk", price: 1}, 
      {name: "cheetos", price: 1}
      );
  });
});

describe("removeItem", () => {
  test("remove first element in array", () => {
    // arrange
    let itemsArray = [
      {name: "beans", price: 3}, 
      {name: "sugar", price: 2},
      {name: "milk", price: 1}, 
    ];

    // act
    removeItem(itemsArray, 0);

    // assert
    expect(itemsArray).toContainEqual(
      {name: "sugar", price: 2}, 
      {name: "milk", price: 1}, 
      );
  });

  test("remove last element in array", () => {
    // arrange
    let itemsArray = [
      {name: "sugar", price: 2}, 
      {name: "milk", price: 1}, 
      {name: "cheetos", price: 1}
    ];

    // act
    removeItem(itemsArray, 2);

    // assert
    expect(itemsArray).toContainEqual({name: "sugar", price: 2}, {name: "milk", price: 1});
  });

  test("remove middle element in array", () => {
    // arrange
    let itemsArray = [
      {name: "sugar", price: 2}, 
      {name: "milk", price: 1}, 
      {name: "cheetos", price: 1}
    ];

    // act
    removeItem(itemsArray, 1);

    // assert
    expect(itemsArray).toContainEqual({name: "sugar", price: 2}, {name: "cheetos", price: 1});
  });

  test("remove only element in array", () => {
    // arrange
    let itemsArray = [
      {name: "sugar", price: 2}
    ];

    // act
    removeItem(itemsArray, 0);

    // assert
    expect(itemsArray).not.toContainEqual({name: "sugar", price: 2});
  });

});