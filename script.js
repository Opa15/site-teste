// Variável global para armazenar o nome
var nomeAtual = "";

// Função que exibe uma janela de confirmação com duas opções
function confirmarEscolha() {
    // O confirm retorna true se o usuário clicar em "Sim" e false se clicar em "Não"
    var escolha = window.confirm('Você é SaaS?');

    // Obtém a referência do título, botão e do parágrafo
    var titulo = document.querySelector('h1');
    var botao = document.querySelector('button');
    var paragrafo = document.getElementById('mensagemNome') || document.createElement('p');

    // Verifica a opção escolhida
    if (escolha) {
        obterNome();
    } else {
        alert('Você escolheu Não. Você não é SaaS.');
        // Esconde o botão ao clicar em "Cancelar"
        botao.style.display = 'none';
    }
}

// Função que obtém o nome do usuário
function obterNome() {
    // O prompt retorna o valor inserido pelo usuário
    var novoNome = window.prompt('Qual é o seu nome?');
    
    // Verifica se o usuário inseriu um nome
    if (novoNome !== null && novoNome !== "") {
        // Atualiza a variável global com o novo nome
        nomeAtual = novoNome;

        // Chama a função para exibir a mensagem com o nome atualizado
        exibirNome();
    }
}

// Função que exibe uma janela de alerta com o nome atualizado abaixo do título e acima do botão
function exibirNome() {
    // Obtém a referência do contêiner
    var container = document.querySelector('.container');
    
    // Cria ou obtém o elemento parágrafo dentro do contêiner
    var paragrafo = document.getElementById('mensagemNome') || document.createElement('p');
    
    // Adiciona o nome ao texto do parágrafo
    paragrafo.textContent = "Olá, " + nomeAtual + "! Bem-vindo ao SaaS";

    // Adiciona ou atualiza o parágrafo abaixo do título
    container.insertBefore(paragrafo, botao);
}
