const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");

// Configurações iniciais do jogo
const larguraRaquete = 10, alturaRaquete = 100;
const raioBola = 10;
let posicaoBolaX = canvas.width / 2, posicaoBolaY = canvas.height / 2;
let velocidadeBolaX = Math.random() < 0.5 ? 2 : -2;
let velocidadeBolaY = Math.random() < 0.5 ? 2 : -2;
let posicaoRaqueteEsquerdaY = (canvas.height - alturaRaquete) / 2;
let posicaoRaqueteDireitaY = (canvas.height - alturaRaquete) / 2;

let pontuacaoEsquerda = 0, pontuacaoDireita = 0;
const velocidadeRaquete = 20;

// Função de controle de entrada
document.addEventListener("keydown", controlarEntrada);

// Loop do jogo
function loopDoJogo() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    desenharBola();
    desenharRaquetes();
    atualizarPosicaoBola();
    desenharPontuacao();
    requestAnimationFrame(loopDoJogo);
}

// Inicia o jogo
loopDoJogo();
