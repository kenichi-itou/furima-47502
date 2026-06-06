document.addEventListener('turbo:load', () => {
  const cardElement = document.getElementById('card-element');

  if (cardElement) {
    const publicKey = document.querySelector('meta[name="payjp-public-key"]').content;
    const payjp = Payjp(publicKey);
    const elements = payjp.elements();
    const cardNumberElement = elements.create('cardNumber');
    const cardExpiryElement = elements.create('cardExpiry');
    const cardCvcElement = elements.create('cardCvc');

    cardNumberElement.mount('#card-number');
    cardExpiryElement.mount('#card-expiry');
    cardCvcElement.mount('#card-cvc');

    const form = document.getElementById('order-form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const result = await payjp.createToken(cardNumberElement);
      console.log(result);
      if (result.error) {
        const errorElement = document.getElementById('card-errors');
        errorElement.textContent = result.error.message;
      } else {
        const tokenElement = document.getElementById('card-token');
        tokenElement.setAttribute('value', result.id);
        form.submit();
      }
    });
  }
});