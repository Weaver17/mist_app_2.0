export type GameStatus = "ready" | "playing" | "paused" | "gameOver" | "won";

export type Difficulty = "easy" | "medium" | "hard";

export interface Paddle {
    x: number;
    y: number;
    width: number;
    height: number;
    speed: number;
}

export interface Ball {
    x: number;
    y: number;
    radius: number;
    vx: number;
    vy: number;
    speed: number;
}
