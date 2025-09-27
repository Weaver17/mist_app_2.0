"use client";
import Featured from "@/components/game-pages/featured";
import NewestGames from "@/components/game-pages/newest-games";
import LoadingOverlay from "@/components/loading/loading-overlay";
import { getGamesByReleaseDate } from "@/lib/game-api";
import { Game } from "@/types/types";
import { Suspense, useEffect, useState } from "react";

function Home() {
    const [newestGames, setNewestGames] = useState<Game[]>([]);

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
        <main className="flex flex-col p-4 gap-8 max-w-[1380px] mx-auto">
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
