import { clamp, randomDirection } from "../shared/game-physics";
import { DEFAULT_DIFFICULTY, type Difficulty } from "../shared/game-types";
import {
    BALL_RADIUS,
    WINNING_SCORE,
    PONG_DIFFICULTY_CONFIG,
    GAME_HEIGHT,
    GAME_WIDTH,
    PADDLE_HEIGHT,
    PADDLE_WIDTH,
    PLAYER_SPEED,
} from "./pong-types";

import type { PongGameState, InputState, PlayerSide } from "./pong-types";

export { clamp } from "../shared/game-physics";

// --------------------------------------------------
// Create game objects
// --------------------------------------------------

function createPaddle(x: number, y: number) {
    return {
        x,
        y,
        width: PADDLE_WIDTH,
        height: PADDLE_HEIGHT,
        speed: PLAYER_SPEED,
    };
}

function createBall(
    difficulty: Difficulty,
    direction: number = randomDirection(),
) {
    const speed = PONG_DIFFICULTY_CONFIG[difficulty].initialBallSpeed;

    return {
        x: GAME_WIDTH / 2,
        y: GAME_HEIGHT / 2,
        radius: BALL_RADIUS,
        vx: speed * direction,
        vy: speed * 0.25 * randomDirection(),
        speed,
    };
}

// --------------------------------------------------
// Create initial game state
// --------------------------------------------------

export function createInitialGameState(
    difficulty: Difficulty = DEFAULT_DIFFICULTY,
): PongGameState {
    return {
        width: GAME_WIDTH,
        height: GAME_HEIGHT,

        player: createPaddle(32, GAME_HEIGHT / 2 - PADDLE_HEIGHT / 2),

        ai: createPaddle(
            GAME_WIDTH - 32 - PADDLE_WIDTH,
            GAME_HEIGHT / 2 - PADDLE_HEIGHT / 2,
        ),

        ball: createBall(difficulty, randomDirection()),

        playerScore: 0,
        aiScore: 0,

        status: "ready",

        winner: null,

        lastHit: null,
    };
}

// --------------------------------------------------
// Reset ball
// --------------------------------------------------

export function resetBall(
    game: PongGameState,
    difficulty: Difficulty,
    direction: number = randomDirection(),
): void {
    game.ball = createBall(difficulty, direction);

    game.lastHit = null;
}

// --------------------------------------------------
// Reset entire game
// --------------------------------------------------

export function resetGame(
    game: PongGameState,
    difficulty: Difficulty = DEFAULT_DIFFICULTY,
): void {
    const initialGame = createInitialGameState(difficulty);

    Object.assign(game, initialGame);
}

// --------------------------------------------------
// Player movement
// --------------------------------------------------

function updatePlayer(
    game: PongGameState,
    input: InputState,
    deltaTime: number,
): void {
    let direction = 0;

    if (input.up) {
        direction -= 1;
    }

    if (input.down) {
        direction += 1;
    }

    game.player.y += direction * game.player.speed * deltaTime;

    game.player.y = clamp(game.player.y, 0, GAME_HEIGHT - game.player.height);
}

// --------------------------------------------------
// AI movement
// --------------------------------------------------

export function updateAI(
    game: PongGameState,
    difficulty: Difficulty,
    deltaTime: number,
    reactionTimer: number,
    currentTargetY: number,
): {
    reactionTimer: number;
    targetY: number;
} {
    const config = PONG_DIFFICULTY_CONFIG[difficulty];

    const ball = game.ball;

    const ai = game.ai;

    let nextReactionTimer = reactionTimer + deltaTime;

    let nextTargetY = currentTargetY;

    if (nextReactionTimer >= config.reactionDelay) {
        nextReactionTimer = 0;

        let targetY = ball.y;

        // Predict the ball's arrival position.

        if (ball.vx > 0) {
            const distance = ai.x - ball.x;

            const timeToReach = distance / ball.vx;

            targetY = ball.y + ball.vy * timeToReach;

            // Reflect against the top and bottom walls.

            const fieldHeight = GAME_HEIGHT - ball.radius * 2;

            const reflectedPosition =
                (((targetY - ball.radius) % (fieldHeight * 2)) +
                    fieldHeight * 2) %
                (fieldHeight * 2);

            if (reflectedPosition > fieldHeight) {
                targetY = GAME_HEIGHT - reflectedPosition + ball.radius;
            } else {
                targetY = reflectedPosition + ball.radius;
            }
        }

        // Add AI inaccuracy.

        targetY += (Math.random() * 2 - 1) * config.predictionError;

        nextTargetY = targetY;
    }

    const targetPaddleY = nextTargetY - ai.height / 2;

    const difference = targetPaddleY - ai.y;

    const maxMovement = config.aiSpeed * deltaTime;

    ai.y += clamp(difference, -maxMovement, maxMovement);

    ai.y = clamp(ai.y, 0, GAME_HEIGHT - ai.height);

    return {
        reactionTimer: nextReactionTimer,
        targetY: nextTargetY,
    };
}

