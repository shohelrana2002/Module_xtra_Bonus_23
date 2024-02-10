// fast 100-->100 taka
// fast 101-200-->90 taka
// fast 201 up-->70 taka
function discounted(number) {
  const fast100 = 100;
  const scend200 = 90;
  const up200 = 70;
  if (number <= 100) {
    const total = number * fast100;
    return total;
  } else if (number <= 200) {
    const fast100Total = 100 * fast100;
    const remainingQuantity = number - 100;
    const remainingQuantityTotal = remainingQuantity * scend200;
    const total = fast100Total + remainingQuantityTotal;
    return total;
  } else {
    const fast100total = 100 * fast100;
    const scend200Total = 100 * scend200;
    const remainingQuantityTotals = number - 200;
    const remainingQuantity = remainingQuantityTotals * up200;
    const total = fast100total + scend200Total + remainingQuantity;
    return total;
  }
}

const result = discounted(101);
console.log(result);
