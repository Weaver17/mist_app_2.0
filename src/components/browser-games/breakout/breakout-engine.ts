import {
    BALL_RADIUS,
    BALL_SPEED_INCREMENT,
    BRICK_COLORS,
    BRICK_COLUMNS,
    BRICK_GAP,
    BRICK_HEIGHT,
    BRICK_ROWS,
    BRICK_TOP_OFFSET,
    BRICK_WIDTH,
    GAME_HEIGHT,
    GAME_WIDTH,
    INITIAL_BALL_SPEED,
    INITIAL_LIVES,
    MAX_BALL_SPEED,
    PADDLE_HEIGHT,
    PADDLE_SPEED,
    PADDLE_WIDTH,
} from "./breakout-types";

import type {
    Ball,
    Brick,
    GameState,
    InputState,
    Paddle,
} from "./breakout-types";

// --------------------------------------------------
// Utility functions
// --------------------------------------------------

export function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
}

function randomDirection(): number {
    return Math.random() < 0.5 ? -1 : 1;
}

// --------------------------------------------------
// Create ball
// --------------------------------------------------

function createBall(): Ball {
    return {
        x: GAME_WIDTH / 2,

        y: GAME_HEIGHT - 100,

        radius: BALL_RADIUS,

        vx: INITIAL_BALL_SPEED * 0.25 * randomDirection(),

        vy: -INITIAL_BALL_SPEED,

        speed: INITIAL_BALL_SPEED,
    };
}

// --------------------------------------------------
// Create paddle
// --------------------------------------------------

function createPaddle(): Paddle {
    return {
        x: GAME_WIDTH / 2 - PADDLE_WIDTH / 2,

        y: GAME_HEIGHT - 40,

        width: PADDLE_WIDTH,

        height: PADDLE_HEIGHT,

        speed: PADDLE_SPEED,
    };
}

// --------------------------------------------------
// Create bricks
// --------------------------------------------------

export function createBricks(): Brick[] {
    const bricks: Brick[] = [];

    const totalWidth =
        BRICK_COLUMNS * BRICK_WIDTH + (BRICK_COLUMNS - 1) * BRICK_GAP;

    const startX = (GAME_WIDTH - totalWidth) / 2;

    let id = 0;

    for (let row = 0; row < BRICK_ROWS; row++) {
        for (let column = 0; column < BRICK_COLUMNS; column++) {
            bricks.push({
                id,

                x: startX + column * (BRICK_WIDTH + BRICK_GAP),

                y: BRICK_TOP_OFFSET + row * (BRICK_HEIGHT + BRICK_GAP),

                width: BRICK_WIDTH,

                height: BRICK_HEIGHT,

                color: BRICK_COLORS[row % BRICK_COLORS.length],

                destroyed: false,
            });

            id++;
        }
    }

    return bricks;
}

// --------------------------------------------------
// Create initial game state
// --------------------------------------------------

export function createInitialGameState(): GameState {
    return {
        width: GAME_WIDTH,

        height: GAME_HEIGHT,

        ball: createBall(),

        paddle: createPaddle(),

        bricks: createBricks(),

        score: 0,

        lives: INITIAL_LIVES,

        status: "ready",
    };
}

// --------------------------------------------------
// Reset ball
// --------------------------------------------------

export function resetBall(game: GameState): void {
    game.ball = createBall();

    game.paddle.x = GAME_WIDTH / 2 - game.paddle.width / 2;
}

// --------------------------------------------------
// Reset game
// --------------------------------------------------

export function resetGame(game: GameState): void {
    const initialGame = createInitialGameState();

    Object.assign(game, initialGame);
}

// --------------------------------------------------
// Paddle movement
// --------------------------------------------------

function updatePaddle(
    game: GameState,
    input: InputState,
    deltaTime: number,
): void {
    const paddle = game.paddle;

    // Mouse movement

    if (input.mouseX !== null) {
        paddle.x = input.mouseX - paddle.width / 2;
    } else {
        // Keyboard movement

        let direction = 0;

        if (input.left) {
            direction -= 1;
        }

        if (input.right) {
            direction += 1;
        }

        paddle.x += direction * paddle.speed * deltaTime;
    }

    // Keep paddle inside the game field.

    paddle.x = clamp(paddle.x, 0, GAME_WIDTH - paddle.width);
}

// --------------------------------------------------
// Ball-wall collision
// --------------------------------------------------

function handleWallCollision(ball: Ball): void {
    // Left wall

    if (ball.x - ball.radius <= 0 && ball.vx < 0) {
        ball.x = ball.radius;

        ball.vx *= -1;
    }

    // Right wall

    if (ball.x + ball.radius >= GAME_WIDTH && ball.vx > 0) {
        ball.x = GAME_WIDTH - ball.radius;

        ball.vx *= -1;
    }

    // Top wall

    if (ball.y - ball.radius <= 0 && ball.vy < 0) {
        ball.y = ball.radius;

        ball.vy *= -1;
    }
}

