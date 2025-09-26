"use client";
import { Game } from "@/types/types";
import GameCard from "../cards/game-card";
import { useState } from "react";
import { DEFAULT_VISIBLE_COUNT, VISIBLE_COUNT_ADD } from "@/lib/constants";
import ShowMoreBtn from "../buttons/show-more-btn";
import { SavedGame } from "@/generated/prisma-client";

type GameListProps = {
    games: Game[] | SavedGame[];
};

function GameList({ games }: GameListProps) {
    const [visibleCount, setVisibleCount] = useState(DEFAULT_VISIBLE_COUNT);

    const onShowMoreClick = () => {
        setVisibleCount((prevCount) => prevCount + VISIBLE_COUNT_ADD);
    };
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <ul className="mx-auto grid grid-cols-1  gap-4  grid2:grid-cols-2 grid3:grid-cols-3  grid4:grid-cols-4">
                {games.slice(0, visibleCount).map((game) => (
                    <li key={game.id}>
                        <GameCard game={game} />
                    </li>
                ))}
            </ul>
            <div className="">
                {visibleCount < games.length && (
                    <ShowMoreBtn onShowMoreClick={onShowMoreClick} />
                )}
            </div>
        </div>
    );
}

export default GameList;
