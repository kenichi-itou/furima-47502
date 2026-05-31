const priceInput = document.getElementById('item-price');

if (priceInput) {
  priceInput.addEventListener('input', () => {
    const price = priceInput.value;
    const fee = Math.floor(price * 0.1);
    const profit = Math.floor(price - fee);

    document.getElementById('add-tax-price').textContent = fee;
    document.getElementById('profit').textContent = profit;
  });
}