"use client";
import EditDialog from "@/components/auth/edit-username/edit-dialog";
import { useUserContext } from "@/contexts/user-context";
import { H1Custom, H3Custom, H4Custom, PCustom } from "@/typography/custom";
import React, { useEffect, useState } from "react";
import SavedList from "@/components/lists/saved-list";
import { getUserById } from "@/actions/actions";
import { useParams, redirect } from "next/navigation";
import SignOutDialog from "@/components/auth/signout-dialog";
import FadingSidebar from "@/components/profile/fading-sidebar";
import { useToTopContext } from "@/contexts/to-top-context";
import ToTopBtn from "@/components/buttons/to-top-btn";
import SmallSpinner from "@/components/loading/small-spinner";
import { User } from "../../../../../generated/prisma-client";

function ProfilePage() {
    const { currentUser, getSavedGames, savedGames } = useUserContext();
    const [profileUser, setProfileUser] = useState<User | null>(null);

    const { scrollPosition, handleToTopBtn, onToTopClick } = useToTopContext();

    const params = useParams<{ id: string }>();

    const { getSession, isLoading } = useUserContext();

    useEffect(() => {
        getSession();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUserById(params.id);
            if (user) {
                setProfileUser(user);
            }
        };
        fetchUser();
    }, [params.id, currentUser?.name]);

    useEffect(() => {
        if (profileUser) {
            getSavedGames(profileUser);
        }
    }, [profileUser, getSavedGames]);

    useEffect(() => {
        window.addEventListener("scroll", handleToTopBtn);
    }, [handleToTopBtn]);

    if (!currentUser) {
        return redirect("/signin");
    }

    return (
        <div className="client-page">
            <div className="border-b border-secondary pb-4 flex flex-col gap-4 w-full mx-auto">
                <H1Custom className="text-center font-special">
                    {isLoading ? <SmallSpinner /> : profileUser?.name}
                </H1Custom>
            </div>
            <div className="flex flex-col gap-12 py-4 lg:px-8 lg:flex-row">
                <div className="w-full relative lg:w-1/4">
                    <FadingSidebar>
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
                        <SignOutDialog />
                    </FadingSidebar>
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
            <ToTopBtn
                onToTopClick={onToTopClick}
                scrollPosition={scrollPosition}
            />
        </div>
    );
}

export default ProfilePage;
