"use client";
import { CustomInput } from "@/components/custom/c_input";
import GameList from "@/components/lists/game-list";
import { getGamesByReleaseDate } from "@/lib/game-api";
import { Game } from "@/types/types";
import { H1Custom } from "@/typography/custom";
import React, { useEffect, useState } from "react";

function SearchPage() {
    const [games, setGames] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredGames, setFilteredGames] = useState([]);

    const handleSearch = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setSearchQuery(e.target.value);
    };

    useEffect(() => {
        async function getGames() {
            await getGamesByReleaseDate()
                .then((data) => {
                    setGames(data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        getGames();

        if (searchQuery === "") {
            setFilteredGames(games);
        } else {
            const filtered = games.filter((game: Game) =>
                game.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredGames(filtered);
        }
    }, [searchQuery, games]);

    const gamesToShow = filteredGames.length > 0 ? filteredGames : games;

    return (
        <div className="p-4 flex flex-col gap-4 w-full mx-auto">
            <div className="pb-4 flex flex-col gap-4 w-full mx-auto border-b border-secondary">
                <H1Custom className="text-center font-special">Search</H1Custom>
                <CustomInput
                    className="mx-auto rounded-none! border-t-0 border-r-0 border-b! border-l! border-foreground! shadow-none! sm:w-1/2"
                    placeholder="Search"
                    onChange={handleSearch}
                />
            </div>
            <div>
                <GameList games={gamesToShow} />
            </div>
        </div>
    );
}

export default SearchPage;
