"use client";
import EditDialog from "@/components/auth/edit-username/edit-dialog";
import { CustomButton } from "@/components/custom/c_button";
import { useUserContext } from "@/contexts/user-context";
import { H1Custom, H3Custom, H4Custom, PCustom } from "@/typography/custom";
import { redirect } from "next/navigation";
import React from "react";

function ProfilePage() {
    const { isLoggedIn, currentUser } = useUserContext();

    if (!isLoggedIn) {
        redirect("/signin");
    }

    return (
        <div className="p-4 flex flex-col gap-4 w-full mx-auto">
            <div className="border-b border-secondary pb-4 flex flex-col gap-4 w-full mx-auto">
                <H1Custom className="text-center font-special">
                    {currentUser?.username}
                </H1Custom>
            </div>
            <div className="flex flex-col gap-12 py-4 px-8 lg:flex-row">
                <div className="w-full relative lg:w-1/4">
                    <div className="mx-auto max-w-[320px] rounded-sm bg-card/90 blur-lg min-h-[400px]"></div>
                    <div className="absolute flex flex-col gap-4 py-8 max-w-[320px] top-0 left-1/2 -translate-x-1/2 lg:gap-8 lg:py-20">
                        <PCustom className="text-center text-sm md:text-md">
                            {currentUser?.email}
                        </PCustom>
                        <div className="flex flex-col gap-2 my-4 lg:my-2">
                            <H4Custom>Saved Games</H4Custom>
                            <ul>
                                {currentUser?.savedGames?.length !==
                                undefined ? (
                                    <li className="text-center">
                                        {currentUser?.savedGames?.length}
                                    </li>
                                ) : (
                                    <li className="text-center">
                                        No Saved Games
                                    </li>
                                )}
                            </ul>
                        </div>
                        <EditDialog />
                        <CustomButton
                            variant="outline"
                            className="text-muted-light! bg-muted-dark! z-10 hover:bg-card! hover:text-foreground!"
                        >
                            Sign Out
                        </CustomButton>
                    </div>
                </div>
                <div className="w-full lg:w-3/4">
                    <H3Custom>Saved Games</H3Custom>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
