function fruitCalculation(fruit, weight, price) {
    const weightKg = weight / 1000;
    const money = price * weightKg;
    console.log(`I need $${money.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
}
fruitCalculation('orange', 2500, 1.80);
fruitCalculation('apple', 1563, 2.35);