import {
    BOARD_COLUMNS,
    BOARD_ROWS,
    DROP_SPEED_MULTIPLIER,
    INITIAL_DROP_INTERVAL,
    INITIAL_LEVEL,
    LINE_SCORES,
    LINES_PER_LEVEL,
    MIN_DROP_INTERVAL,
} from "./tetris-types";

import type {
    ActivePiece,
    Cell,
    TetrisGameState,
    Position,
    TetrominoType,
} from "./tetris-types";

export const PIECE_TYPES: TetrominoType[] = ["I", "O", "T", "S", "Z", "J", "L"];

// Each piece is represented in a 4x4 grid.
export const SHAPES: Record<TetrominoType, Position[]> = {
    I: [
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 1 },
        { x: 3, y: 1 },
    ],
    O: [
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 1 },
    ],
    T: [
        { x: 1, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 1 },
    ],
    S: [
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 1 },
    ],
    Z: [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 1 },
    ],
    J: [
        { x: 0, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 1 },
    ],
    L: [
        { x: 2, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 1 },
    ],
};

function shuffleBag(): TetrominoType[] {
    const bag = [...PIECE_TYPES];

    for (let i = bag.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [bag[i], bag[j]] = [bag[j], bag[i]];
    }

    return bag;
}

function createQueue(): TetrominoType[] {
    return [...shuffleBag(), ...shuffleBag()];
}

function takeNextPiece(queue: TetrominoType[]): {
    type: TetrominoType;
    queue: TetrominoType[];
} {
    let nextQueue = [...queue];

    if (nextQueue.length < 7) {
        nextQueue = [...nextQueue, ...shuffleBag()];
    }

    const [type, ...remaining] = nextQueue;

    return { type, queue: remaining };
}

function createBoard(): Cell[][] {
    return Array.from({ length: BOARD_ROWS }, () =>
        Array<Cell>(BOARD_COLUMNS).fill(null),
    );
}

function spawnPiece(type: TetrominoType): ActivePiece {
    return {
        type,
        rotation: 0,
        x: Math.floor(BOARD_COLUMNS / 2) - 2,
        y: 0,
    };
}

export function createInitialGameState(highScore = 0): TetrisGameState {
    const queue = createQueue();
    const { type, queue: remaining } = takeNextPiece(queue);

    return {
        board: createBoard(),
        activePiece: spawnPiece(type),
        nextQueue: remaining,
        heldPiece: null,
        canHold: true,
        score: 0,
        highScore,
        lines: 0,
        level: INITIAL_LEVEL,
        status: "ready",
        dropInterval: INITIAL_DROP_INTERVAL,
    };
}

export function startGame(game: TetrisGameState): void {
    if (game.status === "ready") {
        game.status = "playing";
    }
}

export function pauseGame(game: TetrisGameState): void {
    if (game.status === "playing") {
        game.status = "paused";
    }
}

export function resumeGame(game: TetrisGameState): void {
    if (game.status === "paused") {
        game.status = "playing";
    }
}

export function resetGame(game: TetrisGameState): TetrisGameState {
    return createInitialGameState(game.highScore);
}

export function getPieceCells(piece: ActivePiece): Position[] {
    return SHAPES[piece.type].map((cell) => {
        let { x, y } = cell;

        for (let i = 0; i < piece.rotation; i += 1) {
            [x, y] = [3 - y, x];
        }

        return {
            x: x + piece.x,
            y: y + piece.y,
        };
    });
}

export function isValidPosition(board: Cell[][], piece: ActivePiece): boolean {
    return getPieceCells(piece).every(({ x, y }) => {
        if (x < 0 || x >= BOARD_COLUMNS || y >= BOARD_ROWS) {
            return false;
        }

        // Pieces may be partially above the visible board.
        if (y < 0) {
            return true;
        }

        return board[y][x] === null;
    });
}

export function movePiece(
    game: TetrisGameState,
    dx: number,
    dy: number,
): boolean {
    if (game.status !== "playing") return false;

    const candidate = {
        ...game.activePiece,
        x: game.activePiece.x + dx,
        y: game.activePiece.y + dy,
    };

    if (!isValidPosition(game.board, candidate)) {
        if (dy > 0) {
            lockPiece(game);
        }

        return false;
    }

    game.activePiece = candidate;
    return true;
}

