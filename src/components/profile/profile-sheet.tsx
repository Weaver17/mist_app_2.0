"use client";
import React, { useEffect, useState } from "react";

import { H2, H3 } from "@/typography/custom";
import Link from "next/link";
import { User } from "lucide-react";
import { useUserContext } from "@/contexts/user-context";
import EditDialog from "../auth/edit-username/edit-dialog";
import SignOutDialog from "../auth/signout-dialog";
import { User as CurrentUser } from "../../../generated/prisma-client";
import { getAvatar } from "@/lib/utils";
import Image from "next/image";
import SmallSpinner from "../loading/small-spinner";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../custom/components/modals/c_sheet";
import { Avatar } from "../custom/components/c_avatar";
import { AspectRatio } from "../custom/components/c_aspect-ratio";
import { Button } from "../custom/components/buttons/c_button";

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
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild className="[box-shadow:(0,0,0)]">
                {isLoading ? (
                    <SmallSpinner />
                ) : (
                    <Avatar className="cursor-pointer rounded-none h-[50px] w-[50px]">
                        {isLoggedIn ? (
                            <AspectRatio ratio={1}>
                                <Image
                                    src={userAvatar.src}
                                    alt={userAvatar.title}
                                    fill
                                />
                                {/* <AvatarFallback className="text-secondary">
                                {currentUser?.username[0]}
                            </AvatarFallback> */}
                            </AspectRatio>
                        ) : (
                            <User
                                size={24}
                                className="text-secondary mx-auto my-auto"
                            />
                        )}
                    </Avatar>
                )}
            </SheetTrigger>
            <SheetContent side="right" className="bg-card py-12">
                <SheetTitle className="hidden">
                    {currentUser
                        ? `${currentUser.name}'s Info`
                        : "Sign In to View Your Info"}
                </SheetTitle>
                <SheetHeader>
                    <H2 className="text-center text-2xl! font-special">
                        {currentUser ? currentUser.name : ""}
                    </H2>
                </SheetHeader>
                {isLoggedIn ? (
                    <>
                        <div className="flex flex-col gap-8 w-3/4 mx-auto">
                            <Button onClick={handleSheetBtnClick}>
                                <Link href={`/profile/${currentUser?.id}`}>
                                    Profile Page
                                </Link>
                            </Button>
                            <EditDialog />
                        </div>
                        <div className="flex flex-col gap-2 w-3/4 mx-auto">
                            <H3 className="text-center border-b pb-2!">
                                Saved Games
                            </H3>
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
                        <SheetFooter className="w-3/4 mx-auto">
                            <SignOutDialog />
                        </SheetFooter>
                    </>
                ) : (
                    <div className="flex flex-col gap-8 w-3/4 mx-auto">
                        <Button asChild>
                            <Link href="/signin">Sign In</Link>
                        </Button>
                        <Button asChild variant="secondary">
                            <Link href="/signup">Sign Up</Link>
                        </Button>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
}

export default ProfileSheet;
