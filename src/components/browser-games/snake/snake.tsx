"use client";

import { Button } from "@/components/custom/components/buttons/c_button";
import { Label } from "@/components/custom/components/form/c_label";
import { H2, P } from "@/typography/custom";
import StartPauseReset from "../components/start-pause-reset";
import GameRules from "../components/game-rules";
import { useRef, useState, useEffect, useCallback } from "react";
import { DPad } from "../shared/d-pad";
import { useGameController } from "./snake-hooks/useGameController";
import { useTouchControls } from "./snake-hooks/useTouchControls";
import {
    PowerUpType,
    GameHUDProps,
    Difficulty,
    GameState,
    createGameConfig,
} from "./snake-types";
import { formatScore } from "./snake-utils/format";
import { getPowerUpDisplay } from "./snake-utils/power-up-display";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/custom/components/form/c_select";
import { GameStatus } from "../shared/game-types";
import { getInitialSnake } from "./snake-engine/snake";
import { createInitialState } from "./snake-engine/game-state";

type SnakeGameProps = {
    initialDifficulty?: Difficulty;
};

// GAME HUD -----------------------------------------------------------------------------

function PowerUpIndicator({
    type,
    expiresAt,
}: {
    type: PowerUpType;
    expiresAt: number;
}) {
    const remaining = Math.max(
        0,
        Math.ceil((expiresAt - performance.now()) / 1000),
    );
    const { symbol, label, tailwindColor } = getPowerUpDisplay(type);

    return (
        <span className={`${tailwindColor} text-xs font-bold animate-pulse`}>
            {symbol} {label} ({remaining}s)
        </span>
    );
}

export function GameHUD({
    score,
    highScore,
    level,
    speed,
    activePowerUps,
}: GameHUDProps) {
    return (
        <div className="flex flex-wrap items-center justify-between gap-2 px-1 py-2 text-sm select-none">
            <div className="flex items-center gap-4">
                <span className="text-white font-bold">
                    Score:{" "}
                    <span className="text-green-400">{formatScore(score)}</span>
                </span>
                <span className="text-slate-400 text-xs">
                    Best: {formatScore(highScore)}
                </span>
            </div>

            <div className="flex items-center gap-3">
                {activePowerUps.map((p) => (
                    <PowerUpIndicator
                        key={p.type}
                        type={p.type}
                        expiresAt={p.expiresAt}
                    />
                ))}
            </div>

            <div className="flex items-center gap-4">
                <span className="text-slate-300 text-xs">
                    Lvl <span className="text-cyan-400 font-bold">{level}</span>
                </span>
                <span className="text-slate-300 text-xs">
                    Speed{" "}
                    <span className="text-yellow-400 font-bold">
                        {Math.round(speed)}
                    </span>
                </span>
            </div>
        </div>
    );
}

function Overlay({ children }: { children: React.ReactNode }) {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-20 backdrop-blur-sm">
            {children}
        </div>
    );
}

// GAME HUD -----------------------------------------------------------------------------

// const DIFFICULTY_STYLES: Record<Difficulty, { active: string; label: string }> =
//     {
//         easy: {
//             active: "bg-green-500 text-black ring-2 ring-green-300/60",
//             label: "Easy",
//         },
//         [Difficulty.Medium]: {
//             active: "bg-yellow-400 text-black ring-2 ring-yellow-200/70",
//             label: "Medium",
//         },
//         [Difficulty.Hard]: {
//             active: "bg-red-500 text-black ring-2 ring-red-300/60",
//             label: "Hard",
//         },
//     };