export function rotatePiece(
    game: TetrisGameState,
    direction: 1 | -1 = 1,
): boolean {
    if (game.status !== "playing") return false;

    const piece = game.activePiece;
    const rotation = (piece.rotation + direction + 4) % 4;

    // Practical wall kicks for ordinary and I pieces.
    const kicks: Position[] =
        piece.type === "I"
            ? [
                  { x: 0, y: 0 },
                  { x: -2, y: 0 },
                  { x: 2, y: 0 },
                  { x: -1, y: 0 },
                  { x: 1, y: 0 },
                  { x: 0, y: -1 },
                  { x: 0, y: -2 },
              ]
            : [
                  { x: 0, y: 0 },
                  { x: -1, y: 0 },
                  { x: 1, y: 0 },
                  { x: -2, y: 0 },
                  { x: 2, y: 0 },
                  { x: 0, y: -1 },
                  { x: -1, y: -1 },
                  { x: 1, y: -1 },
              ];

    for (const kick of kicks) {
        const candidate: ActivePiece = {
            ...piece,
            rotation,
            x: piece.x + kick.x,
            y: piece.y + kick.y,
        };

        if (isValidPosition(game.board, candidate)) {
            game.activePiece = candidate;
            return true;
        }
    }

    return false;
}

export function softDrop(game: TetrisGameState): void {
    if (game.status !== "playing") return;

    const moved = movePiece(game, 0, 1);

    if (moved) {
        game.score += 1;
        updateHighScore(game);
    }
}

export function hardDrop(game: TetrisGameState): void {
    if (game.status !== "playing") return;

    let distance = 0;

    while (
        isValidPosition(game.board, {
            ...game.activePiece,
            y: game.activePiece.y + 1,
        })
    ) {
        game.activePiece.y += 1;
        distance += 1;
    }

    game.score += distance * 2;
    updateHighScore(game);
    lockPiece(game);
}

export function holdPiece(game: TetrisGameState): void {
    if (game.status !== "playing" || !game.canHold) return;

    const currentType = game.activePiece.type;

    if (game.heldPiece === null) {
        const next = takeNextPiece(game.nextQueue);

        game.heldPiece = currentType;
        game.nextQueue = next.queue;
        game.activePiece = spawnPiece(next.type);
    } else {
        const heldType = game.heldPiece;

        game.heldPiece = currentType;
        game.activePiece = spawnPiece(heldType);
    }

    game.canHold = false;

    if (!isValidPosition(game.board, game.activePiece)) {
        game.status = "gameOver";
    }
}

export function updateGame(game: TetrisGameState, deltaTime: number): void {
    if (game.status !== "playing") return;

    // The component accumulates elapsed time and calls this
    // when the current gravity interval has elapsed.
    void deltaTime;
    movePiece(game, 0, 1);
}

function lockPiece(game: TetrisGameState): void {
    const cells = getPieceCells(game.activePiece);

    // Any locked cell above the board ends the game.
    if (cells.some(({ y }) => y < 0)) {
        game.status = "gameOver";
        return;
    }

    for (const { x, y } of cells) {
        if (y >= 0 && y < BOARD_ROWS && x >= 0 && x < BOARD_COLUMNS) {
            game.board[y][x] = game.activePiece.type;
        }
    }

    clearLines(game);
    spawnNext(game);
}

function clearLines(game: TetrisGameState): void {
    const remainingRows = game.board.filter((row) =>
        row.some((cell) => cell === null),
    );

    const cleared = BOARD_ROWS - remainingRows.length;

    if (cleared === 0) return;

    const emptyRows = Array.from({ length: cleared }, () =>
        Array<Cell>(BOARD_COLUMNS).fill(null),
    );

    game.board = [...emptyRows, ...remainingRows];

    game.lines += cleared;
    game.score += (LINE_SCORES[cleared] ?? 0) * game.level;

    game.level = Math.floor(game.lines / LINES_PER_LEVEL) + INITIAL_LEVEL;

    game.dropInterval = Math.max(
        MIN_DROP_INTERVAL,
        INITIAL_DROP_INTERVAL * Math.pow(DROP_SPEED_MULTIPLIER, game.level - 1),
    );

    updateHighScore(game);
}

function spawnNext(game: TetrisGameState): void {
    const next = takeNextPiece(game.nextQueue);

    game.activePiece = spawnPiece(next.type);
    game.nextQueue = next.queue;
    game.canHold = true;

    if (!isValidPosition(game.board, game.activePiece)) {
        game.status = "gameOver";
    }
}

function updateHighScore(game: TetrisGameState): void {
    game.highScore = Math.max(game.highScore, game.score);
}
