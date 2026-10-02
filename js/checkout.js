// js/checkout.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('checkout-form');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        alert("Your cart is empty. Redirecting to home.");
        window.location.href = 'index.html';
        return;
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulate order placement
            const orderId = 'ORD-' + Math.floor(Math.random() * 1000000);
            
            // Clear cart
            localStorage.setItem('cart', JSON.stringify([]));
            
            // Show success message
            document.querySelector('.checkout-container').innerHTML = `
                <div style="text-align: center; padding: 4rem 0;">
                    <i class="fas fa-check-circle" style="font-size: 5rem; color: var(--success); margin-bottom: 1rem;"></i>
                    <h2>Order Placed Successfully!</h2>
                    <p style="margin-top: 1rem; font-size: 1.2rem;">Your Order ID is: <strong>${orderId}</strong></p>
                    <p style="color: var(--text-light); margin-bottom: 2rem;">Thank you for shopping with ShopEasy.</p>
                    <a href="index.html" class="btn btn-primary">Return to Home</a>
                </div>
            `;
            
            updateBadges();
        });
    }
});
