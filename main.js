// 1️⃣ Load Meta Pixel dynamically if not already loaded
(function loadPixel() {
  if (!window.fbq) {
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');

    fbq('init', '3821742341430033'); // replace with your Pixel ID
    fbq('track', 'PageView');
  }
})();

// 2️⃣ Define addToCart globally
window.addToCart = function(productName, price) {
  // Save product to cart
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push({name: productName, price: price});
  localStorage.setItem('cart', JSON.stringify(cart));

  // Fire AddToCart Pixel event
  if (typeof fbq === 'function') {
    fbq('track', 'AddToCart', {
      content_ids: [productName],
      content_type: 'product',
      contents: [{id: productName, quantity: 1, item_price: price}],
      value: price,
      currency: 'MYR'
    });
  } else {
    console.warn('Pixel not loaded yet.');
  }

  // Show confirmation
  alert(productName + ' added to cart!');

  // Redirect to checkout after short delay
  setTimeout(() => {
    window.location.href = 'checkout.html';
  }, 200);
};
