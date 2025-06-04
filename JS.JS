const products = [
    {
        id: 1,
        name: "Smartfon Samsung A14",
        price: 2200000,
        image: "image.png"
    },
    {
        id: 2,
        name: "Noutbuk Lenovo",
        price: 7500000,
        image: "lenova.jpg"
    },
    {
        id: 3,
        name: "Kiyim: Sport Kastyum",
        price: 450000,
        image: "kiym.png"
    }
];

let cartCount = 0;

function addToCart(id) {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
    alert("Mahsulot savatchaga qo‘shildi!");
}

function renderProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price.toLocaleString()} so'm</p>
            <button onclick="addToCart(${product.id})">Savatchaga qo‘shish</button>
        `;
        productList.appendChild(card);
    });
}

renderProducts();
