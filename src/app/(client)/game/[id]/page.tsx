"use client";
import { saveGameAction, unsaveGameAction } from "@/actions/actions";
import { CustomAspectRatio } from "@/components/custom/c_aspect-ratio";
import { CustomButton } from "@/components/custom/c_button";
import { CustomCard, CustomCardContent } from "@/components/custom/c_card";
import LoadingOverlay from "@/components/loading/loading-overlay";
import FadingSidebar from "@/components/profile/fading-sidebar";
import { useUserContext } from "@/contexts/user-context";
import { SavedGame } from "@/generated/prisma-client";
import { getGameById } from "@/lib/game-api";
import images from "@/lib/images";
import { FeaturedGame, Game } from "@/types/types";
import { H1Custom, MutedCustom, PCustom } from "@/typography/custom";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function GamePage() {
    const [game, setGame] = useState<FeaturedGame>();
    const params = useParams<{ id: string }>();

    const { currentUser, isLoggedIn, getSavedGames, unsaveGame, isGameSaved } =
        useUserContext();

    const onSaveGameClick = async (game: Game | SavedGame) => {
        const isSaved = isGameSaved(game.id);
        console.log(
            `${isSaved ? "unsaving" : "saving"} game...`,
            currentUser?.username,
            game
        );
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
                params.id as unknown as number
            )) as FeaturedGame;
            setGame(gameToGet);
        }

        getGame();
    });

    return (
        <div className="p-4 flex flex-col gap-4 max-w-[1380px] mx-auto lg:gap-8">
            {!game ? (
                <LoadingOverlay />
            ) : (
                <>
                    <div className="border-b border-secondary pb-4  w-full mx-auto">
                        <H1Custom className="text-center font-special">
                            {game.title}
                        </H1Custom>
                    </div>
                    <div className="flex flex-col gap-8 px-4 w-full mx-auto lg:flex-row">
                        <div className="w-full relative lg:w-1/3 xl:w-1/4">
                            <FadingSidebar>
                                <CustomAspectRatio
                                    ratio={16 / 9}
                                    className=" rounded-sm z-10!"
                                >
                                    <Image
                                        src={game.thumbnail}
                                        alt={game.title}
                                        fill
                                        className="rounded-sm z-10!"
                                    />
                                </CustomAspectRatio>
                                <PCustom className="max-w-[280px] text-center text-sm font-mono font-semibold">
                                    {game.short_description}
                                </PCustom>
                                <div className="flex flex-col gap-2 px-8">
                                    <CustomButton variant="default" size="lg">
                                        <Link
                                            href={game.freetogame_profile_url}
                                            target="_blank"
                                        >
                                            <PCustom>
                                                FreeToPlay.com Profile
                                            </PCustom>
                                        </Link>
                                    </CustomButton>
                                    <CustomButton variant="secondary" size="lg">
                                        <Link
                                            href={game.game_url}
                                            target="_blank"
                                        >
                                            <PCustom>Download and Play</PCustom>
                                        </Link>
                                    </CustomButton>
                                </div>
                                <div className="flex justify-between items-center gap-2 px-12">
                                    <PCustom className="font-sm font-mono font-semibold">
                                        {game.status}
                                    </PCustom>
                                    {isLoggedIn ? (
                                        <CustomButton
                                            size="sm"
                                            variant="ghost"
                                            className="p-0! opacity-50 hover:bg-transparent! hover:opacity-100!"
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
                                        </CustomButton>
                                    ) : (
                                        <CustomButton
                                            size="sm"
                                            variant="ghost"
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
                                        </CustomButton>
                                    )}
                                </div>
                            </FadingSidebar>
                        </div>

                        <div className="w-full flex flex-col gap-4 lg:w-2/3 lg:ml-auto xl:w-3/4">
                            <CustomCard>
                                <CustomCardContent>
                                    <div className="flex flex-col pb-2 gap-4 border-b border-primary md:flex-row-reverse md:justify-between">
                                        <div className="flex gap-2 justify-evenly md:flex-col md:w-1/2">
                                            <MutedCustom className="font-semibold text-end">
                                                {game.platform}
                                            </MutedCustom>
                                            <MutedCustom className="font-semibold text-end">
                                                {game.genre}
                                            </MutedCustom>
                                        </div>
                                        <div className="flex flex-col items-center text-center gap-2 justify-between sm:flex-row md:w-1/2">
                                            <div className="flex flex-col gap-1">
                                                <MutedCustom className="featured-game-info-label">
                                                    Publisher:
                                                </MutedCustom>
                                                <PCustom className="featured-game-info">
                                                    {game.publisher}
                                                </PCustom>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <MutedCustom className="featured-game-info-label">
                                                    Developer:
                                                </MutedCustom>
                                                <PCustom className="featured-game-info">
                                                    {game.publisher}
                                                </PCustom>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <MutedCustom className="featured-game-info-label">
                                                    Release Date:
                                                </MutedCustom>
                                                <PCustom className="featured-game-info">
                                                    {game.release_date}
                                                </PCustom>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-8">
                                        <PCustom className="text-xs font-semibold md:text-lg">
                                            {game.description}
                                        </PCustom>
                                    </div>
                                </CustomCardContent>
                            </CustomCard>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full mx-auto">
                        {game.minimum_system_requirements ? (
                            <CustomCard>
                                <CustomCardContent>
                                    <div className="flex flex-col gap-2 justify-between text-center md:flex-row">
                                        <div className="flex flex-col gap-1">
                                            <MutedCustom className="featured-game-info-label">
                                                Operating System:
                                            </MutedCustom>
                                            <PCustom className="featured-game-info">
                                                {
                                                    game
                                                        .minimum_system_requirements
                                                        .os
                                                }
                                            </PCustom>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <MutedCustom className="featured-game-info-label">
                                                Graphics:
                                            </MutedCustom>
                                            <PCustom className="featured-game-info">
                                                {
                                                    game
                                                        .minimum_system_requirements
                                                        .graphics
                                                }
                                            </PCustom>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <MutedCustom className="featured-game-info-label">
                                                Memory:
                                            </MutedCustom>
                                            <PCustom className="featured-game-info">
                                                {
                                                    game
                                                        .minimum_system_requirements
                                                        .memory
                                                }
                                            </PCustom>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <MutedCustom className="featured-game-info-label">
                                                Processor:
                                            </MutedCustom>
                                            <PCustom className="featured-game-info">
                                                {
                                                    game
                                                        .minimum_system_requirements
                                                        .processor
                                                }
                                            </PCustom>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <MutedCustom className="featured-game-info-label">
                                                Storage:
                                            </MutedCustom>
                                            <PCustom className="featured-game-info">
                                                {
                                                    game
                                                        .minimum_system_requirements
                                                        .storage
                                                }
                                            </PCustom>
                                        </div>
                                    </div>
                                </CustomCardContent>
                            </CustomCard>
                        ) : (
                            <></>
                        )}
                        <ul className="flex flex-col gap-4">
                            {game.screenshots.map((screenshot) => (
                                <li key={screenshot.id}>
                                    <CustomAspectRatio ratio={16 / 9}>
                                        <Image
                                            src={screenshot.image}
                                            alt={`Screenshot for ${game.title}`}
                                            fill
                                            className="rounded-sm"
                                        />
                                    </CustomAspectRatio>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
}

export default GamePage;
