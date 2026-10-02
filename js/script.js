// js/script.js

// Initialize storage if empty
if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
}
if (!localStorage.getItem('wishlist')) {
    localStorage.setItem('wishlist', JSON.stringify([]));
}

// Toast Notification System
function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast`;
    
    let icon = '';
    if(type === 'success') icon = '<i class="fas fa-check-circle" style="color: var(--success)"></i>';
    if(type === 'error') icon = '<i class="fas fa-exclamation-circle" style="color: var(--danger)"></i>';
    if(type === 'info') icon = '<i class="fas fa-info-circle" style="color: var(--primary-color)"></i>';

    toast.innerHTML = `${icon} <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Update badges
function updateBadges() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const wishlistCount = wishlist.length;

    const cartBadge = document.getElementById('cart-badge');
    const wishlistBadge = document.getElementById('wishlist-badge');

    if (cartBadge) {
        cartBadge.textContent = cartCount;
        cartBadge.style.display = cartCount > 0 ? 'block' : 'none';
    }
    if (wishlistBadge) {
        wishlistBadge.textContent = wishlistCount;
        wishlistBadge.style.display = wishlistCount > 0 ? 'block' : 'none';
    }
}

// Render product card
function createProductCard(product) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const isWishlisted = wishlist.includes(product.id);
    const stars = '★'.repeat(Math.round(product.rating)) + '☆'.repeat(5 - Math.round(product.rating));

    return `
        <div class="product-card">
            <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${product.id}, this)">
                <i class="fas fa-heart"></i>
            </button>
            <a href="product-details.html?id=${product.id}">
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </a>
            <div class="product-details">
                <span class="product-category">${product.category}</span>
                <a href="product-details.html?id=${product.id}">
                    <h3 class="product-name">${product.name}</h3>
                </a>
                <div class="product-rating">${stars} ${product.rating}</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
}

// Global Cart Actions
function addToCart(productId, qty = 1) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = getProductById(productId);
    
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += qty;
    } else {
        cart.push({ id: productId, quantity: qty });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateBadges();
    showToast(`${product.name} added to cart!`);
}

// Global Wishlist Actions
function toggleWishlist(productId, btnElement) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const index = wishlist.indexOf(productId);
    
    if (index > -1) {
        wishlist.splice(index, 1);
        if (btnElement) btnElement.classList.remove('active');
        showToast('Removed from wishlist', 'info');
    } else {
        wishlist.push(productId);
        if (btnElement) btnElement.classList.add('active');
        showToast('Added to wishlist', 'success');
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateBadges();
    
    // If we are on wishlist page, re-render
    if (typeof renderWishlist === 'function') {
        renderWishlist();
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateBadges();
});
