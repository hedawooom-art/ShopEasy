// js/wishlist.js

function renderWishlist() {
    const container = document.getElementById('wishlist-container');
    const wishlistIds = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    if (wishlistIds.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-heart"></i>
                <h2>Your wishlist is empty</h2>
                <p>Save items you like to your wishlist.</p>
                <a href="products.html" class="btn btn-primary" style="margin-top: 1rem;">Explore Products</a>
            </div>
        `;
        return;
    }

    let html = '<div class="product-grid">';
    wishlistIds.forEach(id => {
        const product = getProductById(id);
        if (product) {
            html += createProductCard(product);
        }
    });
    html += '</div>';
    
    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    if(document.getElementById('wishlist-container')) {
        renderWishlist();
    }
});