// --------------------------------------------------
// Wall collision
// --------------------------------------------------

function handleWallCollision(game: PongGameState): void {
    const ball = game.ball;

    if (ball.y - ball.radius <= 0 && ball.vy < 0) {
        ball.y = ball.radius;

        ball.vy *= -1;
    }

    if (ball.y + ball.radius >= GAME_HEIGHT && ball.vy > 0) {
        ball.y = GAME_HEIGHT - ball.radius;

        ball.vy *= -1;
    }
}

// --------------------------------------------------
// Paddle collision
// --------------------------------------------------

function handlePaddleCollision(
    game: PongGameState,
    side: PlayerSide,
    difficulty: Difficulty = "medium",
): void {
    const ball = game.ball;

    const paddle = side === "player" ? game.player : game.ai;

    const paddleCenter = paddle.y + paddle.height / 2;

    const impactOffset = (ball.y - paddleCenter) / (paddle.height / 2);

    const normalizedImpact = clamp(impactOffset, -1, 1);

    const maxBounceAngle = Math.PI / 3;

    const bounceAngle = normalizedImpact * maxBounceAngle;

    const ballSpeedInc = PONG_DIFFICULTY_CONFIG[difficulty].ballSpeedIncrement;
    const maxBallSpeed = PONG_DIFFICULTY_CONFIG[difficulty].maxBallSpeed;

    ball.speed = Math.min(ball.speed + ballSpeedInc, maxBallSpeed);

    const direction = side === "player" ? 1 : -1;

    ball.vx = Math.cos(bounceAngle) * ball.speed * direction;

    ball.vy = Math.sin(bounceAngle) * ball.speed;

    // Prevent the ball from remaining
    // inside the paddle.

    if (side === "player") {
        ball.x = paddle.x + paddle.width + ball.radius;
    } else {
        ball.x = paddle.x - ball.radius;
    }

    game.lastHit = side;
}

// --------------------------------------------------
// Detect paddle collisions
// --------------------------------------------------

function detectPaddleCollisions(game: PongGameState): void {
    const ball = game.ball;

    const player = game.player;

    const ai = game.ai;

    // Player collision

    const playerCollision =
        ball.vx < 0 &&
        ball.x - ball.radius <= player.x + player.width &&
        ball.x + ball.radius >= player.x &&
        ball.y + ball.radius >= player.y &&
        ball.y - ball.radius <= player.y + player.height;

    if (playerCollision) {
        handlePaddleCollision(game, "player");
    }

    // AI collision

    const aiCollision =
        ball.vx > 0 &&
        ball.x + ball.radius >= ai.x &&
        ball.x - ball.radius <= ai.x + ai.width &&
        ball.y + ball.radius >= ai.y &&
        ball.y - ball.radius <= ai.y + ai.height;

    if (aiCollision) {
        handlePaddleCollision(game, "ai");
    }
}

// --------------------------------------------------
// Scoring
// --------------------------------------------------

export function handleScoring(
    game: PongGameState,
    difficulty: Difficulty,
    winningScore: number,
): boolean {
    const ball = game.ball;

    // AI scores

    if (ball.x + ball.radius < 0) {
        game.aiScore += 1;

        if (game.aiScore >= winningScore) {
            game.status = "gameOver";

            game.winner = "ai";
        } else {
            resetBall(game, difficulty, -1);
        }

        return true;
    }

    // Player scores

    if (ball.x - ball.radius > GAME_WIDTH) {
        game.playerScore += 1;

        if (game.playerScore >= winningScore) {
            game.status = "gameOver";

            game.winner = "player";
        } else {
            resetBall(game, difficulty, 1);
        }

        return true;
    }

    return false;
}

// --------------------------------------------------
// Update game
// --------------------------------------------------

export function updateGame(
    game: PongGameState,
    input: InputState,
    difficulty: Difficulty,
    deltaTime: number,
    aiState: {
        reactionTimer: number;
        targetY: number;
    },
    winningScore: number = WINNING_SCORE,
): {
    reactionTimer: number;
    targetY: number;
    scored: boolean;
} {
    if (game.status !== "playing") {
        return {
            ...aiState,
            scored: false,
        };
    }

    // Update player

    updatePlayer(game, input, deltaTime);

    // Update AI

    const nextAIState = updateAI(
        game,
        difficulty,
        deltaTime,
        aiState.reactionTimer,
        aiState.targetY,
    );

    // Update ball

    game.ball.x += game.ball.vx * deltaTime;

    game.ball.y += game.ball.vy * deltaTime;

    // Handle collisions

    handleWallCollision(game);

    detectPaddleCollisions(game);

    // Handle scoring

    const scored = handleScoring(game, difficulty, winningScore);

    return {
        ...nextAIState,
        scored,
    };
}
