document.addEventListener('DOMContentLoaded', () => {

    // --- BANCO DE DADOS DE PRODUTOS (EXTRAÍDO DO SEU CATÁLOGO) ---
    // IMPORTANTE: O nome do arquivo em 'image' deve ser igual ao nome do arquivo na pasta /fotos
    const products = [
        {
            id: 1,
            name: 'One Million',
            brand: 'Paco Rabanne',
            price: 499.99,
            image: 'fotos/one-million.jpg',
            description: 'Marcante e sedutor, com notas de canela, couro e âmbar.'
        },
        {
            id: 2,
            name: '212 VIP Black',
            brand: 'Carolina Herrera',
            price: 549.99,
            image: 'fotos/212-vip-black.jpg',
            description: 'Intenso e moderno, com notas de absinto, lavanda e baunilha.'
        },
        {
            id: 3,
            name: 'Sauvage',
            brand: 'Dior',
            price: 749.99,
            image: 'fotos/sauvage.jpg',
            description: 'Fresco e selvagem, com bergamota, pimenta e ambroxan.'
        },
        {
            id: 4,
            name: 'Invictus',
            brand: 'Paco Rabanne',
            price: 499.99,
            image: 'fotos/invictus.jpg',
            description: 'Vibrante e esportivo, com notas de grapefruit e folhas de louro.'
        },
        {
            id: 5,
            name: 'Acqua di Giò',
            brand: 'Giorgio Armani',
            price: 499.99,
            image: 'fotos/acqua-di-gio.jpg',
            description: 'Clássico e refrescante, com notas marinhas, bergamota e cedro.'
        },
        {
            id: 6,
            name: 'Scandal Pour Homme',
            brand: 'Jean Paul Gaultier',
            price: 599.99,
            image: 'fotos/scandal-pour-homme.jpg',
            description: 'Ousado e doce, com notas de caramelo, sálvia e fava tonka.'
        },
        {
            id: 7,
            name: 'Le Male Elixir',
            brand: 'Jean Paul Gaultier',
            price: 789.99,
            image: 'fotos/le-male-elixir.jpg',
            description: 'Intenso e envolvente, com notas de lavanda, fava tonka e mel.'
        },
        {
            id: 8,
            name: '212 VIP Rosé',
            brand: 'Carolina Herrera',
            price: 549.99,
            image: 'fotos/212-vip-rose.jpg',
            description: 'Floral frutado com notas de champagne rosé e flor de pêssego.'
        },
        {
            id: 9,
            name: 'La Vie Est Belle',
            brand: 'Lancôme',
            price: 619.90,
            image: 'fotos/la-vie-est-belle.jpg',
            description: 'Floral gourmand com notas de íris, jasmim e baunilha.'
        },
        {
            id: 10,
            name: 'Good Girl Blush Elixir',
            brand: 'Carolina Herrera',
            price: 649.99,
            image: 'fotos/good-girl-blush.jpg',
            description: 'Feminino, sensual e sofisticado, com rosa, ylang-ylang e baunilha.'
        },
        {
            id: 11,
            name: 'Bad Boy Le Parfum',
            brand: 'Carolina Herrera',
            price: 520.00,
            image: 'fotos/bad-boy-le-parfum.jpg',
            description: 'Aromático amadeirado. Ousado, sensual e marcante com boa fixação.'
        },
        {
            id: 12,
            name: 'La Belle',
            brand: 'Jean Paul Gaultier',
            price: 599.99,
            image: 'fotos/la-belle.jpg',
            description: 'Oriental baunilha. Feminino, sensual e envolvente com pera e baunilha.'
        },
    ];

    // --- CONFIGURAÇÕES ---
    const whatsappNumber = '5541995252161'; // <--- COLOQUE SEU NÚMERO DE WHATSAPP AQUI

    // --- ELEMENTOS DO DOM ---
    const productGrid = document.getElementById('product-grid');
    const cartIcon = document.getElementById('cart-icon');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCountSpan = document.getElementById('cart-count');
    const cartTotalPriceSpan = document.getElementById('cart-total-price');
    const checkoutBtn = document.getElementById('checkout-btn');

    let cart = JSON.parse(localStorage.getItem('trentiniCart')) || [];

    // --- FUNÇÕES PRINCIPAIS ---

    function renderProducts() {
        productGrid.innerHTML = '';
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card animate-on-scroll';
            card.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <span class="price">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                    <button class="btn-secondary add-to-cart-btn" data-id="${product.id}">Adicionar ao Carrinho</button>
                </div>
            `;
            productGrid.appendChild(card);
        });
    }
    
    function renderCart() {
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="cart-empty-message">Seu carrinho está vazio.</p>';
        } else {
            cart.forEach(item => {
                const cartItemDiv = document.createElement('div');
                cartItemDiv.className = 'cart-item';
                cartItemDiv.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>R$ ${item.price.toFixed(2).replace('.', ',')}</p>
                    </div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" data-id="${item.id}" data-action="decrease">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" data-id="${item.id}" data-action="increase">+</button>
                        <button class="remove-item-btn" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItemDiv);
            });
        }
        updateCartInfo();
    }
    
    function updateCartInfo() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        
        cartCountSpan.textContent = totalItems;
        cartTotalPriceSpan.textContent = `R$ ${totalPrice.toFixed(2).replace('.', ',')}`;
        
        localStorage.setItem('trentiniCart', JSON.stringify(cart));
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        renderCart();
        openCart();
    }
    
    function handleQuantityChange(productId, action) {
        const item = cart.find(i => i.id === productId);
        if (!item) return;

        if (action === 'increase') {
            item.quantity++;
        } else if (action === 'decrease') {
            item.quantity--;
            if (item.quantity === 0) {
                cart = cart.filter(i => i.id !== productId);
            }
        }
        renderCart();
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        renderCart();
    }
    
    function openCart() {
        cartSidebar.classList.add('open');
        cartOverlay.classList.add('open');
    }
    
    function closeCart() {
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('open');
    }
    
    function generateWhatsAppMessage() {
        if (cart.length === 0) {
            alert("Seu carrinho está vazio!");
            return;
        }

        let message = "Olá, Trentini Perfumes! Gostaria de fazer o seguinte pedido:\n\n";
        cart.forEach(item => {
            message += `*${item.name}* (${item.quantity}x) - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
        });
        const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        message += `\n*Total do Pedido: R$ ${totalPrice.toFixed(2).replace('.', ',')}*`;

        const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }

    // --- EVENT LISTENERS ---
    
    productGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
        }
    });

    cartItemsContainer.addEventListener('click', (e) => {
        const target = e.target.closest('button');
        if (!target) return;
        
        const productId = parseInt(target.dataset.id);
        
        if (target.classList.contains('quantity-btn')) {
            const action = target.dataset.action;
            handleQuantityChange(productId, action);
        } else if (target.classList.contains('remove-item-btn')) {
            removeFromCart(productId);
        }
    });

    cartIcon.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    checkoutBtn.addEventListener('click', generateWhatsAppMessage);

    // --- INICIALIZAÇÃO ---
    renderProducts();
    renderCart();
});
