// tetris-renderer.ts

import {
    BOARD_COLUMNS,
    BOARD_ROWS,
    CELL_SIZE,
    GAME_HEIGHT,
    TETROMINO_COLORS,
} from "./tetris-types";

import type {
    ActivePiece,
    TetrisGameState,
    Position,
    TetrominoType,
} from "./tetris-types";

import { getPieceCells, isValidPosition, SHAPES } from "./tetris-engine";
import { GAME_COLORS } from "../shared/game-types";

const BOARD_WIDTH = BOARD_COLUMNS * CELL_SIZE;
const SIDE_PANEL_X = BOARD_WIDTH + 20;

export function renderGame(
    ctx: CanvasRenderingContext2D,
    game: TetrisGameState,
): void {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = GAME_COLORS.background;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    drawBoard(ctx, game);
    drawGhostPiece(ctx, game);
    drawActivePiece(ctx, game);
    drawSidePanel(ctx, game);

    // if (game.status !== "playing") {
    //     drawOverlay(ctx, game.status);
    // }
}

function drawBoard(ctx: CanvasRenderingContext2D, game: TetrisGameState): void {
    ctx.fillStyle = GAME_COLORS.background;
    ctx.fillRect(0, 0, BOARD_WIDTH, GAME_HEIGHT);

    // Draw the subtle cell grid.
    ctx.strokeStyle = GAME_COLORS.muted;
    ctx.lineWidth = 1;

    for (let x = 0; x <= BOARD_COLUMNS; x += 1) {
        ctx.beginPath();
        ctx.moveTo(x * CELL_SIZE, 0);
        ctx.lineTo(x * CELL_SIZE, GAME_HEIGHT);
        ctx.stroke();
    }

    for (let y = 0; y <= BOARD_ROWS; y += 1) {
        ctx.beginPath();
        ctx.moveTo(0, y * CELL_SIZE);
        ctx.lineTo(BOARD_WIDTH, y * CELL_SIZE);
        ctx.stroke();
    }

    game.board.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell) {
                drawBlock(ctx, x, y, TETROMINO_COLORS[cell]);
            }
        });
    });
}

function drawGhostPiece(
    ctx: CanvasRenderingContext2D,
    game: TetrisGameState,
): void {
    const ghost: ActivePiece = {
        ...game.activePiece,
    };

    while (
        isValidPosition(game.board, {
            ...ghost,
            y: ghost.y + 1,
        })
    ) {
        ghost.y += 1;
    }

    getPieceCells(ghost).forEach(({ x, y }) => {
        if (y < 0) return;

        const inset = 3;

        ctx.strokeStyle = TETROMINO_COLORS[ghost.type];
        ctx.lineWidth = 2;

        ctx.strokeRect(
            x * CELL_SIZE + inset,
            y * CELL_SIZE + inset,
            CELL_SIZE - inset * 2,
            CELL_SIZE - inset * 2,
        );
    });
}

function drawActivePiece(
    ctx: CanvasRenderingContext2D,
    game: TetrisGameState,
): void {
    getPieceCells(game.activePiece).forEach(({ x, y }) => {
        if (y < 0) return;

        drawBlock(ctx, x, y, TETROMINO_COLORS[game.activePiece.type]);
    });
}

function drawBlock(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    color: string,
): void {
    const inset = 1.5;
    const px = x * CELL_SIZE + inset;
    const py = y * CELL_SIZE + inset;
    const size = CELL_SIZE - inset * 2;

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.roundRect(px, py, size, size, 4);
    ctx.fill();

    // Highlight and shadow create a subtle dimensional effect.
    ctx.fillStyle = "rgba(255, 255, 255, 0.18)";
    ctx.fillRect(px + 3, py + 3, size - 6, 3);

    ctx.fillStyle = "rgba(0, 0, 0, 0.12)";
    ctx.fillRect(px + 3, py + size - 5, size - 6, 2);
}

