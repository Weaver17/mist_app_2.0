import { useState, useRef, useCallback, useEffect } from "react";
import {
    createInitialState,
    render,
    gameTick,
    changeDirection,
} from "../snake-engine/snake-engine";
import {
    ActivePowerUp,
    createGameConfig,
    Direction,
    GameConfig,
    GameState,
} from "../snake-types";
import { useGameLoop } from "./useGameLoop";
import { useHighScore } from "./useHighScore";
import { useInput } from "./useInput";
import { Difficulty, GameStatus } from "../../shared/game-types";

function arePowerUpsEqual(
    a: readonly ActivePowerUp[],
    b: readonly ActivePowerUp[],
): boolean {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        const current = a[i];
        const next = b[i];
        if (!current || !next) return false;
        if (
            current.type !== next.type ||
            current.expiresAt !== next.expiresAt
        ) {
            return false;
        }
    }
    return true;
}

export interface GameControllerState {
    status: GameStatus;
    score: number;
    level: number;
    speed: number;
    selectedDifficulty: Difficulty;
    obstaclesEnabled: boolean;
    activePowerUps: ActivePowerUp[];
}

export function useGameController(
    canvasRef: React.RefObject<HTMLCanvasElement | null>,
) {
    const [selectedDifficulty, setSelectedDifficulty] = useState("medium");
    const [obstaclesEnabled, setObstaclesEnabled] = useState(false);
    const { highScore, lastScore, submitScore } = useHighScore();

    const [initialConfig] = useState<GameConfig>(() =>
        createGameConfig("medium", { obstaclesEnabled: false }),
    );
    const configRef = useRef<GameConfig>(initialConfig);
    const stateRef = useRef<GameState>(createInitialState(initialConfig));
    const frameCountRef = useRef(0);
    const [hudTick, setHudTick] = useState(0);
    const [canvasSize, setCanvasSize] = useState(() => ({
        width: initialConfig.gridWidth * initialConfig.cellSize,
        height: initialConfig.gridHeight * initialConfig.cellSize,
    }));

    const [controllerState, setControllerState] = useState<GameControllerState>(
        {
            status: "ready",
            score: 0,
            level: 1,
            speed: initialConfig.initialSpeed,
            selectedDifficulty: "medium",
            obstaclesEnabled,
            activePowerUps: [],
        },
    );

    const syncUiState = useCallback((now: number) => {
        const s = stateRef.current;
        const nextPowerUps = s.activePowerUps.map((p) => ({ ...p }));

        setControllerState((prev) => {
            if (
                arePowerUpsEqual(prev.activePowerUps, nextPowerUps) &&
                prev.status === s.status &&
                prev.score === s.score &&
                prev.level === s.level &&
                prev.speed === s.speed
            ) {
                return prev;
            }
            return {
                ...prev,
                status: s.status,
                score: s.score,
                level: s.level,
                speed: s.speed,
                activePowerUps: nextPowerUps,
            };
        });

        if (s.activePowerUps.length > 0) {
            const nextTick = Math.floor(now / 250);
            setHudTick((prev) => (prev === nextTick ? prev : nextTick));
        }
    }, []);

    const renderFrame = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        render(ctx, stateRef.current, configRef.current, frameCountRef.current);
    }, [canvasRef]);

    const onTick = useCallback(
        (timestamp: number) => {
            const state = stateRef.current;
            if (state.status !== "playing") return;

            const result = gameTick(state, configRef.current, timestamp);

            if (result.died) {
                submitScore(state.score);
            }

            frameCountRef.current++;
            renderFrame();
            syncUiState(timestamp);
        },
        [renderFrame, syncUiState, submitScore],
    );

    const isPlaying = controllerState.status === "playing";
    useGameLoop(onTick, isPlaying);

    const onDirection = useCallback((dir: Direction) => {
        const state = stateRef.current;
        if (state.status === "playing") {
            changeDirection(state, dir);
        }
    }, []);

    const onStart = useCallback(() => {
        const state = stateRef.current;
        if (state.status === "playing") return;

        const config = createGameConfig("medium", {
            obstaclesEnabled,
        });
        configRef.current = config;
        const newState = createInitialState(config);
        newState.status = "playing";
        newState.lastMoveTime = performance.now();
        stateRef.current = newState;
        setCanvasSize({
            width: config.gridWidth * config.cellSize,
            height: config.gridHeight * config.cellSize,
        });

        frameCountRef.current = 0;
        renderFrame();

        setControllerState((prev) => ({
            ...prev,
            status: "playing",
            score: 0,
            level: 1,
            speed: config.initialSpeed,
            activePowerUps: [],
        }));
    }, [selectedDifficulty, obstaclesEnabled, renderFrame]);

    const resumeGame = useCallback(() => {
        const state = stateRef.current;
        if (state.status !== "paused") return;
        state.status = "playing";
        state.lastMoveTime = performance.now();
        setControllerState((prev) => ({ ...prev, status: "playing" }));
    }, []);

    const onPause = useCallback(() => {
        const state = stateRef.current;
        if (state.status === "playing") {
            state.status = "paused";
            setControllerState((prev) => ({
                ...prev,
                status: "paused",
            }));
        } else if (state.status === "paused") {
            resumeGame();
        }
    }, [resumeGame]);

    const onSelectDifficulty = useCallback((d: Difficulty) => {
        setSelectedDifficulty(d);
        setControllerState((prev) => ({ ...prev, selectedDifficulty: d }));
    }, []);

    const onToggleObstacles = useCallback(() => {
        setObstaclesEnabled((prev) => {
            const next = !prev;
            setControllerState((p) => ({ ...p, obstaclesEnabled: next }));
            return next;
        });
    }, []);

    useInput(onDirection, onPause, onStart);

    useEffect(() => {
        renderFrame();
    }, [renderFrame]);

    return {
        ...controllerState,
        highScore,
        lastScore,
        onStart,
        onPause,
        onResume: resumeGame,
        onDirection,
        onSelectDifficulty,
        onToggleObstacles,
        canvasWidth: canvasSize.width,
        canvasHeight: canvasSize.height,
    } as const;
}
