import { SnakeGame } from "@/components/browser-games/snake/snake";
import { H1 } from "@/typography/custom";
import React from "react";

function SnakeGamePage() {
    return (
        <div className="client-page">
            <div className="border-b border-secondary pb-4 flex flex-col gap-4 w-full mx-auto">
                <H1 className="text-center font-special">Snake</H1>
            </div>
            <div className="mx-auto w-full max-w-[800px]">
                <SnakeGame />
            </div>
        </div>
    );
}

export default SnakeGamePage;
