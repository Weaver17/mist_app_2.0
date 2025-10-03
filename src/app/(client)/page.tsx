"use client";
import ToTopBtn from "@/components/buttons/to-top-btn";
import Featured from "@/components/game-pages/featured";
import NewestGames from "@/components/game-pages/newest-games";
import LoadingSpinner from "@/components/loading/loading-spinner";
import { useToTopContext } from "@/contexts/to-top-context";
import { getGamesByReleaseDate } from "@/lib/game-api";
import { Game } from "@/types/types";
import { Suspense, useEffect, useState } from "react";
import { useUserContext } from "@/contexts/user-context";

function Home() {
    const [newestGames, setNewestGames] = useState<Game[]>([]);

    const { scrollPosition, handleToTopBtn, onToTopClick } = useToTopContext();

    const { getSession } = useUserContext();

    useEffect(() => {
        getSession();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        async function getGames() {
            await getGamesByReleaseDate()
                .then((data) => {
                    setNewestGames(data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        getGames();
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleToTopBtn);
    }, [handleToTopBtn]);

    return (
        <main className="client-page relative">
            <Suspense fallback={<LoadingSpinner />}>
                <Featured games={newestGames} />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
                <NewestGames games={newestGames} />
            </Suspense>
            <ToTopBtn
                onToTopClick={onToTopClick}
                scrollPosition={scrollPosition}
            />
        </main>
    );
}

export default Home;
