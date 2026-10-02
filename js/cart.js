// js/cart.js

function renderCart() {
    const cartContainer = document.getElementById('cart-items-container');
    const summaryContainer = document.getElementById('cart-summary-container');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-shopping-cart"></i>
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added any products yet.</p>
                <a href="products.html" class="btn btn-primary" style="margin-top: 1rem;">Start Shopping</a>
            </div>
        `;
        summaryContainer.style.display = 'none';
        return;
    }

    summaryContainer.style.display = 'block';
    let cartHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
        const product = getProductById(item.id);
        if (product) {
            const itemTotal = product.price * item.quantity;
            subtotal += itemTotal;
            
            cartHTML += `
                <div class="cart-item">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${product.name}</div>
                        <div class="cart-item-price">$${product.price.toFixed(2)}</div>
                    </div>
                    <div class="quantity-control">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <div style="margin-left: 1rem; font-weight: 600;">$${itemTotal.toFixed(2)}</div>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})" style="margin-left: 1rem;">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
        }
    });

    cartContainer.innerHTML = cartHTML;
    renderSummary(subtotal);
}

function renderSummary(subtotal) {
    const discount = subtotal > 100 ? subtotal * 0.1 : 0; // 10% discount if > $100
    const delivery = subtotal > 50 ? 0 : 10; // Free delivery over $50
    const total = subtotal - discount + delivery;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('discount').textContent = `-$${discount.toFixed(2)}`;
    document.getElementById('delivery').textContent = delivery === 0 ? 'Free' : `$${delivery.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

function updateQuantity(id, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex(item => item.id === id);
    
    if (itemIndex > -1) {
        cart[itemIndex].quantity += change;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateBadges();
    }
}

function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateBadges();
    showToast('Item removed from cart', 'info');
}

document.addEventListener('DOMContentLoaded', () => {
    if(document.getElementById('cart-items-container')) {
        renderCart();
    }
});
