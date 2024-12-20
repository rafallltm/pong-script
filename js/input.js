function handleInput(event) {
    if (event.key === "w" && paddleLeftY > 0) paddleLeftY -= paddleSpeed;
    if (event.key === "s" && paddleLeftY < canvas.height - paddleHeight) paddleLeftY += paddleSpeed;
    if (event.key === "ArrowUp" && paddleRightY > 0) paddleRightY -= paddleSpeed;
    if (event.key === "ArrowDown" && paddleRightY < canvas.height - paddleHeight) paddleRightY += paddleSpeed;
}
