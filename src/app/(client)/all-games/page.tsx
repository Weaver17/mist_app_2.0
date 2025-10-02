"use client";
import ToTopBtn from "@/components/buttons/to-top-btn";
import GamesSelect from "@/components/game-pages/games-select";
import GameList from "@/components/lists/game-list";
import LoadingSpinner from "@/components/loading/loading-spinner";
import { useToTopContext } from "@/contexts/to-top-context";
import { useUserContext } from "@/contexts/user-context";
import { getGamesByPop, getGamesBySort } from "@/lib/game-api";
import { Game } from "@/types/types";
import { H1Custom } from "@/typography/custom";
import React, { useEffect, useState } from "react";

function AllGamesPage() {
    const [games, setGames] = useState<Game[]>([]);
    const [sortBy, setSortBy] = useState("popularity");

    const { scrollPosition, handleToTopBtn, onToTopClick } = useToTopContext();

    const { getSession } = useUserContext();

    useEffect(() => {
        getSession();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        async function getGames() {
            if (sortBy === "popularity") {
                await getGamesByPop()
                    .then((data) => {
                        setGames(data);
                    })
                    .catch(console.error);
            } else {
                getGamesBySort(sortBy)
                    .then((data) => {
                        setGames(data);
                    })
                    .catch(console.error);
            }
        }
        getGames();
    }, [sortBy]);

    useEffect(() => {
        window.addEventListener("scroll", handleToTopBtn);
    }, [handleToTopBtn]);

    return (
        <div className="client-page">
            <div className="border-b border-secondary pb-4 flex flex-col gap-4 w-full mx-auto">
                <H1Custom className="text-center font-special">
                    All Games
                </H1Custom>
                <GamesSelect sortBy={sortBy} setSortBy={setSortBy} />
            </div>
            {games.length === 0 ? (
                <LoadingSpinner />
            ) : (
                <GameList games={games} />
            )}
            <ToTopBtn
                onToTopClick={onToTopClick}
                scrollPosition={scrollPosition}
            />
        </div>
    );
}

export default AllGamesPage;
