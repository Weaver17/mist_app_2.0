"use client";

import { Button } from "@/components/custom/components/buttons/c_button";
import { Label } from "@/components/custom/components/form/c_label";
import { H2, P } from "@/typography/custom";
import StartPauseReset from "../components/start-pause-reset";
import GameRules from "../components/game-rules";
import { useRef, useState, useEffect, useCallback } from "react";
import { DPad } from "../shared/d-pad";
import {
    SnakeGameState,
    Direction,
    GAME_HEIGHT,
    GAME_WIDTH,
} from "./snake-types";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/custom/components/form/c_select";
import {
    DEFAULT_DIFFICULTY,
    Difficulty,
    GameStatus,
} from "../shared/game-types";
import {
    createInitialGameState,
    getMoveInterval,
    resetGame as resetEngine,
    setDirection,
    updateGame,
} from "./snake-engine";
import { renderGame } from "./snake-renderer";

type SnakeGameProps = {
    initialDifficulty?: Difficulty;
};

const HIGH_SCORE_KEY = "snake-high-score";

// function copyState(state: SnakeGameState): SnakeGameState {
//     return {
//         ...state,
//         snake: state.snake.map((segment) => ({ ...segment })),
//         food: { ...state.food },
//     };
// }

export function SnakeGame({
    initialDifficulty = DEFAULT_DIFFICULTY,
}: SnakeGameProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const gameRef = useRef<SnakeGameState>(
        createInitialGameState(initialDifficulty),
    );
    const difficultyRef = useRef<Difficulty>(initialDifficulty);
    const keysRef = useRef<Set<string>>(new Set());

    // REACT STATE

    const [difficulty, setDifficulty] = useState<Difficulty>(initialDifficulty);

    const [status, setStatus] = useState<GameStatus>("ready");

    const [playerScore, setPlayerScore] = useState(0);

    // const [aiScore, setAiScore] = useState(0);

    // const [winner, setWinner] = useState<PlayerSide | null>(null);

    const [isFocused, setIsFocused] = useState(false);

    // const animationFrameRef = useRef<number | null>(null);

    const previousTimeRef = useRef<number | null>(0);

    const accumulatorRef = useRef<number>(0);

    //     // ------------------------------------------------
    //     // State synchronization
    //     // ------------------------------------------------

    const syncUI = useCallback(() => {
        const game = gameRef.current;

        setPlayerScore(game.score);
        setStatus(game.status);
    }, []);

    // Load the persisted high score on the client.
    useEffect(() => {
        try {
            const savedScore = Number(
                window.localStorage.getItem(HIGH_SCORE_KEY) ?? 0,
            );

            if (Number.isFinite(savedScore) && savedScore > 0) {
                gameRef.current.highScore = savedScore;
                syncUI();
            }
        } catch {
            // The game remains playable if browser storage is unavailable.
        }
    }, [syncUI]);

    // Persist new high scores.
    // useEffect(() => {
    //     try {
    //         window.localStorage.setItem(HIGH_SCORE_KEY, String(view.highScore));
    //     } catch {
    //         // Ignore storage restrictions.
    //     }
    // }, [view.highScore]);

    // Animation loop: the renderer draws each frame, while the engine
    // advances the snake at a speed controlled by the current score.
    useEffect(() => {
        let frameId = 0;
        let mounted = true;

        const animate = (timestamp: number) => {
            if (!mounted) return;

            const ctx = canvasRef.current?.getContext("2d");

            if (previousTimeRef.current === null) {
                previousTimeRef.current = timestamp;
            }

            const delta = Math.min(timestamp - previousTimeRef.current, 100);

            previousTimeRef.current = timestamp;

            const game = gameRef.current;

            if (game.status === "playing") {
                accumulatorRef.current += delta;

                let changed = false;

                // A while loop keeps movement consistent if a frame is delayed.
                while (
                    accumulatorRef.current >=
                        getMoveInterval(game, difficulty) &&
                    game.status === "playing"
                ) {
                    accumulatorRef.current -= getMoveInterval(game, difficulty);
                    updateGame(game);
                    changed = true;
                }

                if (changed) {
                    syncUI();
                }
            } else {
                accumulatorRef.current = 0;
            }

            if (ctx) {
                renderGame(ctx, game);
            }

            frameId = requestAnimationFrame(animate);
        };

        frameId = requestAnimationFrame(animate);

        return () => {
            mounted = false;
            cancelAnimationFrame(frameId);
            previousTimeRef.current = null;
        };
    }, [syncUI, difficulty]);

    // -----------------------------------------------
    // Start game
    // -----------------------------------------------

    const startGame = useCallback(() => {
        const game = gameRef.current;

        if (game.status === "gameOver") {
            resetEngine(game, difficulty);
        }

        setStatus("playing");

        game.status = "playing";

        previousTimeRef.current = 0;

        accumulatorRef.current = 0;

        syncUI();
    }, [syncUI, difficulty]);

    // -----------------------------------------------
    // Pause game
    // -----------------------------------------------

    const pauseGame = useCallback(() => {
        const game = gameRef.current;

        if (game.status !== "playing") {
            return;
        }

        setStatus("paused");

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
        resetEngine(gameRef.current, difficulty);

        keysRef.current.clear();

        previousTimeRef.current = 0;

        accumulatorRef.current = 0;

        syncUI();
    }, [syncUI, difficulty]);

    const handleDirection = useCallback(
        (direction: Direction) => {
            const game = gameRef.current;

            if (game.status === "ready") {
                setDirection(game, direction);
                startGame();
                accumulatorRef.current = 0;
                syncUI();
                return;
            }

            setDirection(game, direction);
            syncUI();
        },
        [syncUI, startGame],
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

    // Global keyboard controls let the player steer without clicking
    // the canvas first.
    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            const key = event.key.toLowerCase();

            event.preventDefault();

            const directionKeys: Record<string, Direction> = {
                arrowup: "up",
                w: "up",
                arrowdown: "down",
                s: "down",
                arrowleft: "left",
                a: "left",
                arrowright: "right",
                d: "right",
            };

            if (directionKeys[key]) {
                event.preventDefault();
                handleDirection(directionKeys[key]);
                return;
            }

            if ((key === " " || key === "escape") && !event.repeat) {
                const game = gameRef.current;

                if (game.status === "playing") {
                    pauseGame();
                } else {
                    startGame();
                }
            }

            if (key === "enter" && gameRef.current.status === "ready") {
                startGame();
                syncUI();
            }

            if (key === "r") {
                resetEngine(gameRef.current, difficulty);
                accumulatorRef.current = 0;
                syncUI();
            }
        };

        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [handleDirection, syncUI, startGame, pauseGame, difficulty]);

    return (
        <div className="flex w-full flex-col items-center gap-4">
            <P>
                Become longer by eating the food. So large that you cover the
                screen!
            </P>
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
                            id="snake-difficulty"
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

                <div className="relative flex items-center justify-center">
                    <div className="relative flex items-center justify-center w-full max-w-full overflow-hidden">
                        <canvas
                            ref={canvasRef}
                            width={GAME_WIDTH}
                            height={GAME_HEIGHT}
                            className="rounded-lg border border-slate-700/50 max-w-full h-auto"
                        />
                    </div>

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
                                            Elongate your snake.
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
                                            Game Over
                                        </H2>

                                        <p className="mt-2 text-sm text-zinc-400">
                                            Final score: {playerScore}
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

                    {/* <GameRules
                        movementInstrucions="W / S or ↑ / ↓"
                        difficultyBreakdown="Difficulty sliders simply adjust the speed of
                                the ball and AI paddle."
                        gameControls="Spacebar or ESC to start / Pause"
                    /> */}
                </div>
            </div>
        </div>
    );
}
