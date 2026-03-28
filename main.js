function addToCart(productName, price) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push({name: productName, price: price});
  localStorage.setItem('cart', JSON.stringify(cart));
  
  // Pixel event
  fbq('track', 'AddToCart', {content_name: productName, value: price, currency:'MYR'});
  
  alert(productName + ' added to cart!');
  window.location.href = 'checkout.html';
}