// --------------------------------------------------
// Paddle collision
// --------------------------------------------------

function handlePaddleCollision(game: GameState): void {
    const ball = game.ball;

    const paddle = game.paddle;

    const paddleCenter = paddle.x + paddle.width / 2;

    // Calculate impact position.
    //
    // -1 = far left of paddle
    //  0 = center
    //  1 = far right of paddle

    const impactOffset = (ball.x - paddleCenter) / (paddle.width / 2);

    const normalizedImpact = clamp(impactOffset, -1, 1);

    // Maximum rebound angle: 60 degrees.

    const maxBounceAngle = Math.PI / 3;

    const bounceAngle = normalizedImpact * maxBounceAngle;

    // Increase ball speed slightly.

    ball.speed = Math.min(ball.speed + BALL_SPEED_INCREMENT, MAX_BALL_SPEED);

    // Calculate new velocity.

    ball.vx = Math.sin(bounceAngle) * ball.speed;

    ball.vy = -Math.cos(bounceAngle) * ball.speed;

    // Prevent repeated collision detection.

    ball.y = paddle.y - ball.radius;
}

// --------------------------------------------------
// Paddle collision detection
// --------------------------------------------------

function detectPaddleCollision(game: GameState): void {
    const ball = game.ball;

    const paddle = game.paddle;

    const collision =
        ball.vy > 0 &&
        ball.x + ball.radius >= paddle.x &&
        ball.x - ball.radius <= paddle.x + paddle.width &&
        ball.y + ball.radius >= paddle.y &&
        ball.y - ball.radius <= paddle.y + paddle.height;

    if (collision) {
        handlePaddleCollision(game);
    }
}

// --------------------------------------------------
// Circle / rectangle collision
// --------------------------------------------------

function circleRectCollision(ball: Ball, rect: Brick): boolean {
    const closestX = clamp(ball.x, rect.x, rect.x + rect.width);

    const closestY = clamp(ball.y, rect.y, rect.y + rect.height);

    const distanceX = ball.x - closestX;

    const distanceY = ball.y - closestY;

    const distanceSquared = distanceX * distanceX + distanceY * distanceY;

    return distanceSquared <= ball.radius * ball.radius;
}

// --------------------------------------------------
// Brick collision
// --------------------------------------------------

function handleBrickCollision(game: GameState): void {
    const ball = game.ball;

    for (const brick of game.bricks) {
        if (brick.destroyed) {
            continue;
        }

        if (!circleRectCollision(ball, brick)) {
            continue;
        }

        brick.destroyed = true;

        game.score += 10;

        // Determine whether the collision
        // happened horizontally or vertically.

        const previousX = ball.x - ball.vx * (1 / 120);

        const previousY = ball.y - ball.vy * (1 / 120);

        const wasOutsideHorizontally =
            previousX + ball.radius <= brick.x ||
            previousX - ball.radius >= brick.x + brick.width;

        const wasOutsideVertically =
            previousY + ball.radius <= brick.y ||
            previousY - ball.radius >= brick.y + brick.height;

        if (wasOutsideHorizontally && !wasOutsideVertically) {
            ball.vx *= -1;
        } else {
            ball.vy *= -1;
        }

        // Only destroy one brick per update.

        break;
    }
}

// --------------------------------------------------
// Lives and game over
// --------------------------------------------------

function handleLifeLoss(game: GameState): void {
    const ball = game.ball;

    if (ball.y - ball.radius > GAME_HEIGHT) {
        game.lives -= 1;

        if (game.lives <= 0) {
            game.lives = 0;

            game.status = "gameOver";

            return;
        }

        resetBall(game);
    }
}

// --------------------------------------------------
// Win condition
// --------------------------------------------------

function handleWinCondition(game: GameState): void {
    const remainingBricks = game.bricks.filter((brick) => !brick.destroyed);

    if (remainingBricks.length === 0) {
        game.status = "won";
    }
}

// --------------------------------------------------
// Update game
// --------------------------------------------------

export function updateGame(
    game: GameState,
    input: InputState,
    deltaTime: number,
): void {
    if (game.status !== "playing") {
        return;
    }

    // Update paddle

    updatePaddle(game, input, deltaTime);

    // Update ball

    const ball = game.ball;

    ball.x += ball.vx * deltaTime;

    ball.y += ball.vy * deltaTime;

    // Handle collisions

    handleWallCollision(ball);

    detectPaddleCollision(game);

    handleBrickCollision(game);

    // Check for life loss

    handleLifeLoss(game);

    // Check for victory

    handleWinCondition(game);
}
