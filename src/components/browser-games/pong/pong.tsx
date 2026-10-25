"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import {
    COLORS,
    WINNING_SCORE,
    FIXED_TIME_STEP,
    GAME_HEIGHT,
    GAME_WIDTH,
} from "./pong-types";

import type { GameState, PlayerSide } from "./pong-types";

import {
    createInitialGameState,
    resetBall,
    resetGame as resetEngine,
    updateGame,
} from "./pong-engine";

import { Button } from "../../custom/components/buttons/c_button";
import { H2, P } from "@/typography/custom";
import { Label } from "@/components/custom/components/form/c_label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/custom/components/form/c_select";
import StartPauseReset from "../components/start-pause-reset";
import GameRules from "../components/game-rules";
import { Difficulty, GameStatus } from "../shared/game-types";

// --------------------------------------------------
// Component props
// --------------------------------------------------

interface PongGameProps {
    winningScore?: number;
    initialDifficulty?: Difficulty;
}

export function PongGame({
    winningScore = WINNING_SCORE,
    initialDifficulty = "medium",
}: PongGameProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const gameRef = useRef<GameState>(
        createInitialGameState(initialDifficulty),
    );

    const keysRef = useRef<Set<string>>(new Set());

    const animationFrameRef = useRef<number | null>(null);

    const previousTimeRef = useRef<number>(0);

    const accumulatorRef = useRef<number>(0);

    const aiStateRef = useRef({
        reactionTimer: 0,
        targetY: GAME_HEIGHT / 2,
    });

    const difficultyRef = useRef<Difficulty>(initialDifficulty);

    // REACT STATE

    const [difficulty, setDifficulty] = useState<Difficulty>(initialDifficulty);

    const [status, setStatus] = useState<GameStatus>("ready");

    const [playerScore, setPlayerScore] = useState(0);

    const [aiScore, setAiScore] = useState(0);

    const [winner, setWinner] = useState<PlayerSide | null>(null);

    const [isFocused, setIsFocused] = useState(false);

    //     // ------------------------------------------------
    //     // State synchronization
    //     // ------------------------------------------------

    const syncUI = useCallback(() => {
        const game = gameRef.current;

        setPlayerScore(game.playerScore);
        setAiScore(game.aiScore);
        setStatus(game.status);
        setWinner(game.winner);
    }, []);

    // -----------------------------------------------
    // Start game
    // -----------------------------------------------

    const startGame = useCallback(() => {
        const game = gameRef.current;

        if (game.status === "gameOver") {
            resetEngine(game, difficultyRef.current);

            resetBall(
                game,
                difficultyRef.current,
                Math.random() < 0.5 ? -1 : 1,
            );
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

        previousTimeRef.current = 0;

        accumulatorRef.current = 0;

        aiStateRef.current = {
            reactionTimer: 0,
            targetY: GAME_HEIGHT / 2,
        };

        syncUI();
    }, [syncUI]);

    //     // ------------------------------------------------
    //     // Difficulty
    //     // ------------------------------------------------

    const handleDifficultyChange = useCallback(
        (nextDifficulty: Difficulty) => {
            difficultyRef.current = nextDifficulty;
            setDifficulty(nextDifficulty);
            resetEngine(gameRef.current, nextDifficulty);
            keysRef.current.clear();
            previousTimeRef.current = 0;
            accumulatorRef.current = 0;
            aiStateRef.current = {
                reactionTimer: 0,
                targetY: GAME_HEIGHT / 2,
            };
            syncUI();
        },
        [syncUI],
    );

    //     // ------------------------------------------------
    //     // Canvas rendering
    //     // ------------------------------------------------

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

        // Background

        context.fillStyle = COLORS.background;

        context.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

        // Center line

        context.strokeStyle = COLORS.centerLine;

        context.lineWidth = 3;

        context.setLineDash([12, 12]);

        context.beginPath();

        context.moveTo(GAME_WIDTH / 2, 0);

        context.lineTo(GAME_WIDTH / 2, GAME_HEIGHT);

        context.stroke();

        context.setLineDash([]);

        // Player paddle

        context.fillStyle = COLORS.player;

        context.fillRect(
            game.player.x,
            game.player.y,
            game.player.width,
            game.player.height,
        );

        // AI paddle

        context.fillStyle = COLORS.ai;

        context.fillRect(game.ai.x, game.ai.y, game.ai.width, game.ai.height);

        // Ball

        context.beginPath();

        context.arc(game.ball.x, game.ball.y, game.ball.radius, 0, Math.PI * 2);

        context.fillStyle = COLORS.foreground;

        context.fill();

        // Ball glow

        context.shadowBlur = 18;

        context.shadowColor = COLORS.foreground;

        context.beginPath();

        context.arc(game.ball.x, game.ball.y, game.ball.radius, 0, Math.PI * 2);

        context.fill();

        context.shadowBlur = 0;

        // Scores
        context.fillStyle = COLORS.foreground;
        context.font = "bold 36px sans-serif";
        context.textAlign = "center";
        context.textBaseline = "top";
        context.fillText(String(game.playerScore), GAME_WIDTH * 0.25, 20);
        context.fillText(String(game.aiScore), GAME_WIDTH * 0.75, 20);

        context.restore();
    }, []);

    //     // ------------------------------------------------
    //     // Animation loop
    //     // ------------------------------------------------

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
                const input = {
                    up:
                        keysRef.current.has("w") ||
                        keysRef.current.has("arrowup"),

                    down:
                        keysRef.current.has("s") ||
                        keysRef.current.has("arrowdown"),
                };

                const nextAIState = updateGame(
                    gameRef.current,
                    input,
                    difficultyRef.current,
                    FIXED_TIME_STEP,
                    aiStateRef.current,
                    winningScore,
                );

                aiStateRef.current = {
                    reactionTimer: nextAIState.reactionTimer,

                    targetY: nextAIState.targetY,
                };

                if (nextAIState.scored) {
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
    }, [renderGame, syncUI, winningScore]);

    // ------------------------------------------------
    // Keyboard controls
    // ------------------------------------------------

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const key = event.key.toLowerCase();

            const supportedKeys = [
                "w",
                "s",
                "arrowup",
                "arrowdown",
                " ",
                "escape",
            ];

            if (!supportedKeys.includes(key)) {
                return;
            }

            event.preventDefault();

            keysRef.current.add(key);

            if ((key === " " || key === "escape") && !event.repeat) {
                const game = gameRef.current;

                if (game.status === "playing") {
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

    // ------------------------------------------------
    // Component cleanup
    // ------------------------------------------------

    useEffect(() => {
        return () => {
            keysRef.current.clear();

            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <div className="flex w-full flex-col items-center gap-4">
            <P>First to {winningScore} points wins.</P>
            <div className="flex flex-wrap justify-center gap-8">
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

                {/* Game canvas */}

                <div
                    className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl"
                    onMouseEnter={() => setIsFocused(true)}
                    onMouseLeave={() => setIsFocused(false)}
                >
                    <canvas
                        ref={canvasRef}
                        width={GAME_WIDTH}
                        height={GAME_HEIGHT}
                        tabIndex={0}
                        aria-label="Pong game. Use W and S or the arrow keys to move the player paddle."
                        className="block h-auto w-full outline-none"
                    />

                    {/* Game overlays */}

                    {status !== "playing" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                            <div className="text-center">
                                {status === "ready" && (
                                    <>
                                        <H2 className="text-primary border-secondary dark:text-secondary dark:border-primary">
                                            Ready?
                                        </H2>

                                        <P className="mt-2 text-sm text-zinc-400">
                                            Get ready to pong.
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

                                {status === "gameOver" && (
                                    <>
                                        <H2 className="text-primary border-secondary dark:text-secondary dark:border-primary">
                                            {winner === "player"
                                                ? "You Win!"
                                                : "CPU Wins!"}
                                        </H2>

                                        <p className="mt-2 text-sm text-zinc-400">
                                            Final score: {playerScore} -{" "}
                                            {aiScore}
                                        </p>
                                    </>
                                )}

                                <Button
                                    className="mt-4"
                                    size="lg"
                                    onClick={startGame}
                                >
                                    {status === "gameOver"
                                        ? "Play Again"
                                        : status === "paused"
                                          ? "Resume"
                                          : "Start Game"}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Controls */}
                <div className="flex flex-col gap-6">
                    <div className=" flex flex-wrap items-center justify-center gap-3">
                        <StartPauseReset
                            startGame={startGame}
                            pauseGame={pauseGame}
                            resetGame={handleReset}
                            status={status}
                        />
                    </div>

                    {/* Instructions */}

                    <GameRules
                        movementInstrucions="W / S or ↑ / ↓"
                        difficultyBreakdown="Difficulty sliders simply adjust the speed of
                                the ball and AI paddle."
                        gameControls="Spacebar or ESC to start / Pause"
                    />
                </div>
            </div>
        </div>
    );
}
