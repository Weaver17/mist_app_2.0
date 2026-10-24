import { PongGame } from "@/components/browser-games-components/pong/pong";
import { H1 } from "@/typography/custom";
import React from "react";

function PongGamePage() {
    return (
        <div className="client-page">
            <div className="border-b border-secondary pb-4 flex flex-col gap-4 w-full mx-auto">
                <H1 className="text-center font-special">Pong</H1>
            </div>
            <div className="mx-auto w-full max-w-[800px]">
                <PongGame />
            </div>
        </div>
    );
}

export default PongGamePage;
