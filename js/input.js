function controlarEntrada(evento) {
    if (evento.key === "w" && posicaoRaqueteEsquerdaY > 0) posicaoRaqueteEsquerdaY -= velocidadeRaquete;
    if (evento.key === "s" && posicaoRaqueteEsquerdaY < canvas.height - alturaRaquete) posicaoRaqueteEsquerdaY += velocidadeRaquete;
    if (evento.key === "ArrowUp" && posicaoRaqueteDireitaY > 0) posicaoRaqueteDireitaY -= velocidadeRaquete;
    if (evento.key === "ArrowDown" && posicaoRaqueteDireitaY < canvas.height - alturaRaquete) posicaoRaqueteDireitaY += velocidadeRaquete;
}
