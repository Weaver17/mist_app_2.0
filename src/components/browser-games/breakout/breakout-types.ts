export type GameStatus = "ready" | "playing" | "paused" | "gameOver" | "won";

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

export const INITIAL_BALL_SPEED = 360;
export const MAX_BALL_SPEED = 600;

export const BALL_SPEED_INCREMENT = 8;

export const PADDLE_WIDTH = 120;
export const PADDLE_HEIGHT = 14;
export const PADDLE_SPEED = 520;

export const INITIAL_LIVES = 3;

export const FIXED_TIME_STEP = 1 / 120;

// Brick configuration

export const BRICK_ROWS = 6;
export const BRICK_COLUMNS = 12;

export const BRICK_WIDTH = 58;
export const BRICK_HEIGHT = 22;

export const BRICK_GAP = 8;

export const BRICK_TOP_OFFSET = 70;

export const BRICK_COLORS = [
    "#ef4444",
    "#f97316",
    "#eab308",
    "#22c55e",
    "#06b6d4",
    "#8b5cf6",
];

// Visual configuration

export const COLORS = {
    background: "#09090b",
    foreground: "#fafafa",
    muted: "#71717a",
    paddle: "#22c55e",
    ball: "#fafafa",
    border: "#27272a",
};
