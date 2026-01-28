"use client";

import { Game } from "@/types/types";
import { useUserContext } from "@/contexts/user-context";
import { saveGameAction, unsaveGameAction } from "@/actions/actions";
import { getGameById } from "@/lib/game-api";
import { useEffect } from "react";
import Link from "next/link";
import { SavedGame } from "../../../generated/prisma-client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from "../custom/components/cards/c_card";
import { AspectRatio } from "../custom/components/c_aspect-ratio";
import { H5, Muted } from "@/typography/custom";
import Image from "next/image";
import { ShineBorder } from "../custom/components/animated/c_shine-border";
import SaveBtn from "../buttons/save-btn";

type GameCardProps = {
    game: Game | SavedGame;
};

function GameCard({ game }: GameCardProps) {
    const { currentUser, isLoggedIn, unsaveGame, getSavedGames, isGameSaved } =
        useUserContext();

    const onSaveGameClick = async (game: Game | SavedGame) => {
        const isSaved = isGameSaved(game.id);

        try {
            if (isSaved) {
                await unsaveGameAction(currentUser!.email, game.id);
                unsaveGame(game.id);
            } else {
                const gameDetails = await getGameById(game.id);
                await saveGameAction(currentUser!.email, gameDetails);
                await getSavedGames(currentUser!);
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const isSaved = isGameSaved(game.id);

    useEffect(() => {
        if (currentUser) {
            getSavedGames(currentUser);
        }
    }, [currentUser, getSavedGames]);
    return (
        <Card className="w-[280px] h-[300px] py-2 gap-0! relative">
            <CardHeader className="pr-1! font-special text-lg flex justify-between items-center">
                <H5 className="truncate">{game.title}</H5>
                {isLoggedIn ? (
                    <SaveBtn
                        onSaveGameClick={onSaveGameClick}
                        isSaved={isSaved}
                        game={game}
                        disabled={false}
                    />
                ) : (
                    <SaveBtn
                        onSaveGameClick={onSaveGameClick}
                        isSaved={isSaved}
                        game={game}
                        disabled={true}
                    />
                )}
            </CardHeader>
            <CardContent className="flex flex-col gap-2 p-1!">
                <Link href={`/game/${game.id}`}>
                    <AspectRatio
                        ratio={16 / 9}
                        className="w-full rounded-sm z-10!"
                    >
                        <Image
                            src={game.thumbnail}
                            alt={game.title}
                            fill
                            className="rounded-sm z-10!"
                        />
                    </AspectRatio>
                </Link>
                <CardDescription className="text-xs text-foreground font-semibold h-[80px] overflow-hidden">
                    {game.short_description}
                </CardDescription>
            </CardContent>
            <CardFooter className="mt-auto flex justify-between items-center gap-2">
                <Muted className="text-xs font-semibold">{game.platform}</Muted>
                <Muted className="text-xs font-semibold">{game.genre}</Muted>
            </CardFooter>
            <ShineBorder shineColor="#0284b8" duration={30} borderWidth={2} />
        </Card>
    );
}

export default GameCard;
