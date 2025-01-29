// Função para carregar o conteúdo no card
function carregarConteudo(arquivo) {
    fetch(arquivo)
        .then(response => response.text())
        .then(data => {
            document.getElementById('conteudo').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar conteúdo:', error));
}

document.addEventListener('DOMContentLoaded', function () {
    VanillaTilt.init(document.querySelectorAll('.tilt'), {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.4,
        scale: 1.1, // Aumento do zoom
    });
});

// ----------------

