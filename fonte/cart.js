// CÓDIGO cart.js - OPÇÃO 2 (COM IMAGENS VARIADAS)
document.addEventListener('DOMContentLoaded', () => {

    // --- BANCO DE DADOS DE PRODUTOS ---
    // Links de imagens genéricas de frascos de perfume do Unsplash
    const img1 = 'https://images.unsplash.com/photo-1585399001342-07218a14a214?q=80&w=1887&auto=format&fit=crop';
    const img2 = 'https://images.unsplash.com/photo-1620916566398-39f168a27e48?q=80&w=1887&auto=format&fit=crop';
    const img3 = 'https://images.unsplash.com/photo-1557173439-af576e333a84?q=80&w=1887&auto=format&fit=crop';
    const img4 = 'https://images.unsplash.com/photo-1619994340738-c89a71a6e782?q=80&w=1887&auto=format&fit=crop';
    const img5 = 'https://images.unsplash.com/photo-1541697524049-56b0b54f4a24?q=80&w=1887&auto=format&fit=crop';
    const img6 = 'https://images.unsplash.com/photo-1610461222343-65d10d6e7368?q=80&w=1887&auto=format&fit=crop';
    
    const products = [
        // Masculinos Populares
        { id: 1, name: 'One Million', brand: 'Paco Rabanne', price: 499.99, image: img1 },
        { id: 2, name: '212 VIP Black', brand: 'Carolina Herrera', price: 549.99, image: img2 },
        { id: 3, name: 'Sauvage', brand: 'Dior', price: 749.99, image: img3 },
        { id: 4, name: 'Invictus', brand: 'Paco Rabanne', price: 499.99, image: img4 },
        { id: 5, name: 'Acqua di Giò', brand: 'Giorgio Armani', price: 499.99, image: img5 },
        { id: 6, name: 'Scandal Pour Homme', brand: 'Jean Paul Gaultier', price: 599.99, image: img6 },
        { id: 7, name: 'Le Male Elixir', brand: 'Jean Paul Gaultier', price: 789.99, image: img1 },
        { id: 35, name: 'Phantom', brand: 'Paco Rabanne', price: 549.99, image: img2 },
        
        // Femininos Populares
        { id: 8, name: '212 VIP Rosé', brand: 'Carolina Herrera', price: 549.99, image: img3 },
        { id: 9, name: 'La Vie Est Belle', brand: 'Lancôme', price: 619.90, image: img4 },
        { id: 10, name: 'Good Girl Blush', brand: 'Carolina Herrera', price: 649.99, image: img5 },
        { id: 12, name: 'La Belle', brand: 'Jean Paul Gaultier', price: 599.99, image: img6 },
        { id: 60, name: 'La Nuit Trésor', brand: 'Lancôme', price: 619.99, image: img1 },
        { id: 63, name: 'Angel', brand: 'Mugler', price: 749.99, image: img2 },
        { id: 76, name: 'Scandal', brand: 'Jean Paul Gaultier', price: 549.99, image: img3 },
        { id: 82, name: 'Miss Dior', brand: 'Dior', price: 649.99, image: img4 },

        // Linha Bad Boy
        { id: 100, name: 'Bad Boy', brand: 'Carolina Herrera', price: 499.99, image: img5 },
        { id: 108, name: 'Bad Boy Le Parfum', brand: 'Carolina Herrera', price: 520.00, image: img6 },
        { id: 110, name: 'Bad Boy Cobalt', brand: 'Carolina Herrera', price: 509.99, image: img1 },
        { id: 134, name: 'Bad Boy Extreme', brand: 'Carolina Herrera', price: 519.99, image: img2 },
        
        // Linha Good Girl
        { id: 348, name: 'Good Girl EDP', brand: 'Carolina Herrera', price: 579.99, image: img3 },
        { id: 353, name: 'Very Good Girl', brand: 'Carolina Herrera', price: 559.99, image: img4 },
        { id: 358, name: 'Very Good Girl Glam', brand: 'Carolina Herrera', price: 639.99, image: img5 },

        // Outros
        { id: 228, name: 'Versace Eros', brand: 'Versace', price: 489.99, image: img6 },
        { id: 212, name: 'CK One', brand: 'Calvin Klein', price: 249.99, image: img1 },
        { id: 207, name: 'Ferrari Black', brand: 'Ferrari', price: 239.99, image: img2 },
        { id: 430, name: 'Libre', brand: 'YSL', price: 699.99, image: img3 },
    ];
    
    // O restante do código permanece exatamente o mesmo...
    // (Copie e cole o resto do código da Opção 1 aqui, pois ele não muda)

    const whatsappNumber = '5541995252161';
    let cart = JSON.parse(localStorage.getItem('trentiniCart')) || [];

    function saveCart() {
        localStorage.setItem('trentiniCart', JSON.stringify(cart));
        updateCartCount();
    }

    function updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        if (cartCount) {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
        }
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        alert(`${product.name} foi adicionado ao carrinho!`);
        saveCart();
    }

    function renderProducts(containerId, productList) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = '';
        productList.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-image"><img src="${product.image}" alt="${product.name}"></div>
                <div class="product-info">
                    <p class="brand">${product.brand}</p>
                    <h3>${product.name}</h3>
                    <p class="price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
                    <button class="btn btn-secondary add-to-cart-btn" data-id="${product.id}">Adicionar ao Carrinho</button>
                </div>
            `;
            container.appendChild(card);
        });

        container.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart-btn')) {
                const productId = parseInt(e.target.dataset.id);
                addToCart(productId);
            }
        });
    }

    function renderCartPage() {
        const container = document.getElementById('cart-page-container');
        if (!container) return;

        if (cart.length === 0) {
            container.innerHTML = `<div class="cart-empty-message">Seu carrinho está vazio. <a href="catalogo.html">Continue comprando</a>.</div>`;
            return;
        }

        let itemsHTML = '<div class="cart-items-list">';
        cart.forEach(item => {
            itemsHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-info">
                        <h3>${item.name}</h3>
                        <p>${item.brand}</p>
                        <p class="price">R$ ${item.price.toFixed(2).replace('.', ',')}</p>
                    </div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" data-id="${item.id}" data-action="decrease">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" data-id="${item.id}" data-action="increase">+</button>
                        <button class="remove-item-btn" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button>
                    </div>
                </div>
            `;
        });
        itemsHTML += '</div>';

        const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const total = subtotal;

        const summaryHTML = `
            <div class="order-summary">
                <h2>Resumo do Pedido</h2>
                <div class="summary-line">
                    <span>Subtotal</span>
                    <span>R$ ${subtotal.toFixed(2).replace('.', ',')}</span>
                </div>
                <div class="summary-line total">
                    <span>Total</span>
                    <span>R$ ${total.toFixed(2).replace('.', ',')}</span>
                </div>
                <button class="btn btn-primary btn-checkout">Finalizar Compra via WhatsApp</button>
            </div>
        `;

        container.innerHTML = itemsHTML + summaryHTML;

        container.addEventListener('click', (e) => {
            const button = e.target.closest('button');
            if (!button) return;

            if (button.classList.contains('quantity-btn')) {
                const id = parseInt(button.dataset.id);
                const action = button.dataset.action;
                const item = cart.find(i => i.id === id);
                if (action === 'increase') {
                    item.quantity++;
                } else if (action === 'decrease' && item.quantity > 1) {
                    item.quantity--;
                }
                saveCart();
                renderCartPage();
            }

            if (button.classList.contains('remove-item-btn')) {
                const id = parseInt(button.dataset.id);
                cart = cart.filter(i => i.id !== id);
                saveCart();
                renderCartPage();
            }

            if (button.classList.contains('btn-checkout')) {
                generateWhatsAppMessage();
            }
        });
    }

    function generateWhatsAppMessage() {
        if (cart.length === 0) return;
        let message = "Olá, Trentini Perfumes! Gostaria de fazer o seguinte pedido:\n\n";
        cart.forEach(item => {
            message += `*${item.name}* (${item.quantity}x) - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
        });
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        message += `\n*Total do Pedido: R$ ${total.toFixed(2).replace('.', ',')}*`;

        const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }

    function initializePage() {
        updateCartCount();

        if (document.getElementById('product-grid-featured')) {
            renderProducts('product-grid-featured', products.slice(0, 4));
        }

        if (document.getElementById('product-grid-full')) {
            renderProducts('product-grid-full', products);
        }

        if (document.getElementById('cart-page-container')) {
            renderCartPage();
        }
    }

    initializePage();
});
