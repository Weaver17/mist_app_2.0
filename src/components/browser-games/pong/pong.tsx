"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import {
    COLORS,
    WINNING_SCORE,
    FIXED_TIME_STEP,
    GAME_HEIGHT,
    GAME_WIDTH,
} from "./pong-types";

import type {
    Difficulty,
    GameState,
    GameStatus,
    PlayerSide,
} from "./pong-types";

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

// --------------------------------------------------
// Component props
// --------------------------------------------------

interface PongGameProps {
    winningScore?: number;
    initialDifficulty?: Difficulty;
}

// type Difficulty = "easy" | "medium" | "hard";

// // type GameStatus = "ready" | "playing" | "paused" | "gameOver";

// interface Paddle {
//     x: number;
//     y: number;
//     width: number;
//     height: number;
//     speed: number;
// }

// interface Ball {
//     x: number;
//     y: number;
//     radius: number;
//     vx: number;
//     vy: number;
//     speed: number;
// }

// interface GameState {
//     width: number;
//     height: number;
//     player: Paddle;
//     ai: Paddle;
//     ball: Ball;
//     playerScore: number;
//     aiScore: number;
//     status: GameStatus;
//     winner: "player" | "ai" | null;
//     lastHit: "player" | "ai" | null;
// }

// interface DifficultyConfig {
//     aiSpeed: number;
//     reactionDelay: number;
//     predictionError: number;
// }

// interface PongGameProps {
//     winningScore?: number;
//     initialDifficulty?: Difficulty;
//     className?: string;
// }

// // CONSTANTS ---------------------

// const GAME_WIDTH = 900;
// const GAME_HEIGHT = 500;

// const PADDLE_WIDTH = 12;
// const PADDLE_HEIGHT = 100;

// const BALL_RADIUS = 9;

// const PLAYER_SPEED = 440;

// const INITIAL_BALL_SPEED = 360;
// const MAX_BALL_SPEED = 720;

// const BALL_SPEED_INCREMENT = 22;

// const FIXED_TIME_STEP = 1 / 120;

// const WINNING_SCORE = 7;

// const COLORS = {
//     background: "#171717",
//     foreground: "#fafafa",
//     muted: "#71717a",
//     accent: "#0284b8",
//     player: "#0284b8",
//     ai: "#f6f6f6",
//     centerLine: "#444449",
// };

// const DIFFICULTY_CONFIG: Record<Difficulty, DifficultyConfig> = {
//     easy: {
//         aiSpeed: 220,
//         reactionDelay: 0.22,
//         predictionError: 85,
//     },

//     medium: {
//         aiSpeed: 340,
//         reactionDelay: 0.1,
//         predictionError: 35,
//     },

//     hard: {
//         aiSpeed: 460,
//         reactionDelay: 0.025,
//         predictionError: 8,
//     },
// };

// // FUNCTIONS ----------------------------

// function clamp(value: number, min: number, max: number): number {
//     return Math.max(min, Math.min(max, value));
// }

// function randomDirection(): number {
//     return Math.random() < 0.5 ? -1 : 1;
// }

// function createPaddle(x: number, y: number): Paddle {
//     return {
//         x,
//         y,
//         width: PADDLE_WIDTH,
//         height: PADDLE_HEIGHT,
//         speed: PLAYER_SPEED,
//     };
// }

// function createBall(direction: number = randomDirection()): Ball {
//     return {
//         x: GAME_WIDTH / 2,
//         y: GAME_HEIGHT / 2,
//         radius: BALL_RADIUS,
//         vx: INITIAL_BALL_SPEED * direction,
//         vy: INITIAL_BALL_SPEED * 0.25 * randomDirection(),
//         speed: INITIAL_BALL_SPEED,
//     };
// }

// function createInitialGameState(): GameState {
//     return {
//         width: GAME_WIDTH,
//         height: GAME_HEIGHT,

//         player: createPaddle(32, GAME_HEIGHT / 2 - PADDLE_HEIGHT / 2),

//         ai: createPaddle(
//             GAME_WIDTH - 32 - PADDLE_WIDTH,
//             GAME_HEIGHT / 2 - PADDLE_HEIGHT / 2,
//         ),

//         ball: createBall(),

//         playerScore: 0,
//         aiScore: 0,

//         status: "ready",
//         winner: null,
//         lastHit: null,
//     };
// }

