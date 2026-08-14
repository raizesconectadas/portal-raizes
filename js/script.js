document.addEventListener("DOMContentLoaded", function() {
    console.log("Portal Raízes Conectadas - Animado e Carregado!");

    // Efeito de surgimento suave (Fade In) em cascata
    const elementosParaAnimar = document.querySelectorAll('.topo-site, .painel-escolha h1, .btn-estado');
    
    elementosParaAnimar.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        el.style.transitionDelay = `${index * 0.15}s`;

        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });

    // Feedback visual de clique nos botões
    const botoesEstados = document.querySelectorAll('.btn-estado');
    
    botoesEstados.forEach(botao => {
        botao.addEventListener('click', function(e) {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});
