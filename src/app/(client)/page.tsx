"use client";
import GameCard from "@/components/cards/game-card";
import NewestGames from "@/components/newest/newest-games";
import { getGamesByReleaseDate } from "@/lib/game-api";
import { useEffect, useState } from "react";

function Home() {
    const [newestGames, setNewestGames] = useState([]);

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
        getGames();
    }, []);

    return (
        <div className="p-4">
            <NewestGames games={newestGames} />
            <p className="font-sans">This is Font Sans</p>
            <p className="font-mono">This is Font Mono</p>
            <p className="font-special">This is Zen Dots</p>
            <div className="h-10 w-10 bg-background"></div>
            <div className="h-10 w-10 bg-foreground"></div>
            <div className="h-10 w-10 bg-primary"></div>
            <div className="h-10 w-10 bg-secondary"></div>
            <div className="h-10 w-10 bg-accent"></div>
            <div className="h-10 w-10 bg-muted-dark"></div>
            <div className="h-10 w-10 bg-muted-light"></div>
            <div className="h-10 w-10 bg-destructive"></div>
            <div className="h-10 w-10 bg-border"></div>
            <div className="h-10 w-10 bg-input"></div>
            <div className="h-10 w-10 bg-ring"></div>
        </div>
    );
}

export default Home;
