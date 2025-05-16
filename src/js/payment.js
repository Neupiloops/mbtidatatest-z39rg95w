let stripe;

document.addEventListener('DOMContentLoaded', async function() {
  // Initialize Stripe
  stripe = await loadStripe('your_publishable_key');

  const purchaseButtons = document.querySelectorAll('.purchase-button');
  
  purchaseButtons.forEach(button => {
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      
      const priceId = e.target.dataset.priceId;
      
      try {
        const response = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            priceId: priceId
          })
        });

        const session = await response.json();
        
        const result = await stripe.redirectToCheckout({
          sessionId: session.id
        });

        if (result.error) {
          alert(result.error.message);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('支付过程中出现错误，请稍后重试。');
      }
    });
  });
});

async function loadStripe(key) {
  const script = document.createElement('script');
  script.src = 'https://js.stripe.com/v3/';
  document.head.appendChild(script);
  
  return new Promise((resolve) => {
    script.onload = () => {
      resolve(Stripe(key));
    };
  });
}