export function PongGame({
    winningScore = WINNING_SCORE,
    initialDifficulty = "medium",
}: PongGameProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const gameRef = useRef<GameState>(createInitialGameState(initialDifficulty));

    const keysRef = useRef<Set<string>>(new Set());

    const animationFrameRef = useRef<number | null>(null);

    const previousTimeRef = useRef<number>(0);

    const accumulatorRef = useRef<number>(0);

    const aiStateRef = useRef({
        reactionTimer: 0,
        targetY: GAME_HEIGHT / 2,
    });

    //     const aiReactionTimerRef = useRef<number>(0);

    //     const aiTargetYRef = useRef<number>(GAME_HEIGHT / 2);

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

    //     // ------------------------------------------------
    //     // Ball reset
    //     // ------------------------------------------------

    //     const resetBall = useCallback((direction: number = randomDirection()) => {
    //         const game = gameRef.current;

    //         game.ball = createBall(direction);

    //         game.lastHit = null;

    //         aiReactionTimerRef.current = 0;

    //         aiTargetYRef.current = GAME_HEIGHT / 2;
    //     }, []);

    //     // ------------------------------------------------
    //     // Full game reset
    //     // ------------------------------------------------

    //     const resetGame = useCallback(() => {
    //         gameRef.current = createInitialGameState();

    //         keysRef.current.clear();

    //         accumulatorRef.current = 0;

    //         previousTimeRef.current = 0;

    //         aiReactionTimerRef.current = 0;

    //         aiTargetYRef.current = GAME_HEIGHT / 2;

    //         syncUI();
    //     }, [syncUI]);

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
    //     // Player movement
    //     // ------------------------------------------------

    //     const updatePlayer = useCallback((deltaTime: number) => {
    //         const game = gameRef.current;

    //         const keys = keysRef.current;

    //         const movingUp = keys.has("w") || keys.has("arrowup");

    //         const movingDown = keys.has("s") || keys.has("arrowdown");

    //         let direction = 0;

    //         if (movingUp) {
    //             direction -= 1;
    //         }

    //         if (movingDown) {
    //             direction += 1;
    //         }

    //         game.player.y += direction * game.player.speed * deltaTime;

    //         game.player.y = clamp(
    //             game.player.y,
    //             0,
    //             GAME_HEIGHT - game.player.height,
    //         );
    //     }, []);

    //     // ------------------------------------------------
    //     // AI movement
    //     // ------------------------------------------------

    //     const updateAI = useCallback((deltaTime: number) => {
    //         const game = gameRef.current;

    //         const config = DIFFICULTY_CONFIG[difficultyRef.current];

    //         const ball = game.ball;

    //         const ai = game.ai;

    //         // AI updates its target periodically.
    //         // Lower delay means faster reaction.

    //         aiReactionTimerRef.current += deltaTime;

    //         if (aiReactionTimerRef.current >= config.reactionDelay) {
    //             aiReactionTimerRef.current = 0;

    //             let targetY = ball.y;

    //             // Predict the ball's future position
    //             // when it is moving toward the AI.

    //             if (ball.vx > 0) {
    //                 const distance = ai.x - ball.x;

    //                 const timeToReach = distance / ball.vx;

    //                 targetY = ball.y + ball.vy * timeToReach;

    //                 // Reflect predicted position against
    //                 // top and bottom boundaries.

    //                 const fieldHeight = GAME_HEIGHT - ball.radius * 2;

    //                 const reflectedPosition =
    //                     (((targetY - ball.radius) % (fieldHeight * 2)) +
    //                         fieldHeight * 2) %
    //                     (fieldHeight * 2);

    //                 if (reflectedPosition > fieldHeight) {
    //                     targetY = GAME_HEIGHT - reflectedPosition + ball.radius;
    //                 } else {
    //                     targetY = reflectedPosition + ball.radius;
    //                 }
    //             }

    //             // Add controlled inaccuracy.

    //             targetY += (Math.random() * 2 - 1) * config.predictionError;

    //             aiTargetYRef.current = targetY;
    //         }

    //         const targetPaddleY = aiTargetYRef.current - ai.height / 2;

    //         const difference = targetPaddleY - ai.y;

    //         const maxMovement = config.aiSpeed * deltaTime;

    //         ai.y += clamp(difference, -maxMovement, maxMovement);

    //         ai.y = clamp(ai.y, 0, GAME_HEIGHT - ai.height);
    //     }, []);

    //     // ------------------------------------------------
    //     // Ball-wall collision
    //     // ------------------------------------------------

    //     const handleWallCollision = useCallback(() => {
    //         const game = gameRef.current;

    //         const ball = game.ball;

    //         if (ball.y - ball.radius <= 0 && ball.vy < 0) {
    //             ball.y = ball.radius;

    //             ball.vy *= -1;
    //         }

    //         if (ball.y + ball.radius >= GAME_HEIGHT && ball.vy > 0) {
    //             ball.y = GAME_HEIGHT - ball.radius;

    //             ball.vy *= -1;
    //         }
    //     }, []);

    //     // ------------------------------------------------
    //     // Paddle collision
    //     // ------------------------------------------------

    //     const handlePaddleCollision = useCallback(
    //         (paddle: Paddle, side: "player" | "ai") => {
    //             const game = gameRef.current;

    //             const ball = game.ball;

    //             const paddleCenter = paddle.y + paddle.height / 2;

    //             const impactOffset = (ball.y - paddleCenter) / (paddle.height / 2);

    //             // Normalize impact position:
    //             // -1 = top of paddle
    //             //  0 = center
    //             //  1 = bottom

    //             const normalizedImpact = clamp(impactOffset, -1, 1);

    //             // Maximum rebound angle is 60 degrees.

    //             const maxBounceAngle = Math.PI / 3;

    //             const bounceAngle = normalizedImpact * maxBounceAngle;

    //             // Increase ball speed slightly with each hit.

    //             ball.speed = Math.min(
    //                 ball.speed + BALL_SPEED_INCREMENT,
    //                 MAX_BALL_SPEED,
    //             );

    //             // Horizontal direction depends on
    //             // which paddle was hit.

    //             const direction = side === "player" ? 1 : -1;

    //             ball.vx = Math.cos(bounceAngle) * ball.speed * direction;

    //             ball.vy = Math.sin(bounceAngle) * ball.speed;

    //             // Move the ball outside the paddle
    //             // to prevent repeated collisions.

    //             if (side === "player") {
    //                 ball.x = paddle.x + paddle.width + ball.radius;
    //             } else {
    //                 ball.x = paddle.x - ball.radius;
    //             }

    //             game.lastHit = side;

    //             // AI reacts to the player's return.

    //             aiReactionTimerRef.current = 0;
    //         },
    //         [],
    //     );

    //     // ------------------------------------------------
    //     // Paddle collision detection
    //     // ------------------------------------------------

    //     const detectPaddleCollisions = useCallback(() => {
    //         const game = gameRef.current;

    //         const ball = game.ball;

    //         const player = game.player;

    //         const ai = game.ai;

    //         // Player paddle collision

    //         const playerCollision =
    //             ball.vx < 0 &&
    //             ball.x - ball.radius <= player.x + player.width &&
    //             ball.x + ball.radius >= player.x &&
    //             ball.y + ball.radius >= player.y &&
    //             ball.y - ball.radius <= player.y + player.height;

    //         if (playerCollision) {
    //             handlePaddleCollision(player, "player");
    //         }

    //         // AI paddle collision

    //         const aiCollision =
    //             ball.vx > 0 &&
    //             ball.x + ball.radius >= ai.x &&
    //             ball.x - ball.radius <= ai.x + ai.width &&
    //             ball.y + ball.radius >= ai.y &&
    //             ball.y - ball.radius <= ai.y + ai.height;

    //         if (aiCollision) {
    //             handlePaddleCollision(ai, "ai");
    //         }
    //     }, [handlePaddleCollision]);

    //     // ------------------------------------------------
    //     // Scoring
    //     // ------------------------------------------------

    //     const handleScoring = useCallback(() => {
    //         const game = gameRef.current;

    //         const ball = game.ball;

    //         // AI scores

    //         if (ball.x + ball.radius < 0) {
    //             game.aiScore += 1;

    //             if (game.aiScore >= winningScore) {
    //                 game.status = "gameOver";

    //                 game.winner = "ai";
    //             } else {
    //                 resetBall(-1);
    //             }

    //             syncUI();

    //             return;
    //         }

    //         // Player scores

    //         if (ball.x - ball.radius > GAME_WIDTH) {
    //             game.playerScore += 1;

    //             if (game.playerScore >= winningScore) {
    //                 game.status = "gameOver";

    //                 game.winner = "player";
    //             } else {
    //                 resetBall(1);
    //             }

    //             syncUI();
    //         }
    //     }, [resetBall, syncUI, winningScore]);

    //     // ------------------------------------------------
    //     // Game physics
    //     // ------------------------------------------------

    //     const updateGame = useCallback(
    //         (deltaTime: number) => {
    //             const game = gameRef.current;

    //             if (game.status !== "playing") {
    //                 return;
    //             }

    //             updatePlayer(deltaTime);

    //             updateAI(deltaTime);

    //             const ball = game.ball;

    //             ball.x += ball.vx * deltaTime;

    //             ball.y += ball.vy * deltaTime;

    //             handleWallCollision();

    //             detectPaddleCollisions();

    //             handleScoring();
    //         },
    //         [
    //             updatePlayer,
    //             updateAI,
    //             handleWallCollision,
    //             detectPaddleCollisions,
    //             handleScoring,
    //         ],
    //     );

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
