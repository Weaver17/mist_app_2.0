"use client";
import { saveGameAction, unsaveGameAction } from "@/actions/actions";
import ToTopBtn from "@/components/buttons/to-top-btn";

import LoadingOverlay from "@/components/loading/loading-overlay";
import FadingSidebar from "@/components/profile/fading-sidebar";
import { useToTopContext } from "@/contexts/to-top-context";
import { useUserContext } from "@/contexts/user-context";
import { getGameById } from "@/lib/game-api";
import images from "@/lib/images";
import { FeaturedGame, Game } from "@/types/types";
import { H1, Muted, P } from "@/typography/custom";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SavedGame } from "../../../../../generated/prisma-client";
import { AspectRatio } from "@/components/custom/components/c_aspect-ratio";
import { Button } from "@/components/custom/components/buttons/c_button";
import { Card, CardContent } from "@/components/custom/components/cards/c_card";
import { motion } from "motion/react";

function GamePage() {
    const [game, setGame] = useState<FeaturedGame>();
    const params = useParams<{ id: string }>();

    const {
        currentUser,
        isLoggedIn,
        getSavedGames,
        unsaveGame,
        isGameSaved,
        getSession,
    } = useUserContext();

    useEffect(() => {
        getSession();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { scrollPosition, handleToTopBtn, onToTopClick } = useToTopContext();

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

    useEffect(() => {
        async function getGame() {
            const gameToGet = (await getGameById(
                params.id as unknown as number,
            )) as FeaturedGame;
            setGame(gameToGet);
        }

        getGame();
    });

    useEffect(() => {
        window.addEventListener("scroll", handleToTopBtn);
    }, [handleToTopBtn]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="p-4 flex flex-col gap-4 max-w-[1380px] mx-auto lg:gap-8"
        >
            {!game ? (
                <LoadingOverlay />
            ) : (
                <>
                    <div className="border-b border-secondary pb-4  w-full mx-auto">
                        <H1 className="text-center font-special">
                            {game.title}
                        </H1>
                    </div>
                    <div className="flex flex-col gap-8 px-4 w-full mx-auto lg:flex-row">
                        <div className="w-full relative lg:w-1/3 xl:w-1/4">
                            <FadingSidebar>
                                <AspectRatio
                                    ratio={16 / 9}
                                    className=" rounded-sm z-10!"
                                >
                                    <Image
                                        src={game.thumbnail}
                                        alt={game.title}
                                        fill
                                        className="rounded-sm z-10!"
                                    />
                                </AspectRatio>
                                <P className="max-w-[280px] text-center text-sm font-mono font-semibold">
                                    {game.short_description}
                                </P>
                                <div className="flex flex-col gap-2 px-8">
                                    <Button variant="default" size="lg">
                                        <Link
                                            href={game.freetogame_profile_url}
                                            target="_blank"
                                        >
                                            <P>FreeToPlay.com Profile</P>
                                        </Link>
                                    </Button>
                                    <Button variant="secondary" size="lg">
                                        <Link
                                            href={game.game_url}
                                            target="_blank"
                                        >
                                            <P>Download and Play</P>
                                        </Link>
                                    </Button>
                                </div>
                                <div className="flex justify-between items-center gap-2 px-12">
                                    <P className="font-sm font-mono font-semibold">
                                        {game.status}
                                    </P>
                                    {isLoggedIn ? (
                                        <Button
                                            size="sm"
                                            variant="outline_plain"
                                            className="p-0! border-none! bg-transparent! opacity-50 hover:opacity-100! shadow-none!"
                                            onClick={() =>
                                                onSaveGameClick(game)
                                            }
                                        >
                                            <Image
                                                src={
                                                    isGameSaved(game.id)
                                                        ? images.checkmark
                                                        : images.save
                                                }
                                                alt="save icon"
                                                width={18}
                                                height={18}
                                                priority
                                            />
                                        </Button>
                                    ) : (
                                        <Button
                                            size="sm"
                                            variant="outline_plain"
                                            disabled
                                            className="px-0!"
                                        >
                                            <Image
                                                src={images.save}
                                                alt="save icon"
                                                width={18}
                                                height={18}
                                                priority
                                            />
                                        </Button>
                                    )}
                                </div>
                            </FadingSidebar>
                        </div>

                        <div className="w-full flex flex-col gap-4 lg:w-2/3 lg:ml-auto xl:w-3/4">
                            <Card>
                                <CardContent>
                                    <div className="flex flex-col pb-2 gap-4 border-b border-primary md:flex-row-reverse md:justify-between">
                                        <div className="flex gap-2 justify-evenly md:flex-col md:w-1/2">
                                            <Muted className="font-semibold text-end">
                                                {game.platform}
                                            </Muted>
                                            <Muted className="font-semibold text-end">
                                                {game.genre}
                                            </Muted>
                                        </div>
                                        <div className="flex flex-col items-center text-center gap-2 justify-between sm:flex-row md:w-1/2">
                                            <div className="flex flex-col gap-1">
                                                <Muted className="featured-game-info-label">
                                                    Publisher:
                                                </Muted>
                                                <P className="featured-game-info">
                                                    {game.publisher}
                                                </P>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <Muted className="featured-game-info-label">
                                                    Developer:
                                                </Muted>
                                                <P className="featured-game-info">
                                                    {game.publisher}
                                                </P>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <Muted className="featured-game-info-label">
                                                    Release Date:
                                                </Muted>
                                                <P className="featured-game-info">
                                                    {game.release_date}
                                                </P>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-8">
                                        <P className="text-xs font-semibold md:text-lg whitespace-break-spaces">
                                            {game.description}
                                        </P>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full mx-auto">
                        {game.minimum_system_requirements ? (
                            <Card>
                                <CardContent>
                                    <div className="flex flex-col gap-2 justify-between text-center md:flex-row">
                                        <div className="flex flex-col gap-1">
                                            <Muted className="featured-game-info-label">
                                                Operating System:
                                            </Muted>
                                            <P className="featured-game-info">
                                                {
                                                    game
                                                        .minimum_system_requirements
                                                        .os
                                                }
                                            </P>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <Muted className="featured-game-info-label">
                                                Graphics:
                                            </Muted>
                                            <P className="featured-game-info">
                                                {
                                                    game
                                                        .minimum_system_requirements
                                                        .graphics
                                                }
                                            </P>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <Muted className="featured-game-info-label">
                                                Memory:
                                            </Muted>
                                            <P className="featured-game-info">
                                                {
                                                    game
                                                        .minimum_system_requirements
                                                        .memory
                                                }
                                            </P>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <Muted className="featured-game-info-label">
                                                Processor:
                                            </Muted>
                                            <P className="featured-game-info">
                                                {
                                                    game
                                                        .minimum_system_requirements
                                                        .processor
                                                }
                                            </P>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <Muted className="featured-game-info-label">
                                                Storage:
                                            </Muted>
                                            <P className="featured-game-info">
                                                {
                                                    game
                                                        .minimum_system_requirements
                                                        .storage
                                                }
                                            </P>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ) : (
                            <></>
                        )}
                        <ul className="flex flex-col gap-4">
                            {game.screenshots.map((screenshot) => (
                                <li key={screenshot.id}>
                                    <AspectRatio ratio={16 / 9}>
                                        <Image
                                            src={screenshot.image}
                                            alt={`Screenshot for ${game.title}`}
                                            fill
                                            className="rounded-sm"
                                        />
                                    </AspectRatio>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
            <ToTopBtn
                onToTopClick={onToTopClick}
                scrollPosition={scrollPosition}
            />
        </motion.div>
    );
}

export default GamePage;
