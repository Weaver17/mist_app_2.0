"use client";
import { CustomButton } from "@/components/custom/c_button";
import { useUserContext } from "@/contexts/user-context";
import { H1Custom, H3Custom, H4Custom, PCustom } from "@/typography/custom";
import { is } from "date-fns/locale";
import { useRouter } from "next/navigation";
import React from "react";

function ProfilePage() {
    const { isLoggedIn, currentUser } = useUserContext();

    const router = useRouter();

    if (!isLoggedIn) {
        router.push("/signin");
    }

    return (
        <div className="p-4 flex flex-col gap-4 w-full mx-auto">
            <div className="border-b border-secondary pb-4 flex flex-col gap-4 w-full mx-auto">
                <H1Custom className="text-center font-special">
                    {currentUser?.username}
                </H1Custom>
            </div>
            <div className="flex gap-12 py-4 px-8">
                <div className="w-1/4 relative">
                    <div className="flex flex-col gap-8 py-20 px-4 rounded-sm bg-card/90 blur-lg min-h-[400px]"></div>
                    <div className="absolute flex flex-col gap-8 py-20 px-4 top-0 left-1/2 -translate-x-1/2">
                        <PCustom>{currentUser?.email}</PCustom>
                        <H4Custom>Saved Games</H4Custom>
                        <ul>
                            {currentUser?.savedGames?.length !== undefined ? (
                                <li>{currentUser?.savedGames?.length}</li>
                            ) : (
                                <li>No Saved Games</li>
                            )}
                        </ul>
                        <CustomButton variant="secondary" className="z-10">
                            Change Username
                        </CustomButton>
                        <CustomButton
                            variant="outline"
                            className="text-muted-light! bg-muted-dark! z-10 hover:bg-card! hover:text-foreground!"
                        >
                            Sign Out
                        </CustomButton>
                    </div>
                </div>
                <div className="w-3/4">
                    <H3Custom>Saved Games</H3Custom>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
