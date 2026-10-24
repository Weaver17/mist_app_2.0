import { Button } from "@/components/custom/components/buttons/c_button";
import { GameStatus } from "@/types/types";
import React from "react";

type StartPauseResetProps = {
    startGame: () => void;
    pauseGame: () => void;
    resetGame: () => void;
    status: GameStatus;
};

function StartPauseReset({
    startGame,
    pauseGame,
    resetGame,
    status,
}: StartPauseResetProps) {
    return (
        <div className=" flex flex-wrap items-center justify-center gap-3">
            <Button
                variant="default_plain"
                onClick={startGame}
                disabled={status === "playing"}
            >
                {status === "paused"
                    ? "Resume"
                    : status === "gameOver"
                      ? "Play Again"
                      : "Start"}
            </Button>

            <Button
                variant="default_plain"
                onClick={pauseGame}
                disabled={status !== "playing"}
            >
                Pause
            </Button>

            <Button variant="secondary_plain" onClick={resetGame}>
                Reset
            </Button>
        </div>
    );
}

export default StartPauseReset;
