"use client";
import EditDialog from "@/components/auth/edit-username/edit-dialog";
import { useUserContext } from "@/contexts/user-context";
import { H1Custom, H3Custom, H4Custom, PCustom } from "@/typography/custom";
import React, { useEffect, useState } from "react";
import SavedList from "@/components/lists/saved-list";
import SignOutBtn from "@/components/buttons/sign-out-btn";
import { getUserBySlug } from "@/actions/actions";
import { User } from "@/types/types";
import { useParams, redirect } from "next/navigation";

function ProfilePage() {
    const { currentUser, getSavedGames, savedGames } = useUserContext();
    const [profileUser, setProfileUser] = useState<User | null>(null);

    const params = useParams<{ slug: string }>();

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUserBySlug(params.slug);
            if (user) {
                setProfileUser(user);
            }
        };
        fetchUser();
    }, [params.slug]);

    useEffect(() => {
        if (profileUser) {
            getSavedGames(profileUser);
        }
    }, [profileUser, getSavedGames]);

    if (!currentUser) {
        return redirect("/signin");
    }

    return (
        <div className="p-4 flex flex-col gap-4 w-full  max-w-[1380px] mx-auto md:gap-8">
            <div className="border-b border-secondary pb-4 flex flex-col gap-4 w-full mx-auto">
                <H1Custom className="text-center font-special">
                    {profileUser?.username}
                </H1Custom>
            </div>
            <div className="flex flex-col gap-12 py-4 lg:px-8 lg:flex-row">
                <div className="w-full relative lg:w-1/4">
                    <div className="mx-auto max-w-[320px] rounded-sm bg-card/90 blur-lg min-h-[400px]"></div>
                    <div className="absolute flex flex-col gap-4 py-8 max-w-[320px] top-0 left-1/2 -translate-x-1/2 lg:gap-8 lg:py-20">
                        <PCustom className="text-center text-sm md:text-md">
                            {profileUser?.email}
                        </PCustom>
                        <div className="flex flex-col gap-2 my-4 lg:my-2">
                            <H4Custom>Saved Games</H4Custom>
                            <ul>
                                {savedGames?.length > 0 ||
                                savedGames?.length !== undefined ? (
                                    <li className="text-center font-special text-2xl">
                                        {savedGames?.length}
                                    </li>
                                ) : (
                                    <li className="text-center">
                                        No Saved Games
                                    </li>
                                )}
                            </ul>
                        </div>
                        <EditDialog />
                        <SignOutBtn />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4 lg:w-3/4">
                    <H3Custom>Saved Games</H3Custom>
                    {savedGames?.length > 0 ? (
                        <SavedList games={savedGames} />
                    ) : (
                        <p>No saved games yet!</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
