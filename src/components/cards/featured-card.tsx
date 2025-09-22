import React from "react";
import {
    CustomCard,
    CustomCardContent,
    CustomCardHeader,
} from "../custom/c_card";
import { FeaturedGame } from "@/types/types";
import { CustomAspectRatio } from "../custom/c_aspect-ratio";
import Image from "next/image";
import { H3Custom, MutedCustom, PCustom } from "@/typography/custom";
import { CustomButton } from "../custom/c_button";
import images from "@/lib/images";
import Link from "next/link";

type FeaturedCardProps = {
    featuredGame: FeaturedGame;
};

function FeaturedCard({ featuredGame }: FeaturedCardProps) {
    return (
        <div className="w-full mx-auto xl:max-w-5/6">
            <CustomCard className="py-2 gap-0!">
                <CustomCardHeader className="flex justify-between items-center gap-2 pb-2">
                    <H3Custom className="font-special text-lg font-semibold truncate md:text-2xl lg:text-4xl">
                        {featuredGame.title}
                    </H3Custom>
                    <CustomButton
                        size="sm"
                        variant="ghost"
                        className="p-0! opacity-50 hover:bg-transparent! hover:opacity-100!"
                    >
                        <Image
                            src={images.save}
                            alt="save icon"
                            width={18}
                            height={18}
                        />
                    </CustomButton>
                </CustomCardHeader>
                <CustomCardContent className="p-0! flex flex-col gap-2">
                    <div className="flex flex-col pb-2 gap-2 border-b border-primary md:flex-row">
                        <div className="w-full md:w-1/2">
                            <CustomAspectRatio
                                ratio={16 / 9}
                                className="w-full z-10!"
                            >
                                <Image
                                    src={featuredGame.thumbnail}
                                    alt={featuredGame.title}
                                    fill
                                    className=" z-10!"
                                />
                            </CustomAspectRatio>
                        </div>
                        <div className="w-full md:w-1/2">
                            <PCustom className="text-xs font-semibold">
                                {featuredGame.description}
                            </PCustom>
                        </div>
                    </div>
                    <div className="flex flex-col pb-2 gap-4 border-b border-primary md:flex-row-reverse md:justify-between">
                        <div className="flex gap-2 justify-between md:w-1/2">
                            <div className="flex flex-col gap-1">
                                <MutedCustom className="featured-game-info-label">
                                    Publisher:
                                </MutedCustom>
                                <PCustom className="featured-game-info">
                                    {featuredGame.publisher}
                                </PCustom>
                            </div>
                            <div className="flex flex-col gap-1">
                                <MutedCustom className="featured-game-info-label">
                                    Developer:
                                </MutedCustom>
                                <PCustom className="featured-game-info">
                                    {featuredGame.publisher}
                                </PCustom>
                            </div>
                            <div className="flex flex-col gap-1">
                                <MutedCustom className="featured-game-info-label">
                                    Release Date:
                                </MutedCustom>
                                <PCustom className="featured-game-info">
                                    {featuredGame.release_date}
                                </PCustom>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-evenly md:flex-col md:w-1/2">
                            <div className="flex flex-col gap-1">
                                <MutedCustom className="font-semibold">
                                    {featuredGame.platform}
                                </MutedCustom>
                            </div>
                            <div>
                                <MutedCustom className="font-semibold">
                                    {featuredGame.genre}
                                </MutedCustom>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-center">
                        <CustomButton
                            size="sm"
                            variant="secondary"
                            className="w-full md:w-1/4 md:mx-auto"
                        >
                            <Link
                                href={`${featuredGame.game_url}`}
                                target="_blank"
                                className="font-bold"
                            >
                                Play Now
                            </Link>
                        </CustomButton>
                    </div>
                </CustomCardContent>
            </CustomCard>
        </div>
    );
}

export default FeaturedCard;
