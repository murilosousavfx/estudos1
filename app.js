let numeroSecreto = gerarNumeroAletario();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
campo.innerHTML = texto; // Para diminuir a repetição de código.

}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value; // <- valor do input
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou! 🎉');
        exibirTextoNaTela('p', 'Você descobriu o número secreto.');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor! Tente novamente.');
    } else {
            exibirTextoNaTela('p', 'O número secreto é maior! Tente novamente.');
        }
    }
}

function gerarNumeroAletario() {
   return parseInt(Math.random() * 10 + 1);
}