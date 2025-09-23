import React from "react";
import {
    CustomSheet,
    CustomSheetContent,
    CustomSheetFooter,
    CustomSheetHeader,
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

function ProfileSheet() {
    return (
        <CustomSheet>
            <CustomSheetTrigger asChild>
                <CustomAvatar className="cursor-pointer">
                    <CustomAvatarImage
                        src="https://www.freetogame.com/g/461/thumbnail.jpg"
                        alt="Avatar"
                    />
                    <CustomAvatarFallback className="text-secondary">
                        AZ
                    </CustomAvatarFallback>
                </CustomAvatar>
            </CustomSheetTrigger>
            <CustomSheetContent side="right" className="bg-card py-12">
                <CustomSheetHeader>
                    <H2Custom className="text-center text-2xl! font-special">
                        Profile
                    </H2Custom>
                </CustomSheetHeader>
                <div className="flex flex-col gap-8 w-3/4 mx-auto">
                    <CustomButton>
                        <Link href="/profile">Profile Page</Link>
                    </CustomButton>
                    <CustomButton variant="secondary">
                        Change Username
                    </CustomButton>
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
            </CustomSheetContent>
        </CustomSheet>
    );
}

export default ProfileSheet;
