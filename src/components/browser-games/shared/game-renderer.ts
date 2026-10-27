export function drawGameBackground(
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
    color: string,
): void {
    context.fillStyle = color;
    context.fillRect(0, 0, width, height);
}

export function drawGameScores(
    context: CanvasRenderingContext2D,
    width: number,
    primaryScore: number,
    secondaryScore: number,
    color: string,
): void {
    drawGameScore(context, primaryScore, width * 0.25, color);
    drawGameScore(context, secondaryScore, width * 0.75, color);
}

export function drawGameScore(
    context: CanvasRenderingContext2D,
    score: number,
    x: number,
    color: string,
): void {
    context.fillStyle = color;
    context.font = "bold 36px sans-serif";
    context.textAlign = "center";
    context.textBaseline = "top";
    context.fillText(String(score), x, 20);
}
