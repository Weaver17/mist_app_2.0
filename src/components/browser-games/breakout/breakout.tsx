"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import {
    COLORS,
    FIXED_TIME_STEP,
    GAME_HEIGHT,
    GAME_WIDTH,
} from "./breakout-types";

import type { GameState, InputState } from "./breakout-types";

import {
    createInitialGameState,
    resetGame as resetEngine,
    updateGame,
} from "./breakout-engine";
import { H2, P } from "@/typography/custom";
import { Button } from "@/components/custom/components/buttons/c_button";
import StartPauseReset from "../components/start-pause-reset";
import GameRules from "../components/game-rules";
import { Label } from "@/components/custom/components/form/c_label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/custom/components/form/c_select";
import { Difficulty, GameStatus } from "../shared/game-types";

type BreakoutGameProps = {
    initialDifficulty: Difficulty;
};

// --------------------------------------------------
// Component
// --------------------------------------------------

export default function BreakoutGame({
    initialDifficulty = "medium",
}: BreakoutGameProps) {
    // -----------------------------------------------
    // Refs
    // -----------------------------------------------

    const canvasRef = useRef<HTMLCanvasElement>(null);

    const gameRef = useRef<GameState>(
        createInitialGameState(initialDifficulty),
    );

    const keysRef = useRef<Set<string>>(new Set());

    const mouseXRef = useRef<number | null>(null);

    const animationFrameRef = useRef<number | null>(null);

    const previousTimeRef = useRef<number>(0);

    const accumulatorRef = useRef<number>(0);

    const difficultyRef = useRef<Difficulty>(initialDifficulty);

    // -----------------------------------------------
    // React state
    // -----------------------------------------------

    const [status, setStatus] = useState<GameStatus>("ready");

    const [score, setScore] = useState(0);

    const [lives, setLives] = useState(3);

    const [difficulty, setDifficulty] = useState<Difficulty>(initialDifficulty);

    // -----------------------------------------------
    // Synchronize UI
    // -----------------------------------------------

    const syncUI = useCallback(() => {
        const game = gameRef.current;

        setStatus(game.status);

        setScore(game.score);

        setLives(game.lives);
    }, []);

    // -----------------------------------------------
    // Start game
    // -----------------------------------------------

    const startGame = useCallback(() => {
        const game = gameRef.current;

        if (game.status === "gameOver" || game.status === "won") {
            resetEngine(game, difficultyRef.current);
        }

        game.status = "playing";

        previousTimeRef.current = 0;

        accumulatorRef.current = 0;

        syncUI();
    }, [syncUI]);

    // -----------------------------------------------
    // Pause game
    // -----------------------------------------------

    const pauseGame = useCallback(() => {
        const game = gameRef.current;

        if (game.status !== "playing") {
            return;
        }

        game.status = "paused";

        keysRef.current.clear();

        mouseXRef.current = null;

        previousTimeRef.current = 0;

        accumulatorRef.current = 0;

        syncUI();
    }, [syncUI]);

    // -----------------------------------------------
    // Reset game
    // -----------------------------------------------

    const handleReset = useCallback(() => {
        resetEngine(gameRef.current, difficultyRef.current);

        keysRef.current.clear();

        mouseXRef.current = null;

        previousTimeRef.current = 0;

        accumulatorRef.current = 0;

        syncUI();
    }, [syncUI]);

    // -----------------------------------------------
    // Keyboard input
    // -----------------------------------------------

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const key = event.key.toLowerCase();

            const supportedKeys = [
                "a",
                "d",
                "arrowleft",
                "arrowright",
                " ",
                "escape",
            ];

            if (!supportedKeys.includes(key)) {
                return;
            }

            event.preventDefault();

            keysRef.current.add(key);

            if ((key === " " || key === "escape") && !event.repeat) {
                if (gameRef.current.status === "playing") {
                    pauseGame();
                } else {
                    startGame();
                }
            }
        };

        const handleKeyUp = (event: KeyboardEvent) => {
            keysRef.current.delete(event.key.toLowerCase());
        };

        const handleBlur = () => {
            keysRef.current.clear();

            mouseXRef.current = null;
        };

        window.addEventListener("keydown", handleKeyDown);

        window.addEventListener("keyup", handleKeyUp);

        window.addEventListener("blur", handleBlur);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);

            window.removeEventListener("keyup", handleKeyUp);

            window.removeEventListener("blur", handleBlur);
        };
    }, [pauseGame, startGame]);

    // -----------------------------------------------
    // Mouse movement
    // -----------------------------------------------

    const handleMouseMove = useCallback(
        (event: React.MouseEvent<HTMLCanvasElement>) => {
            const canvas = canvasRef.current;

            if (!canvas) {
                return;
            }

            const rect = canvas.getBoundingClientRect();

            const scaleX = GAME_WIDTH / rect.width;

            const mouseX = (event.clientX - rect.left) * scaleX;

            mouseXRef.current = mouseX;
        },
        [],
    );

    const handleDifficultyChange = useCallback(
        (nextDifficulty: Difficulty) => {
            difficultyRef.current = nextDifficulty;
            setDifficulty(nextDifficulty);
            resetEngine(gameRef.current, nextDifficulty);
            keysRef.current.clear();
            previousTimeRef.current = 0;
            accumulatorRef.current = 0;

            syncUI();
        },
        [syncUI],
    );

    const handleMouseLeave = useCallback(() => {
        mouseXRef.current = null;
    }, []);

    // -----------------------------------------------
    // Canvas rendering
    // -----------------------------------------------

    const renderGame = useCallback(() => {
        const canvas = canvasRef.current;

        if (!canvas) {
            return;
        }

        const context = canvas.getContext("2d");

        if (!context) {
            return;
        }

        const game = gameRef.current;

        const scaleX = canvas.width / GAME_WIDTH;

        const scaleY = canvas.height / GAME_HEIGHT;

        context.save();

        context.scale(scaleX, scaleY);

        // --------------------------------------------
        // Background
        // --------------------------------------------

        context.fillStyle = COLORS.background;

        context.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

        // --------------------------------------------
        // Bricks
        // --------------------------------------------

        for (const brick of game.bricks) {
            if (brick.destroyed) {
                continue;
            }

            context.fillStyle = brick.color;

            context.fillRect(brick.x, brick.y, brick.width, brick.height);

            // Brick highlight

            context.fillStyle = "rgba(255,255,255,0.18)";

            context.fillRect(brick.x, brick.y, brick.width, 3);

            // Brick shadow

            context.fillStyle = "rgba(0,0,0,0.15)";

            context.fillRect(
                brick.x,
                brick.y + brick.height - 3,
                brick.width,
                3,
            );
        }

        // --------------------------------------------
        // Paddle
        // --------------------------------------------

        context.fillStyle = COLORS.paddle;

        context.shadowBlur = 14;

        context.shadowColor = COLORS.paddle;

        context.fillRect(
            game.paddle.x,
            game.paddle.y,
            game.paddle.width,
            game.paddle.height,
        );

        context.shadowBlur = 0;

        // --------------------------------------------
        // Ball
        // --------------------------------------------

        context.beginPath();

        context.arc(game.ball.x, game.ball.y, game.ball.radius, 0, Math.PI * 2);

        context.fillStyle = COLORS.ball;

        context.shadowBlur = 16;

        context.shadowColor = COLORS.ball;

        context.fill();

        context.shadowBlur = 0;

        context.restore();

        context.fillStyle = COLORS.foreground;
        context.font = "bold 36px sans-serif";
        context.textAlign = "center";
        context.textBaseline = "top";
        context.fillText(String(game.score), GAME_WIDTH * 0.25, 20);
        context.fillText(String(game.lives), GAME_WIDTH * 0.75, 20);
    }, []);

    // -----------------------------------------------
    // Animation loop
    // -----------------------------------------------

    useEffect(() => {
        let running = true;

        const animate = (timestamp: number) => {
            if (!running) {
                return;
            }

            if (previousTimeRef.current === 0) {
                previousTimeRef.current = timestamp;
            }

            const frameDelta = Math.min(
                (timestamp - previousTimeRef.current) / 1000,
                0.05,
            );

            previousTimeRef.current = timestamp;

            accumulatorRef.current += frameDelta;

            while (accumulatorRef.current >= FIXED_TIME_STEP) {
                const input: InputState = {
                    left:
                        keysRef.current.has("a") ||
                        keysRef.current.has("arrowleft"),

                    right:
                        keysRef.current.has("d") ||
                        keysRef.current.has("arrowright"),

                    mouseX: mouseXRef.current,
                };

                const previousStatus = gameRef.current.status;

                updateGame(
                    gameRef.current,
                    input,
                    FIXED_TIME_STEP,
                    difficultyRef.current,
                );

                if (gameRef.current.status !== previousStatus) {
                    syncUI();
                }

                accumulatorRef.current -= FIXED_TIME_STEP;
            }

            renderGame();

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            running = false;

            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [renderGame, syncUI]);

    // -----------------------------------------------
    // Cleanup
    // -----------------------------------------------

    useEffect(() => {
        return () => {
            keysRef.current.clear();

            mouseXRef.current = null;

            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    // -----------------------------------------------
    // UI
    // -----------------------------------------------

    return (
        <div className="flex w-full flex-col items-center gap-4">
            <div className="mb-6 flex flex-col gap-4  sm:items-center sm:justify-between">
                <div>
                    <P>Destroy every brick to win.</P>
                </div>
                <div className="flex items-center gap-3 ">
                    <Label htmlFor="pong-difficulty">Difficulty:</Label>

                    <Select
                        value={difficulty}
                        onValueChange={(value) =>
                            handleDifficultyChange(value as Difficulty)
                        }
                    >
                        <SelectTrigger
                            className="games-select-trigger"
                            id="pong-difficulty"
                        >
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="rounded-none bg-card">
                            <SelectItem value="easy">Easy</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="hard">Hard</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Game canvas */}

            <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl">
                <canvas
                    ref={canvasRef}
                    width={GAME_WIDTH}
                    height={GAME_HEIGHT}
                    tabIndex={0}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    aria-label="Breakout game. Use A and D, arrow keys, or your mouse to move the paddle."
                    className="block h-auto w-full outline-none"
                />

                {/* Game overlay */}

                {status !== "playing" && (
                    <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center bg-black/60 backdrop-blur-sm">
                        {status === "ready" && (
                            <>
                                <H2 className="text-primary border-secondary dark:text-secondary dark:border-primary">
                                    Ready?
                                </H2>

                                <P className="mt-2 text-sm text-zinc-400">
                                    Break every brick.
                                </P>
                            </>
                        )}

                        {status === "paused" && (
                            <>
                                <H2 className="text-primary border-secondary dark:text-secondary dark:border-primary">
                                    Paused
                                </H2>

                                <P className="mt-2 text-sm text-zinc-400">
                                    The game is paused.
                                </P>
                            </>
                        )}

                        {status === "won" && (
                            <>
                                <H2 className="text-primary border-secondary dark:text-secondary dark:border-primary">
                                    Victory
                                </H2>

                                <p className="mt-2 text-sm text-zinc-400">
                                    You have broken out. Final score: {score}
                                </p>
                            </>
                        )}

                        {status === "gameOver" && (
                            <>
                                <H2 className="text-primary border-secondary dark:text-secondary dark:border-primary">
                                    Game Over
                                </H2>

                                <p className="mt-2 text-sm text-zinc-400">
                                    You have failed to break out. Final score:{" "}
                                    {score}
                                </p>
                            </>
                        )}

                        <Button className="mt-4" size="lg" onClick={startGame}>
                            {status === "gameOver"
                                ? "Play Again"
                                : status === "paused"
                                  ? "Resume"
                                  : "Start Game"}
                        </Button>
                    </div>
                )}
            </div>

            <StartPauseReset
                startGame={startGame}
                pauseGame={pauseGame}
                resetGame={handleReset}
                status={status}
            />

            <GameRules
                movementInstrucions="Use your mouse to move the paddle side to side"
                difficultyBreakdown="Difficulty sliders affect ball speed and number of bricks required to break."
                gameControls="Spacebar or ESC to start / pause."
            />
        </div>
    );
}