function drawSidePanel(
    ctx: CanvasRenderingContext2D,
    game: TetrisGameState,
): void {
    const panelX = SIDE_PANEL_X;

    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";

    drawLabel(ctx, "SCORE", panelX, 30);
    drawValue(ctx, String(game.score), panelX, 56);

    drawLabel(ctx, "BEST", panelX, 90);
    drawValue(ctx, String(game.highScore), panelX, 116);

    drawLabel(ctx, "LEVEL", panelX, 150);
    drawValue(ctx, String(game.level), panelX, 176);

    drawLabel(ctx, "LINES", panelX, 210);
    drawValue(ctx, String(game.lines), panelX, 236);

    drawLabel(ctx, "HOLD", panelX, 282);
    drawPreview(ctx, game.heldPiece, panelX, 296);

    drawLabel(ctx, "NEXT", panelX, 402);

    game.nextQueue.slice(0, 3).forEach((type, index) => {
        drawPreview(ctx, type, panelX, 414 + index * 54);
    });
}

function drawLabel(
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
): void {
    ctx.fillStyle = "#a1a1aa";
    ctx.font = "bold 12px sans-serif";
    ctx.fillText(text, x, y);
}

function drawValue(
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
): void {
    ctx.fillStyle = "#fafafa";
    ctx.font = "bold 20px sans-serif";
    ctx.fillText(text, x, y);
}

function drawPreview(
    ctx: CanvasRenderingContext2D,
    type: TetrominoType | null,
    x: number,
    y: number,
): void {
    if (!type) {
        ctx.fillStyle = "#52525b";
        ctx.font = "12px sans-serif";
        ctx.fillText("Empty", x, y + 22);
        return;
    }

    const cells = SHAPES[type];

    const minX = Math.min(...cells.map((cell) => cell.x));
    const maxX = Math.max(...cells.map((cell) => cell.x));
    const minY = Math.min(...cells.map((cell) => cell.y));
    const maxY = Math.max(...cells.map((cell) => cell.y));

    const previewCell = 17;
    const width = (maxX - minX + 1) * previewCell;
    const height = (maxY - minY + 1) * previewCell;

    const startX = x + 20;
    const startY = y + 8;

    ctx.save();
    ctx.translate(startX - width / 2, startY - height / 2);

    cells.forEach((cell: Position) => {
        ctx.fillStyle = TETROMINO_COLORS[type];

        ctx.beginPath();
        ctx.roundRect(
            (cell.x - minX) * previewCell,
            (cell.y - minY) * previewCell,
            previewCell - 2,
            previewCell - 2,
            3,
        );
        ctx.fill();
    });

    ctx.restore();
}

// function drawOverlay(
//     ctx: CanvasRenderingContext2D,
//     status: TetrisGameState["status"],
// ): void {
//     let title = "";
//     let subtitle = "";

//     switch (status) {
//         case "ready":
//             title = "TETRIS";
//             subtitle = "Press Start or Enter to play";
//             break;

//         case "paused":
//             title = "PAUSED";
//             subtitle = "Press Resume or P to continue";
//             break;

//         case "gameOver":
//             title = "GAME OVER";
//             subtitle = "Press Restart to play again";
//             break;

//         default:
//             return;
//     }

//     ctx.fillStyle = "rgba(0, 0, 0, 0.72)";
//     ctx.fillRect(0, 0, BOARD_WIDTH, GAME_HEIGHT);

//     ctx.textAlign = "center";
//     ctx.textBaseline = "middle";

//     ctx.fillStyle = "#ffffff";
//     ctx.font = "bold 32px sans-serif";
//     ctx.fillText(title, BOARD_WIDTH / 2, GAME_HEIGHT / 2 - 18);

//     ctx.fillStyle = "#d4d4d8";
//     ctx.font = "12px sans-serif";
//     ctx.fillText(subtitle, BOARD_WIDTH / 2, GAME_HEIGHT / 2 + 22);
// }