export function SnakeGame({ initialDifficulty = "medium" }: SnakeGameProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const gameRef = useRef<GameState>(createInitialState(initialDifficulty));
    const containerRef = useRef<HTMLDivElement>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [controlsOpen, setControlsOpen] = useState(true);
    const difficultyRef = useRef<Difficulty>(initialDifficulty);

    // REACT STATE

    const [difficulty, setDifficulty] = useState<Difficulty>(initialDifficulty);

    const [status, setStatus] = useState<GameStatus>("ready");

    // const [playerScore, setPlayerScore] = useState(0);

    // const [aiScore, setAiScore] = useState(0);

    // const [winner, setWinner] = useState<PlayerSide | null>(null);

    const [isFocused, setIsFocused] = useState(false);

    const controller = useGameController(canvasRef);

    useTouchControls(controller.onDirection, controller.onStart, containerRef);

    const syncUI = useCallback(() => {
        const game = gameRef.current;

        setDifficulty(game.difficulty);
        setStatus(game.status);
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

    const showDPad =
        isTouchDevice && controlsOpen && controller.status === "playing";
    const showHUD =
        controller.status === "playing" || controller.status === "paused";

    useEffect(() => {
        if (typeof window === "undefined") return;
        const media = window.matchMedia("(pointer: coarse)");
        const update = () =>
            setIsTouchDevice(media.matches || window.innerWidth < 1024);
        update();
        media.addEventListener("change", update);
        window.addEventListener("resize", update);
        return () => {
            media.removeEventListener("change", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    useEffect(() => {
        if (typeof document === "undefined") return;

        const onFullscreenChange = () => {
            const inFullscreen = Boolean(document.fullscreenElement);
            setIsFullscreen(inFullscreen);

            if (inFullscreen) {
                document.body.classList.add("show-system-cursor");
            } else {
                document.body.classList.remove("show-system-cursor");
            }
        };

        document.addEventListener("fullscreenchange", onFullscreenChange);
        return () => {
            document.removeEventListener(
                "fullscreenchange",
                onFullscreenChange,
            );
            document.body.classList.remove("show-system-cursor");
        };
    }, []);

    const toggleFullscreen = useCallback(async () => {
        const el = containerRef.current;
        if (!el || typeof document === "undefined") return;

        try {
            if (document.fullscreenElement) {
                await document.exitFullscreen();
                return;
            }

            const withWebkit = el as HTMLDivElement & {
                webkitRequestFullscreen?: () => Promise<void> | void;
            };

            if (el.requestFullscreen) {
                await el.requestFullscreen();
            } else if (withWebkit.webkitRequestFullscreen) {
                await withWebkit.webkitRequestFullscreen();
            }
        } catch {
            // Ignore fullscreen failures caused by browser restrictions.
        }
    }, []);

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
                    // value={Difficulty}
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
                <div
                    ref={containerRef}
                    className={`relative flex flex-col items-center justify-center w-full h-full min-h-[400px] bg-slate-950 select-none touch-manipulation cursor-default`}
                    style={isFullscreen ? { cursor: "default" } : undefined}
                >
                    <div className="absolute top-2 right-2 z-30 flex items-center gap-2">
                        {isTouchDevice && (
                            <Button
                                type="button"
                                onClick={() => setControlsOpen((prev) => !prev)}
                                aria-label={
                                    controlsOpen
                                        ? "Hide controller"
                                        : "Show controller"
                                }
                                title={
                                    controlsOpen
                                        ? "Hide controller"
                                        : "Show controller"
                                }
                            >
                                {controlsOpen
                                    ? "Controller On"
                                    : "Controller Off"}
                            </Button>
                        )}

                        <Button
                            type="button"
                            onClick={toggleFullscreen}
                            aria-label={
                                isFullscreen
                                    ? "Exit fullscreen"
                                    : "Enter fullscreen"
                            }
                            title={
                                isFullscreen
                                    ? "Exit fullscreen"
                                    : "Enter fullscreen"
                            }
                        >
                            {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                        </Button>
                    </div>

                    {showHUD && (
                        <div className="w-full max-w-[500px] px-2 z-10">
                            <GameHUD
                                score={controller.score}
                                highScore={controller.highScore}
                                level={controller.level}
                                speed={controller.speed}
                                activePowerUps={controller.activePowerUps}
                            />
                        </div>
                    )}

                    <div className="relative flex items-center justify-center">
                        <div className="relative flex items-center justify-center w-full max-w-full overflow-hidden">
                            <canvas
                                ref={canvasRef}
                                width={900}
                                height={500}
                                className="rounded-lg border border-slate-700/50 max-w-full h-auto"
                                style={{ imageRendering: "pixelated" }}
                            />
                        </div>

                        {/* <GameOverlay
                            status={controller.status}
                            score={controller.score}
                            highScore={controller.highScore}
                            lastScore={controller.lastScore}
                            selectedDifficulty={controller.selectedDifficulty}
                            obstaclesEnabled={controller.obstaclesEnabled}
                            onSelectDifficulty={controller.onSelectDifficulty}
                            onToggleObstacles={controller.onToggleObstacles}
                            onStart={controller.onStart}
                            onResume={controller.onResume}
                        /> */}

                        {showDPad && (
                            <div className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2 pointer-events-none lg:bottom-6">
                                <DPad onDirection={controller.onDirection} />
                            </div>
                        )}
                    </div>

                    {showDPad && (
                        <div className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2 pointer-events-none lg:bottom-6">
                            <DPad onDirection={controller.onDirection} />
                        </div>
                    )}
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
                                        Game Over
                                    </H2>

                                    <p className="mt-2 text-sm text-zinc-400">
                                        Final score:
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
                {/* <div className=" flex flex-wrap items-center justify-center gap-3">
                        <StartPauseReset
                            startGame={startGame}
                            pauseGame={pauseGame}
                            resetGame={handleReset}
                            status={status}
                        />
                    </div> */}

                {/* Instructions */}

                {/* <GameRules
                        movementInstrucions="W / S or ↑ / ↓"
                        difficultyBreakdown="Difficulty sliders simply adjust the speed of
                                the ball and AI paddle."
                        gameControls="Spacebar or ESC to start / Pause"
                    /> */}
            </div>
        </div>
    );
}
