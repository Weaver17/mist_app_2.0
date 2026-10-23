"use client";

import { useEffect, useRef } from "react";

export function PongGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx) return;

        const width = 800;
        const height = 450;
        const paddleHeight = 80;
        const paddleWidth = 12;
        const ballRadius = 8;

        let playerY = (height - paddleHeight) / 2;
        let opponentY = playerY;
        let ballX = width / 2;
        let ballY = height / 2;
        let ballDX = 5;
        let ballDY = 3;
        let playerScore = 0;
        let opponentScore = 0;
        let animationFrame = 0;

        const keys = new Set<string>();

        const onKeyDown = (event: KeyboardEvent) => {
            if (["ArrowUp", "ArrowDown", "w", "s"].includes(event.key)) {
                event.preventDefault();
                keys.add(event.key.toLowerCase());
            }
        };

        const onKeyUp = (event: KeyboardEvent) => {
            keys.delete(event.key.toLowerCase());
        };

        const draw = () => {
            ctx.fillStyle = "#09090b";
            ctx.fillRect(0, 0, width, height);

            ctx.setLineDash([10, 10]);
            ctx.strokeStyle = "#52525b";
            ctx.beginPath();
            ctx.moveTo(width / 2, 0);
            ctx.lineTo(width / 2, height);
            ctx.stroke();
            ctx.setLineDash([]);

            ctx.fillStyle = "#fff";
            ctx.fillRect(24, playerY, paddleWidth, paddleHeight);
            ctx.fillRect(width - 36, opponentY, paddleWidth, paddleHeight);

            ctx.beginPath();
            ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
            ctx.fill();

            ctx.font = "32px sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(`${playerScore}   ${opponentScore}`, width / 2, 50);
        };

        const resetBall = (direction: number) => {
            ballX = width / 2;
            ballY = height / 2;
            ballDX = 5 * direction;
            ballDY = Math.random() * 4 - 2;
        };

        const update = () => {
            if (keys.has("arrowup") || keys.has("w")) playerY -= 6;
            if (keys.has("arrowdown") || keys.has("s")) playerY += 6;
            playerY = Math.max(0, Math.min(height - paddleHeight, playerY));

            // A basic AI opponent that tracks the ball.
            opponentY += (ballY - (opponentY + paddleHeight / 2)) * 0.06;
            opponentY = Math.max(0, Math.min(height - paddleHeight, opponentY));

            ballX += ballDX;
            ballY += ballDY;

            if (ballY <= ballRadius || ballY >= height - ballRadius) {
                ballDY *= -1;
            }

            const playerX = 24;
            const opponentX = width - 36;

            if (
                ballDX < 0 &&
                ballX - ballRadius <= playerX + paddleWidth &&
                ballY >= playerY &&
                ballY <= playerY + paddleHeight
            ) {
                ballDX *= -1;
            }

            if (
                ballDX > 0 &&
                ballX + ballRadius >= opponentX &&
                ballY >= opponentY &&
                ballY <= opponentY + paddleHeight
            ) {
                ballDX *= -1;
            }

            if (ballX < 0) {
                opponentScore += 1;
                resetBall(1);
            } else if (ballX > width) {
                playerScore += 1;
                resetBall(-1);
            }

            draw();
            animationFrame = requestAnimationFrame(update);
        };

        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("keyup", onKeyUp);
        update();

        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("keyup", onKeyUp);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            width={800}
            height={450}
            aria-label="Pong game. Use W/S or the up and down arrow keys to move."
            className="w-full max-w-[800px] aspect-[16/9] rounded-lg"
        />
    );
}
