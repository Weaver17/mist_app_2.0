import { Direction, GameConfig, GameState } from "../snake-types";
import { createInitialFood } from "./food";
import { generateObstacles } from "./obstacles";
import { getInitialSnake } from "./snake";

export function createInitialState(config: GameConfig): GameState {
    const snake = getInitialSnake(config);
    const food = createInitialFood(config, snake);
    const obstacles = generateObstacles(config, [...snake, food.position]);

    return {
        status: "ready",
        snake,
        direction: Direction.Left,
        nextDirection: Direction.Left,
        food,
        powerUp: null,
        activePowerUps: [],
        obstacles,
        score: 0,
        level: 1,
        speed: config.initialSpeed,
        gridWidth: config.gridWidth,
        gridHeight: config.gridHeight,
        obstaclesEnabled: config.obstaclesEnabled,
        difficulty: config.difficulty,
        lastMoveTime: 0,
        foodEaten: 0,
    };
}
