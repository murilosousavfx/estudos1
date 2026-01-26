let listadeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAletario();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
campo.innerHTML = texto; // Para diminuir a repetição de código.

}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value; // <- valor do input
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou! 🎉');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); // seleciona o botão e habilita o botão após acertar
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor! Tente novamente.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior! Tente novamente.');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAletario() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listadeNumerosSorteados.length;
   
   if (quantidadeDeElementosNaLista == numeroLimite) {
    listadeNumerosSorteados = []; // reseta a lista se já houver 3 números sorteados
   }

   if (listadeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAletario(); // chama a função novamente se o número já foi sorteado
   } else {
    listadeNumerosSorteados.push(numeroEscolhido); // adiciona o número à lista de números sorteados
    return numeroEscolhido;
   }
}

function limparCampo() { // limpa o campo do input após cada tentativa
    chute = document.querySelector('input'); 
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAletario();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true); // desabilita o botão após reiniciar o jogo
} 