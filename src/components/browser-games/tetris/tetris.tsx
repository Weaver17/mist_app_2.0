"use client";

import { Label } from "@/components/custom/components/form/c_label";
import { DEFAULT_DIFFICULTY, Difficulty } from "../shared/game-types";
import { H2, P } from "@/typography/custom";
import { GAME_HEIGHT, GAME_WIDTH, TetrisGameState } from "./tetris-types";
import {
    createInitialGameState,
    hardDrop,
    holdPiece,
    movePiece,
    pauseGame,
    resetGame,
    resumeGame,
    rotatePiece,
    softDrop,
    startGame,
    updateGame,
} from "./tetris-engine";
import { useCallback, useEffect, useRef, useState } from "react";
import { renderGame } from "./tetris-renderer";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/custom/components/form/c_select";
import { Button } from "@/components/custom/components/buttons/c_button";
import StartPauseReset from "../components/start-pause-reset";

type TetrisGameProps = {
    initialDifficulty?: Difficulty;
};

export function TetrisGame({
    initialDifficulty = DEFAULT_DIFFICULTY,
}: TetrisGameProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const gameRef = useRef<TetrisGameState>(createInitialGameState());

    const previousTimeRef = useRef<number>(0);
    const accumulatorRef = useRef(0);
    const keysRef = useRef<Set<string>>(new Set());

    const [status, setStatus] = useState<TetrisGameState["status"]>("ready");
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [lines, setLines] = useState(0);
    const [level, setLevel] = useState(1);

    const syncUI = useCallback(() => {
        const game = gameRef.current;

        setStatus(game.status);
        setScore(game.score);
        setHighScore(game.highScore);
        setLines(game.lines);
        setLevel(game.level);
    }, []);

    // START GAME

    const start = useCallback(() => {
        startGame(gameRef.current);
        resumeGame(gameRef.current);
        syncUI();
    }, [syncUI]);

    // PAUSE GAME

    const pause = useCallback(() => {
        pauseGame(gameRef.current);
        syncUI();
    }, [syncUI]);

    // RESET GAME

    const handleReset = useCallback(() => {
        resetGame(gameRef.current);

        keysRef.current.clear();

        previousTimeRef.current = 0;

        accumulatorRef.current = 0;

        syncUI();
    }, [syncUI]);

    // CONTROL LOGIC

    const rotate = useCallback(
        (direction: 1 | -1 = 1) => {
            if (gameRef.current.status === "ready") {
                startGame(gameRef.current);
            }

            rotatePiece(gameRef.current, direction);
            syncUI();
        },
        [syncUI],
    );

    const shift = useCallback(
        (dx: number) => {
            if (gameRef.current.status === "ready") {
                startGame(gameRef.current);
            }

            movePiece(gameRef.current, dx, 0);
            syncUI();
        },
        [syncUI],
    );

    const drop = useCallback(() => {
        if (gameRef.current.status === "ready") {
            startGame(gameRef.current);
        }

        softDrop(gameRef.current);
        syncUI();
    }, [syncUI]);

    const slam = useCallback(() => {
        if (gameRef.current.status === "ready") {
            startGame(gameRef.current);
        }

        hardDrop(gameRef.current);
        accumulatorRef.current = 0;
        syncUI();
    }, [syncUI]);

    const hold = useCallback(() => {
        if (gameRef.current.status === "ready") {
            startGame(gameRef.current);
        }

        holdPiece(gameRef.current);
        syncUI();
    }, [syncUI]);

    // Keyboard controls.
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const game = gameRef.current;
            const key = event.key.toLowerCase();

            const handledKeys = [
                "arrowleft",
                "arrowright",
                "arrowdown",
                "arrowup",
                " ",
                "p",
                "z",
                "x",
                "c",
                "shift",
                "enter",
            ];

            if (handledKeys.includes(key)) {
                event.preventDefault();
            }

            // Prevent browser key-repeat from repeatedly triggering
            // rotation, hold, or pause.
            if (
                event.repeat &&
                ["arrowup", "x", "z", "c", "shift", "p", " "].includes(key)
            ) {
                return;
            }

            if (key === "enter") {
                if (game.status === "ready") {
                    start();
                } else if (game.status === "paused") {
                    start();
                } else if (game.status === "gameOver") {
                    handleReset();
                    startGame(gameRef.current);
                    syncUI();
                }

                return;
            }

            if (key === "p" || key === "escape") {
                if (game.status === "playing") {
                    pause();
                } else if (
                    game.status === "paused" ||
                    game.status === "ready"
                ) {
                    start();
                }

                return;
            }

            if (game.status !== "playing" && game.status !== "ready") {
                return;
            }

            switch (key) {
                case "arrowleft":
                case "a":
                    shift(-1);
                    break;

                case "arrowright":
                case "d":
                    shift(1);
                    break;

                case "arrowdown":
                case "s":
                    drop();
                    break;

                case "arrowup":
                case "x":
                    rotate(1);
                    break;

                case "z":
                    rotate(-1);
                    break;

                case " ":
                    slam();
                    break;

                case "c":
                case "shift":
                    hold();
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [drop, hold, pause, handleReset, rotate, shift, slam, start, syncUI]);

    // Gravity and canvas rendering.
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");

        if (!canvas || !ctx) return;

        let animationId = 0;

        const animate = (timestamp: number) => {
            const game = gameRef.current;

            if (previousTimeRef.current === 0) {
                previousTimeRef.current = timestamp;
            }

            const delta = Math.min(timestamp - previousTimeRef.current, 100);

            previousTimeRef.current = timestamp;

            if (game.status === "playing") {
                accumulatorRef.current += delta;

                while (
                    accumulatorRef.current >= game.dropInterval &&
                    game.status === "playing"
                ) {
                    updateGame(game, game.dropInterval);
                    accumulatorRef.current -= game.dropInterval;
                    syncUI();
                }
            } else {
                accumulatorRef.current = 0;
            }

            renderGame(ctx, game);
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, [syncUI]);

    return (
        <div className="flex w-full flex-col items-center gap-4">
            <P>Clear lines, build combos, and beat your high score.</P>
            <div className="flex flex-col items-center justify-center gap-8">
                <div className="flex items-center gap-3 ">
                    <Label htmlFor="pong-difficulty">Difficulty:</Label>

                    <Select
                    // value={difficulty}
                    // onValueChange={(value) =>
                    //     handleDifficultyChange(value as Difficulty)
                    // }
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
                    <canvas
                        ref={canvasRef}
                        width={GAME_WIDTH}
                        height={GAME_HEIGHT}
                        className="mx-auto block h-auto max-w-full"
                        aria-label="Tetris game board and piece previews"
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
                                            May your I peices be plentiful.
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
                                            Final score: {score}
                                        </p>
                                    </>
                                )}

                                <Button
                                    className="mt-4"
                                    size="lg"
                                    onClick={start}
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
                            startGame={start}
                            pauseGame={pause}
                            resetGame={handleReset}
                            status={status}
                        />
                    </div>

                    {/* Instructions */}

                    {/* <GameRules
                        movementInstrucions="W/A/S/D or Arrow Keys"
                        difficultyBreakdown="Difficulty sliders change starting speed and speed increase per score."
                        gameControls="Spacebar or ESC to start / Pause"
                    /> */}
                </div>
            </div>
        </div>
    );
}
