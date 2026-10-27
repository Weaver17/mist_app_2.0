import type {
    Ball,
    Difficulty,
    GameStatus,
    Paddle,
} from "../shared/game-types";

export type PlayerSide = "player" | "ai";

export interface PongGameState {
    width: number;
    height: number;
    player: Paddle;
    ai: Paddle;
    ball: Ball;
    playerScore: number;
    aiScore: number;
    status: GameStatus;
    winner: PlayerSide | null;
    lastHit: PlayerSide | null;
}

export interface PongDifficultyConfig {
    aiSpeed: number;
    reactionDelay: number;
    predictionError: number;
    initialBallSpeed: number;
    maxBallSpeed: number;
    ballSpeedIncrement: number;
}

export interface GameConfig {
    winningScore: number;
    difficulty: Difficulty;
}

export interface InputState {
    up: boolean;
    down: boolean;
}

// CONSTANTS ---------------------

export const GAME_WIDTH = 900;
export const GAME_HEIGHT = 500;

export const PADDLE_WIDTH = 12;
export const PADDLE_HEIGHT = 100;

export const BALL_RADIUS = 9;

export const PLAYER_SPEED = 440;

// export const INITIAL_BALL_SPEED = 360;
// export const MAX_BALL_SPEED = 720;

// export const BALL_SPEED_INCREMENT = 22;

export const FIXED_TIME_STEP = 1 / 120;

export const WINNING_SCORE = 7;

// export const COLORS = {
//     background: "#171717",
//     foreground: "#fafafa",
//     muted: "#71717a",
//     accent: "#0284b8",
//     player: "#0284b8",
//     ai: "#f6f6f6",
//     centerLine: "#444449",
// };

export const PONG_DIFFICULTY_CONFIG: Record<Difficulty, PongDifficultyConfig> =
    {
        easy: {
            aiSpeed: 220,
            reactionDelay: 0.22,
            predictionError: 85,
            initialBallSpeed: 360,
            maxBallSpeed: 540,
            ballSpeedIncrement: 22,
        },

        medium: {
            aiSpeed: 340,
            reactionDelay: 0.1,
            predictionError: 35,
            initialBallSpeed: 360,
            maxBallSpeed: 720,
            ballSpeedIncrement: 32,
        },

        hard: {
            aiSpeed: 460,
            reactionDelay: 0.025,
            predictionError: 8,
            initialBallSpeed: 540,
            maxBallSpeed: 1080,
            ballSpeedIncrement: 38,
        },
    };
