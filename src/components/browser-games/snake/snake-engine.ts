import { Difficulty } from "../shared/game-types";
import {
    FOOD_SCORE,
    GRID_COLUMNS,
    GRID_ROWS,
    INITIAL_SNAKE_LENGTH,
    MIN_MOVE_INTERVAL,
    SNAKE_DIFFICULTY_CONFIG,
} from "./snake-types";

import type { Direction, Point, SnakeGameState } from "./snake-types";

export function createInitialGameState(
    difficulty: Difficulty,
    highScore = 0,
): SnakeGameState {
    const centerX = Math.floor(GRID_COLUMNS / 2);
    const centerY = Math.floor(GRID_ROWS / 2);

    const snake = Array.from(
        { length: INITIAL_SNAKE_LENGTH },
        (_, index): Point => ({
            x: centerX - index,
            y: centerY,
        }),
    );

    const state: SnakeGameState = {
        snake,
        food: { x: 0, y: 0 },
        direction: "right",
        nextDirection: "right",
        score: 0,
        highScore,
        foodEaten: 0,
        status: "ready",
    };

    state.food = spawnFood(state.snake);

    return state;
}

// RESET GAME

export function resetGame(game: SnakeGameState, difficulty: Difficulty): void {
    const initialGame = createInitialGameState(difficulty);

    Object.assign(game, initialGame);
}

// export function startGame(state: SnakeGameState): void {
//     if (state.status === "ready") {
//         state.status = "playing";
//     }
// }

export function togglePause(state: SnakeGameState): void {
    if (state.status === "playing") {
        state.status = "paused";
    } else if (state.status === "paused") {
        state.status = "playing";
    }
}

const OPPOSITE_DIRECTIONS: Record<Direction, Direction> = {
    up: "down",
    down: "up",
    left: "right",
    right: "left",
};

export function setDirection(
    state: SnakeGameState,
    direction: Direction,
): void {
    if (state.status !== "playing" && state.status !== "ready") {
        return;
    }

    // Prevent reversing directly into the snake's own body.
    if (OPPOSITE_DIRECTIONS[state.direction] === direction) {
        return;
    }

    state.nextDirection = direction;
}

export function getMoveInterval(
    state: SnakeGameState,
    difficulty: Difficulty,
): number {
    const config = SNAKE_DIFFICULTY_CONFIG[difficulty];

    return Math.max(
        MIN_MOVE_INTERVAL,
        config.initialMoveInterval -
            state.foodEaten * config.speedIncreasePerFood,
    );
}

export function updateGame(state: SnakeGameState): void {
    if (state.status !== "playing") return;

    state.direction = state.nextDirection;

    const head = state.snake[0];
    const nextHead = getNextHead(head, state.direction);

    // Wall collision
    if (
        nextHead.x < 0 ||
        nextHead.x >= GRID_COLUMNS ||
        nextHead.y < 0 ||
        nextHead.y >= GRID_ROWS
    ) {
        state.status = "gameOver";
        return;
    }

    const eatingFood =
        nextHead.x === state.food.x && nextHead.y === state.food.y;

    // When not eating, the tail moves away this turn.
    // This allows the snake to move into the cell the tail just vacated.
    const bodyToCheck = eatingFood ? state.snake : state.snake.slice(0, -1);

    const hitSelf = bodyToCheck.some(
        (segment) => segment.x === nextHead.x && segment.y === nextHead.y,
    );

    if (hitSelf) {
        state.status = "gameOver";
        return;
    }

    state.snake.unshift(nextHead);

    if (eatingFood) {
        state.score += FOOD_SCORE;
        state.foodEaten += 1;
        state.highScore = Math.max(state.highScore, state.score);

        // Winning means filling every grid cell.
        if (state.snake.length >= GRID_COLUMNS * GRID_ROWS) {
            state.status = "won";
            return;
        }

        state.food = spawnFood(state.snake);
    } else {
        state.snake.pop();
    }
}

function getNextHead(head: Point, direction: Direction): Point {
    switch (direction) {
        case "up":
            return { x: head.x, y: head.y - 1 };
        case "down":
            return { x: head.x, y: head.y + 1 };
        case "left":
            return { x: head.x - 1, y: head.y };
        case "right":
            return { x: head.x + 1, y: head.y };
    }
}

function spawnFood(snake: Point[]): Point {
    const occupied = new Set(
        snake.map((segment) => `${segment.x},${segment.y}`),
    );

    const available: Point[] = [];

    for (let y = 0; y < GRID_ROWS; y += 1) {
        for (let x = 0; x < GRID_COLUMNS; x += 1) {
            if (!occupied.has(`${x},${y}`)) {
                available.push({ x, y });
            }
        }
    }

    // The caller handles a full board before another spawn is needed.
    if (available.length === 0) {
        return { x: -1, y: -1 };
    }

    return available[Math.floor(Math.random() * available.length)];
}
