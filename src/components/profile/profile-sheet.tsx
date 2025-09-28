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
import {
    CustomAvatar,
    CustomAvatarImage,
    CustomAvatarFallback,
} from "../custom/c_avatar";
import { H2Custom, H3Custom } from "@/typography/custom";
import { CustomButton } from "../custom/c_button";
import Link from "next/link";
import { User } from "lucide-react";
import { useUserContext } from "@/contexts/user-context";
import EditDialog from "../auth/edit-username/edit-dialog";
import SignOutBtn from "../buttons/sign-out-btn";
import { User as CurrentUser } from "@/types/types";

function ProfileSheet() {
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const { isLoggedIn, currentUser, getSavedGames, savedGames } =
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

    return (
        <CustomSheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <CustomSheetTrigger asChild>
                <CustomAvatar className="cursor-pointer">
                    {isLoggedIn ? (
                        <>
                            <CustomAvatarImage
                                src="https://www.freetogame.com/g/461/thumbnail.jpg"
                                alt="Avatar"
                            />
                            <CustomAvatarFallback className="text-secondary">
                                AZ
                            </CustomAvatarFallback>
                        </>
                    ) : (
                        <User
                            size={24}
                            className="text-secondary mx-auto my-auto"
                        />
                    )}
                </CustomAvatar>
            </CustomSheetTrigger>
            <CustomSheetContent side="right" className="bg-card py-12">
                <CustomSheetTitle className="hidden">
                    {currentUser
                        ? `${currentUser.username}'s Info`
                        : "Sign In to View Your Info"}
                </CustomSheetTitle>
                <CustomSheetHeader>
                    <H2Custom className="text-center text-2xl! font-special">
                        {currentUser ? currentUser.username : ""}
                    </H2Custom>
                </CustomSheetHeader>
                {isLoggedIn ? (
                    <>
                        <div className="flex flex-col gap-8 w-3/4 mx-auto">
                            <CustomButton onClick={handleSheetBtnClick}>
                                <Link href={`/profile/${currentUser?.slug}`}>
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
                                        {game.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <CustomSheetFooter className="w-3/4 mx-auto">
                            <SignOutBtn />
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
