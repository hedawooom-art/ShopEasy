// js/products.js
const products = [
    {
        id: 1,
        name: "Wireless Noise-Cancelling Headphones",
        category: "Electronics",
        price: 299.99,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
        description: "Experience premium sound with active noise cancellation."
    },
    {
        id: 2,
        name: "Smart Watch Series X",
        category: "Electronics",
        price: 199.99,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80",
        description: "Track your fitness and stay connected on the go."
    },
    {
        id: 3,
        name: "Men's Classic Oxford Shirt",
        category: "Fashion",
        price: 49.99,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=500&q=80",
        description: "A wardrobe staple, perfect for any occasion."
    },
    {
        id: 4,
        name: "Women's Summer Floral Dress",
        category: "Fashion",
        price: 59.99,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80",
        description: "Light and breezy dress for warm days."
    },
    {
        id: 5,
        name: "Running Sneakers Pro",
        category: "Footwear",
        price: 129.99,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
        description: "Ultimate comfort and support for your daily runs."
    },
    {
        id: 6,
        name: "Leather Casual Loafers",
        category: "Footwear",
        price: 89.99,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1614252339460-e1d102e3b6bd?w=500&q=80",
        description: "Stylish and comfortable for everyday wear."
    },
    {
        id: 7,
        name: "Modern Ceramic Coffee Mug",
        category: "Home & Living",
        price: 14.99,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80",
        description: "Start your morning right with this elegant mug."
    },
    {
        id: 8,
        name: "Minimalist Desk Lamp",
        category: "Home & Living",
        price: 39.99,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80",
        description: "Adjustable lighting for your workspace."
    },
    {
        id: 9,
        name: "Classic Aviator Sunglasses",
        category: "Accessories",
        price: 24.99,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
        description: "Timeless style and UV protection."
    },
    {
        id: 10,
        name: "Genuine Leather Wallet",
        category: "Accessories",
        price: 34.99,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80",
        description: "Slim design with RFID blocking."
    },
    {
        id: 11,
        name: "Yoga Mat with Alignment Lines",
        category: "Sports",
        price: 29.99,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&q=80",
        description: "Non-slip surface for perfect poses."
    },
    {
        id: 12,
        name: "Adjustable Dumbbell Set",
        category: "Sports",
        price: 149.99,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&q=80",
        description: "Space-saving design for home workouts."
    },
    {
        id: 13,
        name: "4K Action Camera",
        category: "Electronics",
        price: 199.99,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
        description: "Capture your adventures in stunning detail."
    },
    {
        id: 14,
        name: "Cozy Knit Sweater",
        category: "Fashion",
        price: 45.99,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&q=80",
        description: "Keep warm and stylish all season."
    },
    {
        id: 15,
        name: "Canvas Backpack",
        category: "Accessories",
        price: 54.99,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        description: "Durable and spacious for daily use."
    }
];

function getProductById(id) {
    return products.find(p => p.id === parseInt(id));
}
