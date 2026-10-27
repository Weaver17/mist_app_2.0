import { GAME_COLORS, GameStatus } from "../shared/game-types";

export type TetrominoType = "I" | "O" | "T" | "S" | "Z" | "J" | "L";

export type Cell = TetrominoType | null;

export interface Position {
    x: number;
    y: number;
}

export interface ActivePiece {
    type: TetrominoType;
    rotation: number;
    x: number;
    y: number;
}

export interface TetrisGameState {
    board: Cell[][];
    activePiece: ActivePiece;
    nextQueue: TetrominoType[];
    heldPiece: TetrominoType | null;
    canHold: boolean;
    score: number;
    highScore: number;
    lines: number;
    level: number;
    status: GameStatus;
    dropInterval: number;
}

export const BOARD_COLUMNS = 10;
export const BOARD_ROWS = 20;
export const HIDDEN_ROWS = 2;
export const TOTAL_ROWS = BOARD_ROWS + HIDDEN_ROWS;

export const CELL_SIZE = 30;

export const BOARD_WIDTH = BOARD_COLUMNS * CELL_SIZE;
export const SIDE_PANEL_WIDTH = 180;

export const GAME_WIDTH = BOARD_WIDTH + SIDE_PANEL_WIDTH;
export const GAME_HEIGHT = BOARD_ROWS * CELL_SIZE;

export const PREVIEW_CELL_SIZE = 22;

export const INITIAL_LEVEL = 1;
export const LINES_PER_LEVEL = 10;
export const INITIAL_DROP_INTERVAL = 800;
export const MIN_DROP_INTERVAL = 80;
export const DROP_SPEED_MULTIPLIER = 0.85;

export const LINE_SCORES: Record<number, number> = {
    0: 0,
    1: 100,
    2: 300,
    3: 500,
    4: 800,
};

// export const TETROMINO_COLORS: Record<TetrominoType, string> = {
//   I: "#22d3ee",
//   O: "#facc15",
//   T: "#c084fc",
//   S: "#4ade80",
//   Z: "#fb7185",
//   J: "#60a5fa",
//   L: "#fb923c",
// };
export const TETROMINO_COLORS: Record<TetrominoType, string> = {
    I: GAME_COLORS.red,
    O: GAME_COLORS.pink,
    T: GAME_COLORS.yellow,
    S: GAME_COLORS.lightGreen,
    Z: GAME_COLORS.lightBlue,
    J: GAME_COLORS.orange,
    L: GAME_COLORS.purple,
};

// export const BACKGROUND_COLOR = "#09090b";
// export const GRID_COLOR = "#27272a";
