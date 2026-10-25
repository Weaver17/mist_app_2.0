export type GameStatus = "ready" | "playing" | "paused" | "gameOver" | "won";

export type Difficulty = "easy" | "medium" | "hard";

export interface DifficultyConfig {
    initialBallSpeed: number;
    maxBallSpeed: number;
    ballSpeedIncrement: number;
    brickRows: number;
}

// export const DEFAULT_DIFFICULTY: Difficulty = "medium";

export const DIFFICULTY_CONFIG: Record<Difficulty, DifficultyConfig> = {
    easy: {
        initialBallSpeed: 300,
        maxBallSpeed: 480,
        ballSpeedIncrement: 6,
        brickRows: 6,
    },
    medium: {
        initialBallSpeed: 360,
        maxBallSpeed: 600,
        ballSpeedIncrement: 8,
        brickRows: 8,
    },
    hard: {
        initialBallSpeed: 420,
        maxBallSpeed: 720,
        ballSpeedIncrement: 12,
        brickRows: 10,
    },
};

export interface Ball {
    x: number;
    y: number;
    radius: number;
    vx: number;
    vy: number;
    speed: number;
}

export interface Paddle {
    x: number;
    y: number;
    width: number;
    height: number;
    speed: number;
}

export interface Brick {
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
    destroyed: boolean;
}

export interface GameState {
    width: number;
    height: number;

    ball: Ball;
    paddle: Paddle;
    bricks: Brick[];

    score: number;
    lives: number;

    status: GameStatus;
}

export interface InputState {
    left: boolean;
    right: boolean;

    // When using the mouse, the paddle
    // follows the pointer position.
    mouseX: number | null;
}

export const GAME_WIDTH = 900;
export const GAME_HEIGHT = 600;

export const BALL_RADIUS = 9;

// export const INITIAL_BALL_SPEED = 360;
export const MAX_BALL_SPEED = 600;

export const BALL_SPEED_INCREMENT = 8;

export const PADDLE_WIDTH = 120;
export const PADDLE_HEIGHT = 14;
export const PADDLE_SPEED = 520;

export const INITIAL_LIVES = 3;

export const FIXED_TIME_STEP = 1 / 120;

// Brick configuration

// export const BRICK_ROWS = 6;
export const BRICK_COLUMNS = 12;

export const BRICK_WIDTH = 58;
export const BRICK_HEIGHT = 22;

export const BRICK_GAP = 8;

export const BRICK_TOP_OFFSET = 70;

export const BRICK_COLORS = [
    "#ef4444",
    "#e15429",
    "#f97316",
    "#eab308",
    "#23bf0b",
    "#22c55e",
    "#06b6d4",
    "#0663d4",
    "#f65cf1",
    "#8b5cf6",
];

// Visual configuration

export const COLORS = {
    background: "#171717",
    foreground: "#fafafa",
    muted: "#71717a",
    paddle: "#0284b8",
    ball: "#fafafa",
    border: "#27272a",
};
