import BreakoutGame from "@/components/browser-games/breakout/breakout";
import { H1 } from "@/typography/custom";
import React from "react";

function BreakoutGamePage() {
    return (
        <div className="client-page">
            <div className="border-b border-secondary pb-4 flex flex-col gap-4 w-full mx-auto">
                <H1 className="text-center font-special">Breakout</H1>
            </div>
            <div className="mx-auto w-full max-w-[800px]">
                <BreakoutGame />
            </div>
        </div>
    );
}

export default BreakoutGamePage;
