import React from "react";
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
import { Game } from "@/app/types/types";

type GameCardProps = {
    game: Game;
};

function GameCard({ game }: GameCardProps) {
    return (
        <CustomCard className="w-[280px] h-[300px] py-2 gap-0!">
            <CustomCardHeader className="font-special text-lg">
                <H5Custom className="truncate">{game.title}</H5Custom>
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
