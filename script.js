// Função para carregar o conteúdo no card
function carregarConteudo(arquivo) {
    fetch(arquivo)
        .then(response => response.text())
        .then(data => {
            document.getElementById('conteudo').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar conteúdo:', error));
}
