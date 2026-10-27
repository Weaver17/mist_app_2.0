export type GameStatus = "ready" | "playing" | "paused" | "gameOver" | "won";

export type Difficulty = "easy" | "medium" | "hard";

export const DEFAULT_DIFFICULTY = "medium";

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

export const GAME_COLORS = {
    background: "#171717",
    foreground: "#fafafa",
    gray: "2e2e2e",
    muted: "#71717a",
    primary: "#0284b8",
    secondary: "e8c902",
    accent: "2f9cc7",
    white: "#f6f6f6",
    darkGray: "#444449",
    red: "#c22d2d",
    redOrange: "#e15429",
    orange: "#f97316",
    yellow: "#eab308",
    darkGreen: "#23bf0b",
    lightGreen: "#22c55e",
    lightBlue: "#06b6d4",
    darkBlue: "#0663d4",
    pink: "#f65cf1",
    purple: "#8b5cf6",
};
