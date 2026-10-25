import { P } from "@/typography/custom";
import React from "react";

type GameRulesProps = {
    movementInstrucions: string;
    difficultyBreakdown: string;
    gameControls: string;
};

function GameRules({
    movementInstrucions,
    difficultyBreakdown,
    gameControls,
}: GameRulesProps) {
    return (
        <div className=" grid gap-4 rounded-lg border bg-zinc-900/75 p-4 sm:grid-cols-3">
            <div>
                <P className="text-xs text-center font-semibold uppercase tracking-widest text-primary">
                    Movement
                </P>

                <P className="mt-2 text-center text-sm text-zinc-400">
                    {movementInstrucions}
                </P>
            </div>

            <div>
                <P className="text-xs text-center font-semibold uppercase tracking-widest text-secondary">
                    Difficulty
                </P>

                <P className="mt-2 text-center text-sm text-zinc-400">
                    {difficultyBreakdown}
                </P>
            </div>

            <div>
                <P className="text-xs text-center font-semibold uppercase tracking-widest text-muted">
                    Game Controls
                </P>

                <P className="mt-2 text-center text-sm text-zinc-400">
                    {gameControls}
                </P>
            </div>
        </div>
    );
}

export default GameRules;
