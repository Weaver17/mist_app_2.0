"use client";
import React, { useEffect, useState } from "react";
import {
    CustomSheet,
    CustomSheetContent,
    CustomSheetFooter,
    CustomSheetHeader,
    CustomSheetTitle,
    CustomSheetTrigger,
} from "../custom/c_sheet";
import { CustomAvatar } from "../custom/c_avatar";
import { H2Custom, H3Custom } from "@/typography/custom";
import { CustomButton } from "../custom/c_button";
import Link from "next/link";
import { User } from "lucide-react";
import { useUserContext } from "@/contexts/user-context";
import EditDialog from "../auth/edit-username/edit-dialog";
import SignOutDialog from "../auth/signout-dialog";
import { User as CurrentUser } from "../../../generated/prisma-client";
import { getAvatar } from "@/lib/utils";
import { CustomAspectRatio } from "../custom/c_aspect-ratio";
import Image from "next/image";
import SmallSpinner from "../loading/small-spinner";

function ProfileSheet() {
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const { isLoggedIn, currentUser, getSavedGames, savedGames, isLoading } =
        useUserContext();

    const handleSheetBtnClick = () => {
        setIsSheetOpen(false);
    };

    useEffect(() => {
        if (currentUser) {
            async function getSavedGamesList(currentUser: CurrentUser) {
                return await getSavedGames(currentUser);
            }
            getSavedGamesList(currentUser);
        }
    }, [currentUser, getSavedGames]);

    // Get the user's avatar based on currentUser.avatar
    const userAvatar = getAvatar(currentUser?.image);

    return (
        <CustomSheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <CustomSheetTrigger asChild>
                {isLoading ? (
                    <SmallSpinner />
                ) : (
                    <CustomAvatar className="cursor-pointer rounded-none h-[50px] w-[50px]">
                        {isLoggedIn ? (
                            <CustomAspectRatio ratio={1}>
                                <Image
                                    src={userAvatar.src}
                                    alt={userAvatar.title}
                                    fill
                                />
                                {/* <CustomAvatarFallback className="text-secondary">
                                {currentUser?.username[0]}
                            </CustomAvatarFallback> */}
                            </CustomAspectRatio>
                        ) : (
                            <User
                                size={24}
                                className="text-secondary mx-auto my-auto"
                            />
                        )}
                    </CustomAvatar>
                )}
            </CustomSheetTrigger>
            <CustomSheetContent side="right" className="bg-card py-12">
                <CustomSheetTitle className="hidden">
                    {currentUser
                        ? `${currentUser.name}'s Info`
                        : "Sign In to View Your Info"}
                </CustomSheetTitle>
                <CustomSheetHeader>
                    <H2Custom className="text-center text-2xl! font-special">
                        {currentUser ? currentUser.name : ""}
                    </H2Custom>
                </CustomSheetHeader>
                {isLoggedIn ? (
                    <>
                        <div className="flex flex-col gap-8 w-3/4 mx-auto">
                            <CustomButton onClick={handleSheetBtnClick}>
                                <Link href={`/profile/${currentUser?.id}`}>
                                    Profile Page
                                </Link>
                            </CustomButton>
                            <EditDialog />
                        </div>
                        <div className="flex flex-col gap-2 w-3/4 mx-auto">
                            <H3Custom className="text-center border-b pb-2!">
                                Saved Games
                            </H3Custom>
                            <ul className="flex flex-col gap-4 mx-auto">
                                {savedGames.map((game) => (
                                    <li
                                        key={game.id}
                                        className="text-center cursor-pointer font-special hover:underline hover:underline-offset-2"
                                    >
                                        <Link
                                            href={`/game/${game.id}`}
                                            onClick={handleSheetBtnClick}
                                        >
                                            {game.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <CustomSheetFooter className="w-3/4 mx-auto">
                            <SignOutDialog />
                        </CustomSheetFooter>
                    </>
                ) : (
                    <div className="flex flex-col gap-8 w-3/4 mx-auto">
                        <CustomButton asChild>
                            <Link href="/signin">Sign In</Link>
                        </CustomButton>
                        <CustomButton asChild variant="secondary">
                            <Link href="/signup">Sign Up</Link>
                        </CustomButton>
                    </div>
                )}
            </CustomSheetContent>
        </CustomSheet>
    );
}

export default ProfileSheet;
