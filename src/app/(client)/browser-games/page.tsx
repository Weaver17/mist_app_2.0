"use client";
import BreakoutCard from "@/components/browser-games/breakout/breakout-card";
import PongCard from "@/components/browser-games/pong/pong-card";
import SnakeCard from "@/components/browser-games/snake/snake-card";
import TetrisCard from "@/components/browser-games/tetris/tetris-card";
import ToTopBtn from "@/components/buttons/to-top-btn";
import BrowserGameCard from "@/components/cards/browser-game-card";
import { AnimatedList } from "@/components/custom/components/animated/c_animated-list";
import GamesSelect from "@/components/game-pages/games-select";
import GameList from "@/components/lists/game-list";
import LoadingSpinner from "@/components/loading/loading-spinner";
import { useToTopContext } from "@/contexts/to-top-context";
import { useUserContext } from "@/contexts/user-context";
import { getGamesByPop, getGamesBySort } from "@/lib/game-api";
import { Game } from "@/types/types";
import { H1 } from "@/typography/custom";
import React, { useEffect, useState } from "react";

function BrowserGamesPage() {
    // const [games, setGames] = useState<Game[]>([]);
    // const [sortBy, setSortBy] = useState("popularity");

    // const { scrollPosition, handleToTopBtn, onToTopClick } = useToTopContext();

    // const { getSession } = useUserContext();

    // useEffect(() => {
    //     getSession();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    // useEffect(() => {
    //     async function getGames() {
    //         if (sortBy === "popularity") {
    //             await getGamesByPop()
    //                 .then((data) => {
    //                     setGames(data);
    //                 })
    //                 .catch(console.error);
    //         } else {
    //             getGamesBySort(sortBy)
    //                 .then((data) => {
    //                     setGames(data);
    //                 })
    //                 .catch(console.error);
    //         }
    //     }
    //     getGames();
    // }, [sortBy]);

    // useEffect(() => {
    //     window.addEventListener("scroll", handleToTopBtn);
    // }, [handleToTopBtn]);

    return (
        <div className="client-page">
            <div className="border-b border-secondary pb-4 flex flex-col gap-4 w-full mx-auto">
                <H1 className="text-center font-special">Browser Games</H1>
                {/* <GamesSelect sortBy={sortBy} setSortBy={setSortBy} /> */}
            </div>
            {/* {games.length === 0 ? (
                <LoadingSpinner />
            ) : (
                <GameList games={games} />
            )} */}

            {/* TEMPORARY LIST  */}

            <div className="flex flex-col items-center justify-center gap-4">
                <AnimatedList className="mx-auto grid grid-cols-1  gap-4  grid2:grid-cols-2 grid3:grid-cols-3  grid4:grid-cols-4">
                    <PongCard />
                    <BreakoutCard />
                    <SnakeCard />
                    <TetrisCard />
                    <BrowserGameCard />
                    <BrowserGameCard />
                </AnimatedList>
            </div>

            {/* <ToTopBtn
                onToTopClick={onToTopClick}
                scrollPosition={scrollPosition}
            /> */}
        </div>
    );
}

export default BrowserGamesPage;
