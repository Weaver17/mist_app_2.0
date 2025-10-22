"use client";
import ToTopBtn from "@/components/buttons/to-top-btn";
import { SquareInput } from "@/components/custom/components/form/c_input";
import Search from "@/components/game-pages/search-page";
import LoadingSpinner from "@/components/loading/loading-spinner";
import { useToTopContext } from "@/contexts/to-top-context";
import { useUserContext } from "@/contexts/user-context";
import { getGamesByReleaseDate } from "@/lib/game-api";
import { Game } from "@/types/types";
import { H1 } from "@/typography/custom";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

function SearchPage() {
    const [games, setGames] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredGames, setFilteredGames] = useState([]);

    const { scrollPosition, handleToTopBtn, onToTopClick } = useToTopContext();

    const { getSession } = useUserContext();

    useEffect(() => {
        getSession();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                    console.error(error);
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

    useEffect(() => {
        window.addEventListener("scroll", handleToTopBtn);
    }, [handleToTopBtn]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="client-page"
        >
            <div className="pb-4 flex flex-col gap-4 w-full mx-auto border-b border-secondary">
                <H1 className="text-center font-special">Search</H1>
                <SquareInput
                    className="w-2/3 min-w-[280px] md:max-w-1/2 mx-auto"
                    placeholder="Search"
                    onChange={handleSearch}
                />
            </div>
            <div>
                {games.length === 0 ? (
                    <LoadingSpinner />
                ) : (
                    <Search
                        gamesToShow={gamesToShow}
                        filteredGames={filteredGames}
                    />
                )}
            </div>
            <ToTopBtn
                onToTopClick={onToTopClick}
                scrollPosition={scrollPosition}
            />
        </motion.div>
    );
}

export default SearchPage;
