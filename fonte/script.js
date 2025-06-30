document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DO CURSOR PERSONALIZADO ---
    const cursor = document.querySelector('.custom-cursor');
    const interactiveElements = document.querySelectorAll('a, button, .product-card');

    window.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
    });

    // --- LÓGICA DO HEADER AO ROLAR A PÁGINA ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- LÓGICA DE ANIMAÇÃO AO ROLAR A PÁGINA (INTERSECTION OBSERVER) ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Opcional: Desconectar o observer depois que a animação acontece
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 // A animação começa quando 10% do elemento está visível
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // --- LÓGICA DE EFEITO 3D NOS CARDS ---
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            const rotateY = (x / rect.width) * 10; // Max 5 graus
            const rotateX = (y / rect.height) * -10; // Max 5 graus

            if (!card.classList.contains('is-visible')) return;

            card.style.transform = `translateY(-15px) perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) perspective(1000px) rotateY(0deg) rotateX(0deg)';
        });
    });

});
