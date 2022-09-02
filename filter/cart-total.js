function calculate(basketPrice, itemCount, promocode = null) {
  let totalPrice = basketPrice;

  if (promocode === 'ДАРИМ300' && totalPrice > 300) {
    totalPrice -= 300;
  } else if (promocode === 'ДАРИМ300' && totalPrice <= 300) {
    totalPrice = 0;
  }

  if (itemCount >= 10) {
    totalPrice *= 0.95;
  }

  if (totalPrice > 50000) {
    totalPrice = (totalPrice - 50000) * 0.8 + 50000;
  }

  if (promocode === 'СКИДКА15' && totalPrice >= 20000) {
    totalPrice *= 0.85;
  }
  return totalPrice;
}

export default calculate;
