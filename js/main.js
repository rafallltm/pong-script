const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");

// Configurações iniciais do jogo
const paddleWidth = 10, paddleHeight = 100;
const ballRadius = 10;
let ballX = canvas.width / 2, ballY = canvas.height / 2;
let ballSpeedX = Math.random() < 0.5 ? 2 : -2;
let ballSpeedY = Math.random() < 0.5 ? 2 : -2;
let paddleLeftY = (canvas.height - paddleHeight) / 2;
let paddleRightY = (canvas.height - paddleHeight) / 2;

let scoreLeft = 0, scoreRight = 0;
const paddleSpeed = 20;

// Função de controle de entrada
document.addEventListener("keydown", handleInput);

// Loop do jogo
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddles();
    updateBallPosition();
    drawScore();
    requestAnimationFrame(gameLoop);
}

// Inicia o jogo
gameLoop();
