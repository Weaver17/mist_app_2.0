"use client";
import Featured from "@/components/game-pages/featured";
import NewestGames from "@/components/game-pages/newest-games";
import LoadingOverlay from "@/components/loading/loading-overlay";
import { getGamesByReleaseDate } from "@/lib/game-api";
import { Game } from "@/types/types";
import { Suspense, useEffect, useState } from "react";
import { useUserContext } from "@/contexts/user-context";

function Home() {
    const [newestGames, setNewestGames] = useState<Game[]>([]);

    const { getSession } = useUserContext();

    useEffect(() => {
        getSession();
    }, []);

    useEffect(() => {
        async function getGames() {
            await getGamesByReleaseDate()
                .then((data) => {
                    setNewestGames(data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        setTimeout(() => {
            getGames();
        }, 1000);
    }, []);

    return (
        <main className="client-page">
            <Suspense fallback={<LoadingOverlay />}>
                <Featured games={newestGames} />
            </Suspense>
            <Suspense fallback={<LoadingOverlay />}>
                <NewestGames games={newestGames} />
            </Suspense>
        </main>
    );
}

export default Home;
