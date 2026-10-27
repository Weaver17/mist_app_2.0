import { GAME_HEIGHT, GAME_WIDTH } from "./pong-types";

import type { PongGameState } from "./pong-types";

import { drawGameBackground, drawGameScores } from "../shared/game-renderer";
import { GAME_COLORS } from "../shared/game-types";

export function renderGame(
    context: CanvasRenderingContext2D,
    game: PongGameState,
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

    context.strokeStyle = GAME_COLORS.muted;
    context.lineWidth = 3;
    context.setLineDash([12, 12]);
    context.beginPath();
    context.moveTo(GAME_WIDTH / 2, 0);
    context.lineTo(GAME_WIDTH / 2, GAME_HEIGHT);
    context.stroke();
    context.setLineDash([]);

    context.fillStyle = GAME_COLORS.primary;
    context.fillRect(
        game.player.x,
        game.player.y,
        game.player.width,
        game.player.height,
    );

    context.fillStyle = GAME_COLORS.white;
    context.fillRect(game.ai.x, game.ai.y, game.ai.width, game.ai.height);

    context.beginPath();
    context.arc(game.ball.x, game.ball.y, game.ball.radius, 0, Math.PI * 2);
    context.fillStyle = GAME_COLORS.foreground;
    context.fill();

    context.shadowBlur = 18;
    context.shadowColor = GAME_COLORS.foreground;
    context.beginPath();
    context.arc(game.ball.x, game.ball.y, game.ball.radius, 0, Math.PI * 2);
    context.fill();
    context.shadowBlur = 0;

    drawGameScores(
        context,
        GAME_WIDTH,
        game.playerScore,
        game.aiScore,
        GAME_COLORS.foreground,
    );

    context.restore();
}
