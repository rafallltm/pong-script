function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

function drawPaddles() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, paddleLeftY, paddleWidth, paddleHeight);
    ctx.fillRect(canvas.width - paddleWidth, paddleRightY, paddleWidth, paddleHeight);
}

function drawScore() {
    document.getElementById("score-left").textContent = scoreLeft;
    document.getElementById("score-right").textContent = scoreRight;
}

function updateBallPosition() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballY - ballRadius < 0 || ballY + ballRadius > canvas.height) {
        ballSpeedY = -ballSpeedY;
    }

    if (ballX - ballRadius < paddleWidth && ballY > paddleLeftY && ballY < paddleLeftY + paddleHeight) {
        ballSpeedX = -ballSpeedX;
        scoreLeft++;
        drawScore();
    }

    if (ballX + ballRadius > canvas.width - paddleWidth && ballY > paddleRightY && ballY < paddleRightY + paddleHeight) {
        ballSpeedX = -ballSpeedX;
        scoreRight++;
        drawScore();
    }

    if (ballX - ballRadius < 0 || ballX + ballRadius > canvas.width) {
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
        ballSpeedX = Math.random() < 0.5 ? 2 : -2;
        ballSpeedY = Math.random() < 0.5 ? 2 : -2;
    }
}
