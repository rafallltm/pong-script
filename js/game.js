function desenharBola() {
    ctx.beginPath();
    ctx.arc(posicaoBolaX, posicaoBolaY, raioBola, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

function desenharRaquetes() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, posicaoRaqueteEsquerdaY, larguraRaquete, alturaRaquete);
    ctx.fillRect(canvas.width - larguraRaquete, posicaoRaqueteDireitaY, larguraRaquete, alturaRaquete);
}

function desenharPontuacao() {
    document.getElementById("pontuacao-esquerda").textContent = pontuacaoEsquerda;
    document.getElementById("pontuacao-direita").textContent = pontuacaoDireita;
}

function atualizarPosicaoBola() {
    posicaoBolaX += velocidadeBolaX;
    posicaoBolaY += velocidadeBolaY;

    if (posicaoBolaY - raioBola < 0 || posicaoBolaY + raioBola > canvas.height) {
        velocidadeBolaY = -velocidadeBolaY;
    }

    if (
        posicaoBolaX - raioBola < larguraRaquete &&
        posicaoBolaY > posicaoRaqueteEsquerdaY &&
        posicaoBolaY < posicaoRaqueteEsquerdaY + alturaRaquete
    ) {
        velocidadeBolaX = -velocidadeBolaX;
        pontuacaoEsquerda++;
        desenharPontuacao();
    }

    if (
        posicaoBolaX + raioBola > canvas.width - larguraRaquete &&
        posicaoBolaY > posicaoRaqueteDireitaY &&
        posicaoBolaY < posicaoRaqueteDireitaY + alturaRaquete
    ) {
        velocidadeBolaX = -velocidadeBolaX;
        pontuacaoDireita++;
        desenharPontuacao();
    }

    if (posicaoBolaX - raioBola < 0 || posicaoBolaX + raioBola > canvas.width) {
        posicaoBolaX = canvas.width / 2;
        posicaoBolaY = canvas.height / 2;
        velocidadeBolaX = Math.random() < 0.5 ? 2 : -2;
        velocidadeBolaY = Math.random() < 0.5 ? 2 : -2;
    }
}
