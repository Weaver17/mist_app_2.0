"use client";
import {
    CustomCard,
    CustomCardContent,
    CustomCardDescription,
    CustomCardFooter,
    CustomCardHeader,
} from "../custom/c_card";
import Image from "next/image";
import { H5Custom, MutedCustom } from "@/typography/custom";
import { CustomAspectRatio } from "../custom/c_aspect-ratio";
import { Game } from "@/types/types";
import { CustomButton } from "../custom/c_button";
import images from "@/lib/images";
import { useUserContext } from "@/contexts/user-context";
import { saveGameAction } from "@/actions/actions";
import { getGameById } from "@/lib/game-api";

type GameCardProps = {
    game: Game;
};

function GameCard({ game }: GameCardProps) {
    const { currentUser, isLoggedIn, saveGame } = useUserContext();

    const onSaveGameClick = async (gameId: number) => {
        console.log("Saving game...", currentUser?.username, gameId);
        try {
            await getGameById(gameId)
                .then((game) => {
                    saveGameAction(currentUser!.email, game);
                    saveGame(game);
                })
                .catch((error) => {
                    console.error(error);
                    throw error;
                });
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    // Use .some for instant UI update, matching favorited logic
    const isSaved = currentUser?.savedGames?.some(
        (sav) => sav.id === game.id.toString()
    );

    return (
        <CustomCard className="w-[280px] h-[300px] py-2 gap-0!">
            <CustomCardHeader className="font-special text-lg flex justify-between items-center">
                <H5Custom className="truncate">{game.title}</H5Custom>
                {isLoggedIn ? (
                    <CustomButton
                        size="sm"
                        variant="ghost"
                        className="p-0! opacity-50 hover:bg-transparent! hover:opacity-100!"
                        onClick={() => onSaveGameClick(game.id)}
                    >
                        <Image
                            src={isSaved ? images.checkmark : images.save}
                            alt="save icon"
                            width={18}
                            height={18}
                            priority
                        />
                    </CustomButton>
                ) : (
                    <CustomButton size="sm" variant="ghost" disabled>
                        <Image
                            src={images.save}
                            alt="save icon"
                            width={18}
                            height={18}
                            priority
                        />
                    </CustomButton>
                )}
            </CustomCardHeader>
            <CustomCardContent className="flex flex-col gap-2 p-1!">
                <CustomAspectRatio
                    ratio={16 / 9}
                    className="w-full rounded-sm z-10!"
                >
                    <Image
                        src={game.thumbnail}
                        alt={game.title}
                        fill
                        className="rounded-sm z-10!"
                    />
                </CustomAspectRatio>
                <CustomCardDescription className="text-xs font-semibold h-[80px] overflow-hidden">
                    {game.short_description}
                </CustomCardDescription>
            </CustomCardContent>
            <CustomCardFooter className="mt-auto flex justify-between items-center gap-2">
                <MutedCustom className="text-xs font-semibold">
                    {game.platform}
                </MutedCustom>
                <MutedCustom className="text-xs font-semibold">
                    {game.genre}
                </MutedCustom>
            </CustomCardFooter>
        </CustomCard>
    );
}

export default GameCard;
