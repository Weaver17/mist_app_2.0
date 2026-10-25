// --------------------------------------------------
// Clamp
// --------------------------------------------------

export function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
}

// --------------------------------------------------
// Random Direction
// --------------------------------------------------

export function randomDirection(): -1 | 1 {
    return Math.random() < 0.5 ? -1 : 1;
}

// --------------------------------------------------
// Circle / rectangle collision
// --------------------------------------------------

export function circleRectCollision(
    circle: { x: number; y: number; radius: number },
    rect: { x: number; y: number; width: number; height: number },
): boolean {
    const closestX = clamp(circle.x, rect.x, rect.x + rect.width);
    const closestY = clamp(circle.y, rect.y, rect.y + rect.height);
    const dx = circle.x - closestX;
    const dy = circle.y - closestY;

    return dx * dx + dy * dy <= circle.radius * circle.radius;
}
