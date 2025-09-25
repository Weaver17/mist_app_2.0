"use client";
import React, { useState } from "react";
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

function ProfileSheet() {
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const { isLoggedIn, currentUser } = useUserContext();

    const handleSheetBtnClick = () => {
        setIsSheetOpen(false);
    };

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
                        {" "}
                        <div className="flex flex-col gap-8 w-3/4 mx-auto">
                            <CustomButton onClick={handleSheetBtnClick}>
                                <Link href="/profile/17">Profile Page</Link>
                            </CustomButton>
                            <EditDialog />
                        </div>
                        <div className="flex flex-col gap-2 w-3/4 mx-auto">
                            <H3Custom className="text-center border-b pb-2!">
                                Saved Games
                            </H3Custom>
                            <ul>
                                <li>Overwatch 2</li>
                                <li>Valorant</li>
                                <li>Marvel Heroes</li>
                                <li>League of Legends</li>
                                <li>Fortnite</li>
                                <li>Apex Legends</li>
                            </ul>
                        </div>
                        <CustomSheetFooter className="w-3/4 mx-auto">
                            <CustomButton
                                variant="outline"
                                className="bg-muted-dark/50! hover:bg-card!"
                            >
                                Sign Out
                            </CustomButton>
                        </CustomSheetFooter>
                    </>
                ) : (
                    <div className="flex flex-col gap-8 w-3/4 mx-auto">
                        <CustomButton>
                            <Link href="/signin">Sign In</Link>
                        </CustomButton>
                    </div>
                )}
            </CustomSheetContent>
        </CustomSheet>
    );
}

export default ProfileSheet;
