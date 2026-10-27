import {
    CELL_SIZE,
    GAME_HEIGHT,
    GAME_WIDTH,
    GRID_COLUMNS,
    GRID_ROWS,
} from "./snake-types";

import type { Point, SnakeGameState } from "./snake-types";
import { drawGameBackground, drawGameScore } from "../shared/game-renderer";
import { GAME_COLORS } from "../shared/game-types";

export function renderGame(
    ctx: CanvasRenderingContext2D,
    game: SnakeGameState,
): void {
    drawGameBackground(ctx, GAME_WIDTH, GAME_HEIGHT, GAME_COLORS.background);
    drawGrid(ctx);
    drawFood(ctx, game.food);
    drawSnake(ctx, game.snake);
    drawGameScore(ctx, game.score, GAME_WIDTH * 0.05, GAME_COLORS.foreground);
}

function drawGrid(ctx: CanvasRenderingContext2D): void {
    ctx.strokeStyle = "rgb(30, 30, 35)";
    ctx.lineWidth = 1;

    for (let x = 0; x <= GRID_COLUMNS; x += 1) {
        ctx.beginPath();
        ctx.moveTo(x * CELL_SIZE, 0);
        ctx.lineTo(x * CELL_SIZE, GAME_HEIGHT);
        ctx.stroke();
    }

    for (let y = 0; y <= GRID_ROWS; y += 1) {
        ctx.beginPath();
        ctx.moveTo(0, y * CELL_SIZE);
        ctx.lineTo(GAME_WIDTH, y * CELL_SIZE);
        ctx.stroke();
    }
}

function drawSnake(ctx: CanvasRenderingContext2D, snake: Point[]): void {
    snake.forEach((segment, index) => {
        const inset = 2;
        const x = segment.x * CELL_SIZE + inset;
        const y = segment.y * CELL_SIZE + inset;
        const size = CELL_SIZE - inset * 2;

        ctx.fillStyle =
            index === 0 ? GAME_COLORS.primary : GAME_COLORS.lightBlue;

        ctx.beginPath();
        ctx.roundRect(x, y, size, size, index === 0 ? 7 : 5);
        ctx.fill();

        // Subtle highlight on each segment
        ctx.fillStyle =
            index === 0 ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.08)";

        ctx.beginPath();
        ctx.roundRect(x + 3, y + 3, size - 6, 4, 2);
        ctx.fill();
    });

    if (snake.length > 0) {
        drawEyes(ctx, snake[0]);
    }
}

function drawEyes(ctx: CanvasRenderingContext2D, head: Point): void {
    const centerX = head.x * CELL_SIZE + CELL_SIZE / 2;
    const centerY = head.y * CELL_SIZE + CELL_SIZE / 2;

    ctx.fillStyle = "#18181b";

    const eyeOffset = 4;
    const eyeRadius = 2;

    // Default eye placement faces right.
    let eyes: Point[];

    // The renderer receives the head position, while the engine owns
    // direction. The head is drawn without directional eye changes here.
    // eslint-disable-next-line prefer-const
    eyes = [
        { x: centerX + eyeOffset, y: centerY - eyeOffset },
        { x: centerX + eyeOffset, y: centerY + eyeOffset },
    ];

    eyes.forEach((eye) => {
        ctx.beginPath();
        ctx.arc(eye.x, eye.y, eyeRadius, 0, Math.PI * 2);
        ctx.fill();
    });
}

function drawFood(ctx: CanvasRenderingContext2D, food: Point): void {
    if (food.x < 0 || food.y < 0) return;

    const centerX = food.x * CELL_SIZE + CELL_SIZE / 2;
    const centerY = food.y * CELL_SIZE + CELL_SIZE / 2;

    // Glow
    ctx.shadowColor = GAME_COLORS.white;
    ctx.shadowBlur = 12;

    ctx.fillStyle = GAME_COLORS.yellow;
    ctx.beginPath();
    ctx.arc(centerX, centerY, CELL_SIZE * 0.34, 0, Math.PI * 2);
    ctx.fill();

    ctx.shadowBlur = 0;

    // Highlight
    ctx.fillStyle = "#ffe4e6";
    ctx.beginPath();
    ctx.arc(centerX - 3, centerY - 3, CELL_SIZE * 0.11, 0, Math.PI * 2);
    ctx.fill();
}
