"use client";
import React, { useEffect } from "react";
import { FeaturedGame, Game } from "@/types/types";
import Image from "next/image";
import { H3, Muted, P } from "@/typography/custom";
import Link from "next/link";
import { useUserContext } from "@/contexts/user-context";
import { saveGameAction, unsaveGameAction } from "@/actions/actions";
import { getGameById } from "@/lib/game-api";
import { SavedGame } from "../../../generated/prisma-client";
import {
    Card,
    CardContent,
    CardHeader,
} from "../custom/components/cards/c_card";
import { AspectRatio } from "../custom/components/c_aspect-ratio";
import { RainbowButton } from "../custom/components/buttons/c_rainbow-button";
import { motion } from "motion/react";
import { ShineBorder } from "../custom/components/animated/c_shine-border";
import SaveBtn from "../buttons/save-btn";

type FeaturedCardProps = {
    featuredGame: FeaturedGame;
};

function FeaturedCard({ featuredGame }: FeaturedCardProps) {
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

    const isSaved = isGameSaved(featuredGame.id);

    useEffect(() => {
        if (currentUser) {
            getSavedGames(currentUser);
        }
    }, [currentUser, getSavedGames]);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="w-full mx-auto xl:max-w-5/6"
        >
            <Card className="py-2 gap-0! relative">
                <CardHeader className="flex justify-between items-center gap-2 pb-2">
                    <H3 className="font-special text-lg font-semibold truncate md:text-2xl lg:text-4xl">
                        {featuredGame.title}
                    </H3>
                    {isLoggedIn ? (
                        <SaveBtn
                            onSaveGameClick={onSaveGameClick}
                            isSaved={isSaved}
                            game={featuredGame}
                            disabled={false}
                        />
                    ) : (
                        <SaveBtn
                            onSaveGameClick={onSaveGameClick}
                            isSaved={isSaved}
                            game={featuredGame}
                            disabled={true}
                        />
                    )}
                </CardHeader>
                <CardContent className="p-0! flex flex-col gap-2">
                    <div className="flex flex-col pb-2 gap-2 border-b border-primary md:flex-row">
                        <div className="w-full md:w-1/2">
                            <AspectRatio
                                ratio={16 / 9}
                                className="w-full z-10!"
                            >
                                <Link href={`/game/${featuredGame.id}`}>
                                    <Image
                                        src={featuredGame.thumbnail}
                                        alt={featuredGame.title}
                                        fill
                                        className=" z-10!"
                                    />
                                </Link>
                            </AspectRatio>
                        </div>
                        <div className="w-full md:w-1/2">
                            <P className="text-xs font-semibold whitespace-break-spaces">
                                {featuredGame.description}
                            </P>
                        </div>
                    </div>
                    <div className="flex flex-col pb-2 gap-4 border-b border-primary md:flex-row-reverse md:justify-between">
                        <div className="flex gap-2 justify-between md:w-1/2">
                            <div className="flex flex-col gap-1">
                                <Muted className="featured-game-info-label">
                                    Publisher:
                                </Muted>
                                <P className="featured-game-info">
                                    {featuredGame.publisher}
                                </P>
                            </div>
                            <div className="flex flex-col gap-1">
                                <Muted className="featured-game-info-label">
                                    Developer:
                                </Muted>
                                <P className="featured-game-info">
                                    {featuredGame.publisher}
                                </P>
                            </div>
                            <div className="flex flex-col gap-1">
                                <Muted className="featured-game-info-label">
                                    Release Date:
                                </Muted>
                                <P className="featured-game-info">
                                    {featuredGame.release_date}
                                </P>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-evenly md:flex-col md:w-1/2">
                            <div className="flex flex-col gap-1">
                                <Muted className="font-semibold">
                                    {featuredGame.platform}
                                </Muted>
                            </div>
                            <div>
                                <Muted className="font-semibold">
                                    {featuredGame.genre}
                                </Muted>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-center">
                        <RainbowButton>
                            <Link
                                href={`${featuredGame.game_url}`}
                                target="_blank"
                                className="font-bold"
                            >
                                Download and Play
                            </Link>
                        </RainbowButton>
                    </div>
                </CardContent>

                <ShineBorder shineColor="#0284b8" />
            </Card>
        </motion.div>
    );
}

export default FeaturedCard;
