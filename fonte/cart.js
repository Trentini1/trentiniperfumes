document.addEventListener('DOMContentLoaded', () => {

    // --- BANCO DE DADOS DE PRODUTOS ---
    const products = [
        {
            id: 1, name: 'One Million', brand: 'Paco Rabanne', price: 499.99, image: 'fotos/one-million.jpg',
        },
        {
            id: 2, name: '212 VIP Black', brand: 'Carolina Herrera', price: 549.99, image: 'fotos/212-vip-black.jpg',
        },
        {
            id: 3, name: 'Sauvage', brand: 'Dior', price: 749.99, image: 'fotos/sauvage.jpg',
        },
        {
            id: 4, name: 'Invictus', brand: 'Paco Rabanne', price: 499.99, image: 'fotos/invictus.jpg',
        },
        {
            id: 5, name: 'Acqua di Giò', brand: 'Giorgio Armani', price: 499.99, image: 'fotos/acqua-di-gio.jpg',
        },
        {
            id: 6, name: 'Scandal Pour Homme', brand: 'Jean Paul Gaultier', price: 599.99, image: 'fotos/scandal-pour-homme.jpg',
        },
        {
            id: 7, name: 'Le Male Elixir', brand: 'Jean Paul Gaultier', price: 789.99, image: 'fotos/le-male-elixir.jpg',
        },
        {
            id: 8, name: '212 VIP Rosé', brand: 'Carolina Herrera', price: 549.99, image: 'fotos/212-vip-rose.jpg',
        },
        {
            id: 9, name: 'La Vie Est Belle', brand: 'Lancôme', price: 619.90, image: 'fotos/la-vie-est-belle.jpg',
        },
        {
            id: 10, name: 'Good Girl Blush', brand: 'Carolina Herrera', price: 649.99, image: 'fotos/good-girl-blush-elixir.jpg',
        },
        {
            id: 11, name: 'Bad Boy Le Parfum', brand: 'Carolina Herrera', price: 520.00, image: 'fotos/bad-boy-le-parfum.jpg',
        },
        {
            id: 12, name: 'La Belle', brand: 'Jean Paul Gaultier', price: 599.99, image: 'fotos/la-belle.jpg',
        },
        // Adicione mais produtos do seu catálogo aqui
    ];

    const whatsappNumber = '5541995252161'; // <--- SEU NÚMERO DE WHATSAPP AQUI
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
        // Pode adicionar frete ou outras taxas aqui no futuro
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
        let message = "Olá, Trentini Perfumes! Gostaria de fazer o seguinte pedido:\n\n";
        cart.forEach(item => {
            message += `*${item.name}* (${item.quantity}x) - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
        });
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        message += `\n*Total do Pedido: R$ ${total.toFixed(2).replace('.', ',')}*`;

        const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }


    // --- INICIALIZAÇÃO ---
    updateCartCount();
    renderProducts('product-grid-featured', products.slice(0, 4)); // Mostra 4 produtos na home
    renderProducts('product-grid-full', products); // Mostra todos no catálogo
    renderCartPage();

});
