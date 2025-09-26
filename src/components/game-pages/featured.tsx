"use client";
import { FeaturedGame, Game } from "@/types/types";
import { H1Custom } from "@/typography/custom";
import React from "react";
import FeaturedCard from "../cards/featured-card";
import { FEATURED_GAME_TIME } from "@/lib/constants";
import { getGameById } from "@/lib/game-api";

type FeaturedProps = {
    games: Game[];
};

function Featured({ games }: FeaturedProps) {
    const [featuredGame, setFeaturedGame] = React.useState<FeaturedGame | null>(
        null
    );

    React.useEffect(() => {
        const fetchFeaturedGame = async () => {
            try {
                const lastFetchTime = localStorage.getItem("lastFetchTime");
                const storedGame = localStorage.getItem("featuredGame");

                if (lastFetchTime && storedGame) {
                    const timeSinceLastFetch =
                        Date.now() - parseInt(lastFetchTime, 10);
                    if (timeSinceLastFetch < FEATURED_GAME_TIME) {
                        if (storedGame !== undefined) {
                            setFeaturedGame(JSON.parse(storedGame));
                        }

                        return;
                    }
                }

                const randomGame =
                    games[Math.floor(Math.random() * games.length)];
                const data = await getGameById(randomGame.id);
                setFeaturedGame(data);
                localStorage.setItem("featuredGame", JSON.stringify(data));
                localStorage.setItem("lastFetchTime", Date.now().toString());
            } catch (error) {
                console.error(error);
            }
        };

        fetchFeaturedGame();
    }, [games]);

    if (!featuredGame) {
        return null; // Or a loading skeleton
    }

    return (
        <div className="flex flex-col gap-2 md:gap-4">
            <H1Custom className="pb-2 font-special border-b border-secondary">
                Featured Game
            </H1Custom>
            <FeaturedCard featuredGame={featuredGame} />
        </div>
    );
}

export default Featured;
