import type { Difficulty, GameStatus } from "../shared/game-types";

export type Direction = "up" | "down" | "left" | "right";

export interface Point {
    x: number;
    y: number;
}

export interface SnakeGameState {
    snake: Point[];
    food: Point;
    direction: Direction;
    nextDirection: Direction;
    score: number;
    highScore: number;
    foodEaten: number;
    status: GameStatus;
}

export interface SnakeDifficultyConfig {
    initialMoveInterval: number;
    speedIncreasePerFood: number;
}

export const SNAKE_DIFFICULTY_CONFIG: Record<
    Difficulty,
    SnakeDifficultyConfig
> = {
    easy: {
        initialMoveInterval: 140,
        speedIncreasePerFood: 2,
    },
    medium: {
        initialMoveInterval: 160,
        speedIncreasePerFood: 3,
    },
    hard: {
        initialMoveInterval: 180,
        speedIncreasePerFood: 4,
    },
};

export const GAME_WIDTH = 840;
export const GAME_HEIGHT = 600;
export const CELL_SIZE = 24;

export const GRID_COLUMNS = GAME_WIDTH / CELL_SIZE;
export const GRID_ROWS = GAME_HEIGHT / CELL_SIZE;

export const INITIAL_SNAKE_LENGTH = 4;
// export const INITIAL_MOVE_INTERVAL = 140;
export const MIN_MOVE_INTERVAL = 55;
// export const SPEED_INCREASE_PER_FOOD = 2;

export const FOOD_SCORE = 10;
