"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "../../custom/components/buttons/c_button";
import { P } from "@/typography/custom";

export function PongGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const keysRef = useRef(new Set<string>());
    const gameRef = useRef({
        playerY: (450 - 80) / 2,
        opponentY: (450 - 80) / 2,
        ballX: 800 / 2,
        ballY: 450 / 2,
        ballDX: 12,
        ballDY: 3,
        playerScore: 0,
        opponentScore: 0,
    });
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [resetCount, setResetCount] = useState(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx) return;

        const width = 800;
        const height = 450;
        const paddleHeight = 80;
        const paddleWidth = 12;
        const ballRadius = 8;

        const game = gameRef.current;
        let animationFrame = 0;

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
            ctx.fillRect(24, game.playerY, paddleWidth, paddleHeight);
            ctx.fillRect(width - 36, game.opponentY, paddleWidth, paddleHeight);

            ctx.beginPath();
            ctx.arc(game.ballX, game.ballY, ballRadius, 0, Math.PI * 2);
            ctx.fill();

            ctx.font = "32px sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(
                `${game.playerScore}   ${game.opponentScore}`,
                width / 2,
                50,
            );
        };

        const resetBall = (direction: number) => {
            game.ballX = width / 2;
            game.ballY = height / 2;
            game.ballDX = 12 * direction;
            game.ballDY = Math.random() * 4 - 2;
        };

        const update = () => {
            if (keysRef.current.has("arrowup") || keysRef.current.has("w")) {
                game.playerY -= 6;
            }
            if (keysRef.current.has("arrowdown") || keysRef.current.has("s")) {
                game.playerY += 6;
            }
            game.playerY = Math.max(
                0,
                Math.min(height - paddleHeight, game.playerY),
            );

            // A basic AI opponent that tracks the ball.
            game.opponentY +=
                (game.ballY - (game.opponentY + paddleHeight / 2)) * 0.06;
            game.opponentY = Math.max(
                0,
                Math.min(height - paddleHeight, game.opponentY),
            );

            game.ballX += game.ballDX;
            game.ballY += game.ballDY;

            if (game.ballY <= ballRadius || game.ballY >= height - ballRadius) {
                game.ballDY *= -1;
            }

            const playerX = 24;
            const opponentX = width - 36;

            if (
                game.ballDX < 0 &&
                game.ballX - ballRadius <= playerX + paddleWidth &&
                game.ballY >= game.playerY &&
                game.ballY <= game.playerY + paddleHeight
            ) {
                game.ballDX *= -1;
            }

            if (
                game.ballDX > 0 &&
                game.ballX + ballRadius >= opponentX &&
                game.ballY >= game.opponentY &&
                game.ballY <= game.opponentY + paddleHeight
            ) {
                game.ballDX *= -1;
            }

            if (game.ballX < 0) {
                game.opponentScore += 1;
                resetBall(1);
            } else if (game.ballX > width) {
                game.playerScore += 1;
                resetBall(-1);
            }

            draw();
            animationFrame = requestAnimationFrame(update);
        };

        draw();
        if (isPlaying) animationFrame = requestAnimationFrame(update);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, [isPlaying, resetCount]);

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (["ArrowUp", "ArrowDown", "w", "s"].includes(event.key)) {
                event.preventDefault();
                keysRef.current.add(event.key.toLowerCase());
            }
        };

        const onKeyUp = (event: KeyboardEvent) => {
            keysRef.current.delete(event.key.toLowerCase());
        };

        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("keyup", onKeyUp);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("keyup", onKeyUp);
        };
    }, []);

    const resetGame = () => {
        const game = gameRef.current;
        game.playerY = (450 - 80) / 2;
        game.opponentY = game.playerY;
        game.ballX = 800 / 2;
        game.ballY = 450 / 2;
        game.ballDX = 12;
        game.ballDY = 3;
        game.playerScore = 0;
        game.opponentScore = 0;
        keysRef.current.clear();
        setIsPlaying(false);
        setHasStarted(false);
        setResetCount((count) => count + 1);
    };

    return (
        <div className="flex w-full flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-3">
                <Button
                    type="button"
                    onClick={() => {
                        setIsPlaying(true);
                        setHasStarted(true);
                    }}
                    disabled={isPlaying}
                    // className="rounded-md bg-primary px-4 py-2 text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {hasStarted ? "Resume" : "Start"}
                </Button>
                <Button
                    type="button"
                    onClick={() => setIsPlaying(false)}
                    disabled={!isPlaying}
                    // className="rounded-md border border-secondary px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Pause
                </Button>
                <Button
                    type="button"
                    onClick={resetGame}
                    variant="secondary"
                    // className="rounded-md border border-secondary px-4 py-2"
                >
                    Reset
                </Button>
            </div>
            <P>
                {isPlaying
                    ? "Game in progress"
                    : hasStarted
                      ? "Game paused"
                      : "Press Start to play"}
                {" · "}
                Move with W/S or the up/down arrow keys.
            </P>
            <canvas
                ref={canvasRef}
                width={800}
                height={450}
                aria-label="Pong game. Use W/S or the up and down arrow keys to move."
                className="w-full max-w-[800px] aspect-[16/9] rounded-lg"
            />
        </div>
    );
}
