// CÓDIGO DEFINITIVO cart.js - CATÁLOGO COMPLETO
document.addEventListener('DOMContentLoaded', () => {

    // ===================================================================================
    // IMPORTANTE: ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR NO FUTURO!
    // Para adicionar/remover produtos ou alterar preços, basta editar esta lista.
    // O nome da 'image' deve corresponder exatamente ao nome do arquivo na pasta /fotos
    // ===================================================================================
    const products = [
        // --- PÁGINA 1: MASCULINOS POPULARES ---
        { id: 1, name: 'One Million', brand: 'Paco Rabanne', price: 499.99, image: 'fotos/one-million.jpg' },
        { id: 2, name: '212 VIP Black', brand: 'Carolina Herrera', price: 549.99, image: 'fotos/212-vip-black.jpg' },
        { id: 3, name: 'Sauvage', brand: 'Dior', price: 749.99, image: 'fotos/sauvage.jpg' },
        { id: 4, name: 'Invictus', brand: 'Paco Rabanne', price: 499.99, image: 'fotos/invictus.jpg' },
        { id: 5, name: 'Acqua di Giò', brand: 'Giorgio Armani', price: 499.99, image: 'fotos/acqua-di-gio.jpg' },
        { id: 6, name: 'Scandal Pour Homme', brand: 'Jean Paul Gaultier', price: 599.99, image: 'fotos/scandal-pour-homme.jpg' },
        { id: 7, name: 'Le Male Elixir', brand: 'Jean Paul Gaultier', price: 789.99, image: 'fotos/le-male-elixir.jpg' },
        { id: 8, name: 'Phantom', brand: 'Paco Rabanne', price: 549.99, image: 'fotos/phantom.jpg' },

        // --- PÁGINA 2: FEMININOS POPULARES ---
        { id: 9, name: '212 VIP Rosé', brand: 'Carolina Herrera', price: 549.99, image: 'fotos/212-vip-rose.jpg' },
        { id: 10, name: 'La Nuit Trésor', brand: 'Lancôme', price: 619.99, image: 'fotos/la-nuit-tresor.jpg' },
        { id: 11, name: 'Angel', brand: 'Mugler', price: 749.99, image: 'fotos/angel.jpg' },
        { id: 12, name: 'Good Girl Blush Elixir', brand: 'Carolina Herrera', price: 649.99, image: 'fotos/good-girl-blush-elixir.jpg' },
        { id: 13, name: 'La Vie Est Belle', brand: 'Lancôme', price: 619.90, image: 'fotos/la-vie-est-belle.jpg' },
        { id: 14, name: 'Scandal', brand: 'Jean Paul Gaultier', price: 549.99, image: 'fotos/scandal-feminino.jpg' },
        { id: 15, name: 'Miss Dior Blooming Bouquet', brand: 'Dior', price: 649.99, image: 'fotos/miss-dior-blooming-bouquet.jpg' },
        { id: 16, name: 'La Belle', brand: 'Jean Paul Gaultier', price: 599.99, image: 'fotos/la-belle.jpg' },

        // --- PÁGINA 3: LINHA BAD BOY ---
        { id: 17, name: 'Bad Boy', brand: 'Carolina Herrera', price: 499.99, image: 'fotos/bad-boy.jpg' },
        { id: 18, name: 'Bad Boy Le Parfum', brand: 'Carolina Herrera', price: 520.00, image: 'fotos/bad-boy-le-parfum.jpg' },
        { id: 19, name: 'Bad Boy Cobalt', brand: 'Carolina Herrera', price: 509.99, image: 'fotos/bad-boy-cobalt.jpg' },
        { id: 20, name: 'Bad Boy Extreme', brand: 'Carolina Herrera', price: 519.99, image: 'fotos/bad-boy-extreme.jpg' },
        { id: 21, name: 'Bad Boy Dazzling Garden', brand: 'Carolina Herrera', price: 519.98, image: 'fotos/bad-boy-dazzling-garden.jpg' },
        { id: 22, name: 'Bad Boy Superstars', brand: 'Carolina Herrera', price: 529.99, image: 'fotos/bad-boy-superstars.jpg' },
        { id: 23, name: 'Bad Boy Sparkling Ice', brand: 'Carolina Herrera', price: 536.00, image: 'fotos/bad-boy-sparkling-ice.jpg' },
        { id: 24, name: '212 VIP Men EDT', brand: 'Carolina Herrera', price: 539.99, image: 'fotos/212-vip-men-edt.jpg' },

        // --- PÁGINA 4: LINHA 1 MILLION E LE MALE ---
        { id: 25, name: '1 Million Royal', brand: 'Paco Rabanne', price: 540.00, image: 'fotos/1-million-royal.jpg' },
        { id: 26, name: '1 Million Elixir', brand: 'Paco Rabanne', price: 519.99, image: 'fotos/1-million-elixir.jpg' },
        { id: 27, name: '1 Million Gold', brand: 'Paco Rabanne', price: 499.99, image: 'fotos/1-million-gold.jpg' },
        { id: 28, name: 'Le Male EDT', brand: 'Jean Paul Gaultier', price: 549.99, image: 'fotos/le-male-edt.jpg' },
        { id: 29, name: 'Le Male Le Parfum', brand: 'Jean Paul Gaultier', price: 599.99, image: 'fotos/le-male-le-parfum.jpg' },
        { id: 30, name: 'Ultra Male', brand: 'Jean Paul Gaultier', price: 599.99, image: 'fotos/ultra-male.jpg' },
        { id: 31, name: 'Le Beau Intense', brand: 'Jean Paul Gaultier', price: 629.99, image: 'fotos/le-beau-intense.jpg' },

        // --- PÁGINA 5: DIOR, CK, FERRARI, VERSACE, ANIMALE ---
        { id: 32, name: 'Dior Homme EDT', brand: 'Dior', price: 799.99, image: 'fotos/dior-homme-edt.jpg' },
        { id: 33, name: 'Dior Fahrenheit', brand: 'Dior', price: 799.99, image: 'fotos/dior-fahrenheit.jpg' },
        { id: 34, name: 'CK Be', brand: 'Calvin Klein', price: 229.99, image: 'fotos/ck-be.jpg' },
        { id: 35, name: 'CK One', brand: 'Calvin Klein', price: 249.99, image: 'fotos/ck-one.jpg' },
        { id: 36, name: 'Ferrari Black', brand: 'Ferrari', price: 239.99, image: 'fotos/ferrari-black.jpg' },
        { id: 37, name: 'Ferrari Red', brand: 'Ferrari', price: 209.99, image: 'fotos/ferrari-red.jpg' },
        { id: 38, name: 'Kit Animale', brand: 'Animale', price: 399.99, image: 'fotos/kit-animale.jpg' },
        { id: 39, name: 'Versace Eros', brand: 'Versace', price: 489.99, image: 'fotos/versace-eros.jpg' },
        
        // --- PÁGINA 6: LINHA SCANDAL E INVICTUS ---
        { id: 40, name: 'Scandal Le Parfum', brand: 'Jean Paul Gaultier', price: 549.99, image: 'fotos/scandal-le-parfum-masculino.jpg' },
        { id: 41, name: 'Scandal Absolu', brand: 'Jean Paul Gaultier', price: 579.99, image: 'fotos/scandal-absolu-masculino.jpg' },
        { id: 42, name: 'Invictus Victory', brand: 'Paco Rabanne', price: 539.99, image: 'fotos/invictus-victory.jpg' },
        { id: 43, name: 'Invictus Victory Elixir', brand: 'Paco Rabanne', price: 559.99, image: 'fotos/invictus-victory-elixir.jpg' }, // Nome inferido
        { id: 44, name: 'Phantom Parfum', brand: 'Paco Rabanne', price: 620.00, image: 'fotos/phantom-parfum.jpg' },
        { id: 45, name: 'Phantom Legion', brand: 'Paco Rabanne', price: 489.99, image: 'fotos/phantom-legion.jpg' },
        
        // --- PÁGINA 7: LINHA SILVER SCENT ---
        { id: 46, name: 'Silver Scent', brand: 'Jacques Bogart', price: 199.99, image: 'fotos/silver-scent.jpg' },
        { id: 47, name: 'Silver Scent Intense', brand: 'Jacques Bogart', price: 209.99, image: 'fotos/silver-scent-intense.jpg' },
        { id: 48, name: 'Silver Scent Pure', brand: 'Jacques Bogart', price: 249.99, image: 'fotos/silver-scent-pure.jpg' },
        { id: 49, name: 'Silver Scent Infinite', brand: 'Jacques Bogart', price: 229.99, image: 'fotos/silver-scent-infinite.jpg' },
        { id: 50, name: 'Silver Scent Midnight', brand: 'Jacques Bogart', price: 239.99, image: 'fotos/silver-scent-midnight.jpg' },
        { id: 51, name: 'Silver Scent Aqua', brand: 'Jacques Bogart', price: 225.00, image: 'fotos/silver-scent-aqua.jpg' },
        { id: 52, name: 'Silver Scent Deep', brand: 'Jacques Bogart', price: 219.99, image: 'fotos/silver-scent-deep.jpg' },
        
        // --- PÁGINA 8: LINHA GOOD GIRL E SCANDAL FEMININO ---
        { id: 53, name: 'Scandal Le Parfum Intense', brand: 'Jean Paul Gaultier', price: 539.99, image: 'fotos/scandal-le-parfum-intense.jpg' },
        { id: 54, name: 'Scandal Absolu', brand: 'Jean Paul Gaultier', price: 529.99, image: 'fotos/scandal-absolu-feminino.jpg' },
        { id: 55, name: 'La Belle Paradise Garden', brand: 'Jean Paul Gaultier', price: 549.99, image: 'fotos/la-belle-paradise-garden.jpg' },
        { id: 56, name: 'Good Girl EDP', brand: 'Carolina Herrera', price: 579.99, image: 'fotos/good-girl.jpg' },
        { id: 57, name: 'Very Good Girl', brand: 'Carolina Herrera', price: 559.99, image: 'fotos/very-good-girl.jpg' },
        { id: 58, name: 'Very Good Girl Glam', brand: 'Carolina Herrera', price: 639.99, image: 'fotos/very-good-girl-glam.jpg' },
        
        // --- PÁGINA 9: LINHA ANGEL E LADY MILLION ---
        { id: 59, name: 'Angel Elixir', brand: 'Mugler', price: 849.99, image: 'fotos/angel-elixir.jpg' },
        { id: 60, name: 'Angel Nova', brand: 'Mugler', price: 699.99, image: 'fotos/angel-nova.jpg' },
        { id: 61, name: 'Angel EDT', brand: 'Mugler', price: 549.99, image: 'fotos/angel-edt.jpg' },
        { id: 62, name: 'Lady Million', brand: 'Paco Rabanne', price: 499.99, image: 'fotos/lady-million.jpg' },
        { id: 63, name: 'Lady Million Royal', brand: 'Paco Rabanne', price: 509.99, image: 'fotos/lady-million-royal.jpg' },
        { id: 64, name: 'Lady Million Prive', brand: 'Paco Rabanne', price: 490.00, image: 'fotos/lady-million-prive.jpg' },
        { id: 65, name: 'Lady Million Fabulous', brand: 'Paco Rabanne', price: 425.00, image: 'fotos/lady-million-fabulous.jpg' },
        
        // --- PÁGINA 10: LINHA OLYMPÉA E LIBRE ---
        { id: 66, name: 'Olympéa', brand: 'Paco Rabanne', price: 499.99, image: 'fotos/olympea.jpg' },
        { id: 67, name: 'Olympéa Flora', brand: 'Paco Rabanne', price: 509.00, image: 'fotos/olympea-flora.jpg' },
        { id: 68, name: 'Olympéa Solar Intense', brand: 'Paco Rabanne', price: 549.99, image: 'fotos/olympea-solar-intense.jpg' },
        { id: 69, name: 'Olympéa Aqua', brand: 'Paco Rabanne', price: 480.99, image: 'fotos/olympea-aqua.jpg' },
        { id: 70, name: 'Olympéa Blossom', brand: 'Paco Rabanne', price: 459.99, image: 'fotos/olympea-blossom.jpg' },
        { id: 71, name: 'Libre', brand: 'YSL', price: 699.99, image: 'fotos/libre.jpg' },
        { id: 72, name: 'Libre Le Parfum', brand: 'YSL', price: 759.00, image: 'fotos/libre-le-parfum.jpg' },
        { id: 73, name: 'Libre Intense', brand: 'YSL', price: 799.99, image: 'fotos/libre-intense.jpg' },
    ];
    
    // ===================================================================================
    // DAQUI PARA BAIXO, VOCÊ NÃO PRECISA MAIS MEXER. A LÓGICA É AUTOMÁTICA.
    // ===================================================================================

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
            // Imagem do produto. Se o arquivo não existir, mostra o placeholder local
            card.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}"
                         onerror="this.onerror=null;this.src='fotos/placeholder.jpg';">
                </div>
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
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img"
                         onerror="this.onerror=null;this.src='fotos/placeholder.jpg';">
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
