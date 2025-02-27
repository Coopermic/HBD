// Efeito de tremor ao reproduzir o áudio
document.getElementById('roar').addEventListener('play', function() {
    document.body.classList.add('shake-effect');
    setTimeout(() => {
        document.body.classList.remove('shake-effect');
    }, 500); // Duração do tremor
});

// Efeito de confete ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});