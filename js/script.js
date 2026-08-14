document.addEventListener("DOMContentLoaded", function() {
    console.log("Portal Raízes Conectadas - Animado e Carregado!");

    // 1. Efeito de surgimento suave (Fade In) nos elementos principais ao carregar
    const elementosParaAnimar = document.querySelectorAll('.topo-site, .painel-escolha h1, .btn-estado');
    
    elementosParaAnimar.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        el.style.transitionDelay = `${index * 0.15}s`; // Cria um atraso em cascata elegante

        // Dispara a animação logo após carregar
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });

    // 2. Efeito de clique dinâmico nos botões de estado (feedback visual)
    const botoesEstados = document.querySelectorAll('.btn-estado');
    
    botoesEstados.forEach(botao => {
        botao.addEventListener('click', function(e) {
            // Efeito de leve zoom antes de redirecionar
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});
