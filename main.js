function addToCart(productName, price) {
  // 1. Save product to cart
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push({name: productName, price: price});
  localStorage.setItem('cart', JSON.stringify(cart));

  // 2. Fire Meta Pixel AddToCart safely
  if (typeof fbq === 'function') {
    fbq('track', 'AddToCart', {
      content_name: productName,
      content_category: 'Demo',
      value: price,
      currency: 'MYR'
    });
  } else {
    console.warn('Pixel not loaded yet.');
  }

  // 3. Show confirmation
  alert(productName + ' added to cart!');

  // 4. Redirect after short delay so Pixel fires
  setTimeout(() => {
    window.location.href = 'checkout.html';
  }, 200); // 200ms delay
}
