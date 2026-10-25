import { Difficulty, GameStatus } from "../shared/game-types";

// GAME TYPES
export enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

// export enum GameStatus {
//     Idle = "IDLE",
//     Playing = "PLAYING",
//     Paused = "PAUSED",
//     GameOver = "GAME_OVER",
// }

// export enum Difficulty {
//     Easy = "EASY",
//     Medium = "MEDIUM",
//     Hard = "HARD",
// }

export enum PowerUpType {
    SlowMotion = "SLOW_MOTION",
    DoublePoints = "DOUBLE_POINTS",
    Phase = "PHASE",
}

export interface Position {
    x: number;
    y: number;
}

export interface Food {
    position: Position;
    spawnTime: number;
}

export interface PowerUp {
    type: PowerUpType;
    position: Position;
    duration: number;
    spawnTime: number;
}

export interface ActivePowerUp {
    type: PowerUpType;
    expiresAt: number;
}

export interface Obstacle {
    position: Position;
}

export interface GameState {
    status: GameStatus;
    snake: Position[];
    direction: Direction;
    nextDirection: Direction;
    food: Food;
    powerUp: PowerUp | null;
    activePowerUps: ActivePowerUp[];
    obstacles: Obstacle[];
    score: number;
    level: number;
    speed: number;
    gridWidth: number;
    gridHeight: number;
    obstaclesEnabled: boolean;
    difficulty: Difficulty;
    lastMoveTime: number;
    foodEaten: number;
}

export interface GameConfig {
    gridWidth: number;
    gridHeight: number;
    cellSize: number;
    initialSpeed: number;
    speedIncrement: number;
    maxSpeed: number;
    foodScore: number;
    powerUpScore: number;
    powerUpSpawnChance: number;
    powerUpDuration: number;
    slowMotionFactor: number;
    levelUpThreshold: number;
    obstaclesEnabled: boolean;
    obstacleCount: number;
    difficulty: Difficulty;
    debugMode: boolean;
}

export const DIR_VECTORS: Record<Direction, Position> = {
    [Direction.Up]: { x: 0, y: -1 },
    [Direction.Down]: { x: 0, y: 1 },
    [Direction.Left]: { x: -1, y: 0 },
    [Direction.Right]: { x: 1, y: 0 },
};

export const OPPOSITE_DIR: Record<Direction, Direction> = {
    [Direction.Up]: Direction.Down,
    [Direction.Down]: Direction.Up,
    [Direction.Left]: Direction.Right,
    [Direction.Right]: Direction.Left,
};

// UI

export interface GameHUDProps {
    score: number;
    highScore: number;
    level: number;
    speed: number;
    activePowerUps: ActivePowerUp[];
}

export interface GameOverlayProps {
    status: GameStatus;
    score: number;
    highScore: number;
    lastScore: number;
    selectedDifficulty: Difficulty;
    obstaclesEnabled: boolean;
    onSelectDifficulty: (difficulty: Difficulty) => void;
    onToggleObstacles: () => void;
    onStart: () => void;
    onResume: () => void;
}

export interface DPadProps {
    onDirection: (dir: Direction) => void;
}

export interface GameBoardProps {
    canvasRef: React.RefObject<HTMLCanvasElement | null>;
    width: number;
    height: number;
}

export interface SnakeGameProps {
    className?: string;
}

// CONFIG

const BASE_CONFIG: Omit<
    GameConfig,
    | "difficulty"
    | "initialSpeed"
    | "speedIncrement"
    | "maxSpeed"
    | "obstacleCount"
> = {
    gridWidth: 20,
    gridHeight: 20,
    cellSize: 24,
    foodScore: 10,
    powerUpScore: 25,
    powerUpSpawnChance: 0.15,
    powerUpDuration: 5000,
    slowMotionFactor: 0.5,
    levelUpThreshold: 5,
    obstaclesEnabled: false,
    debugMode: false,
};

const DIFFICULTY_SETTINGS: Record<
    Difficulty,
    Pick<
        GameConfig,
        | "initialSpeed"
        | "speedIncrement"
        | "maxSpeed"
        | "obstacleCount"
        | "difficulty"
    >
> = {
    easy: {
        difficulty: "easy",
        initialSpeed: 120,
        speedIncrement: 3,
        maxSpeed: 200,
        obstacleCount: 3,
    },
    medium: {
        difficulty: "medium",
        initialSpeed: 150,
        speedIncrement: 5,
        maxSpeed: 280,
        obstacleCount: 5,
    },
    hard: {
        difficulty: "hard",
        initialSpeed: 200,
        speedIncrement: 8,
        maxSpeed: 400,
        obstacleCount: 8,
    },
};

export function createGameConfig(
    difficulty: Difficulty = "medium",
    overrides: Partial<GameConfig> = {},
): GameConfig {
    return {
        ...BASE_CONFIG,
        ...DIFFICULTY_SETTINGS[difficulty],
        ...overrides,
    };
}

export const DEFAULT_CONFIG = createGameConfig("medium");
