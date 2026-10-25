import {
    DIR_VECTORS,
    Direction,
    GameConfig,
    GameState,
    OPPOSITE_DIR,
    Position,
} from "../snake-types";

export function moveSnake(state: GameState): Position {
    const head = state.snake[0];
    const dir = DIR_VECTORS[state.direction];
    return {
        x: head.x + dir.x,
        y: head.y + dir.y,
    };
}

export function growSnake(state: GameState, newHead: Position): void {
    state.snake.unshift(newHead);
}

export function advanceSnake(state: GameState, newHead: Position): void {
    state.snake.unshift(newHead);
    state.snake.pop();
}

export function canChangeDirection(
    current: Direction,
    next: Direction,
): boolean {
    return OPPOSITE_DIR[current] !== next;
}

export function changeDirection(state: GameState, newDir: Direction): void {
    if (canChangeDirection(state.direction, newDir)) {
        state.nextDirection = newDir;
    }
}

export function getInitialSnake(config: GameConfig): Position[] {
    const centerX = Math.floor(config.gridWidth / 2);
    const centerY = Math.floor(config.gridHeight / 2);
    return [
        { x: centerX, y: centerY },
        { x: centerX + 1, y: centerY },
        { x: centerX + 2, y: centerY },
    ];
}
