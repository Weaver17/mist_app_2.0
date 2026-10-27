import { GAME_HEIGHT, GAME_WIDTH } from "./breakout-types";

import type { BreakoutGameState } from "./breakout-types";

import { drawGameBackground, drawGameScores } from "../shared/game-renderer";
import { GAME_COLORS } from "../shared/game-types";

export function renderGame(
    context: CanvasRenderingContext2D,
    game: BreakoutGameState,
): void {
    context.save();
    context.scale(
        context.canvas.width / GAME_WIDTH,
        context.canvas.height / GAME_HEIGHT,
    );

    drawGameBackground(
        context,
        GAME_WIDTH,
        GAME_HEIGHT,
        GAME_COLORS.background,
    );

    for (const brick of game.bricks) {
        if (brick.destroyed) {
            continue;
        }

        context.fillStyle = brick.color;
        context.fillRect(brick.x, brick.y, brick.width, brick.height);

        context.fillStyle = "rgba(255,255,255,0.18)";
        context.fillRect(brick.x, brick.y, brick.width, 3);

        context.fillStyle = "rgba(0,0,0,0.15)";
        context.fillRect(brick.x, brick.y + brick.height - 3, brick.width, 3);
    }

    context.fillStyle = GAME_COLORS.primary;
    context.shadowBlur = 14;
    context.shadowColor = GAME_COLORS.primary;
    context.fillRect(
        game.paddle.x,
        game.paddle.y,
        game.paddle.width,
        game.paddle.height,
    );
    context.shadowBlur = 0;

    context.beginPath();
    context.arc(game.ball.x, game.ball.y, game.ball.radius, 0, Math.PI * 2);
    context.fillStyle = GAME_COLORS.white;
    context.shadowBlur = 16;
    context.shadowColor = GAME_COLORS.white;
    context.fill();
    context.shadowBlur = 0;

    drawGameScores(
        context,
        GAME_WIDTH,
        game.score,
        game.lives,
        GAME_COLORS.foreground,
    );

    context.restore();
}
