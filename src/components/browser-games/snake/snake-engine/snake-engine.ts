export { createInitialState } from "./game-state";
export { gameTick } from "./game-tick";
export type { TickResult } from "./game-tick";
export { render } from "./renderer";
export { changeDirection } from "./snake";
export { checkCollisions } from "./collision";
export type { CollisionResult } from "./collision";
export { isPositionEqual, isInBounds, getSafeRandomPosition } from "./grid";
