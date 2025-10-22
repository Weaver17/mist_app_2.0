"use client";

import { Menu, X } from "lucide-react";
import NavLink from "./navlink";
import { useIsMobile } from "@/hooks/use-mobile";
import { useUserContext } from "@/contexts/user-context";
import Link from "next/link";
import { getAvatar } from "@/lib/utils";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "../custom/components/c_navigation-menu";
import { Button } from "../custom/components/buttons/c_button";
import { Avatar, AvatarFallback } from "../custom/components/c_avatar";
import { AspectRatio } from "../custom/components/c_aspect-ratio";

const MOBILENAVBAR_KEYBOARD_SHORTCUT = "m";

function Navbar() {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = useState(false);

    const { isLoggedIn, currentUser } = useUserContext();

    // Helper to toggle the sidebar.
    const toggleMobileNavbar = useCallback(() => {
        // Removed ''
        setOpenMobile((open) => !open);
    }, [setOpenMobile]);

    // Adds a keyboard shortcut to toggle the mobile navbar.
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (
                event.key === MOBILENAVBAR_KEYBOARD_SHORTCUT &&
                (event.metaKey || event.ctrlKey)
            ) {
                event.preventDefault();
                toggleMobileNavbar();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleMobileNavbar]);

    // Get the user's avatar based on currentUser.avatar
    const userAvatar = getAvatar(currentUser?.image);

    return (
        <nav className="font-special">
            {isMobile ? (
                <NavigationMenu viewport={false} className="relative">
                    {isMobile && openMobile ? (
                        <Button
                            size="icon"
                            variant="shadowless"
                            onClick={() => toggleMobileNavbar()}
                            className="z-[60]"
                        >
                            <X className="size-6" />
                        </Button>
                    ) : (
                        <Button
                            size="icon"
                            variant="shadowless"
                            onClick={() => toggleMobileNavbar()}
                            className="z[60]"
                        >
                            <Menu className="size-8" />
                        </Button>
                    )}

                    <div
                        className={`absolute z-50 opacity-0 top-[5px] right-[5px] w-[140px] bg-card border rounded-sm p-4 transition-all duration-300 ease-in-out ${
                            openMobile
                                ? "opacity-100 -translate-y-0"
                                : "-translate-y-50"
                        }`}
                    >
                        {isMobile && openMobile ? (
                            <NavigationMenuList className="flex flex-col items-center justify-center gap-2">
                                {isLoggedIn ? (
                                    <Avatar className="cursor-pointer">
                                        <Link
                                            href={`/profile/${currentUser?.id}`}
                                            className="h-[50px] w-[50px]"
                                        >
                                            <AspectRatio ratio={1}>
                                                <Image
                                                    src={userAvatar.src}
                                                    alt={userAvatar.title}
                                                />
                                                <AvatarFallback className="text-secondary">
                                                    {currentUser?.name[0]}
                                                </AvatarFallback>
                                            </AspectRatio>
                                        </Link>
                                    </Avatar>
                                ) : (
                                    <>
                                        <NavigationMenuItem>
                                            <NavLink
                                                href="/signin"
                                                text="Sign In"
                                                color="text-primary!"
                                            />
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <NavLink
                                                href="/signup"
                                                text="Sign Up"
                                                color="text-foreground!"
                                            />
                                        </NavigationMenuItem>
                                    </>
                                )}

                                <NavigationMenuItem>
                                    <NavLink
                                        href="/search"
                                        text="Search"
                                        color="text-foreground!"
                                    />
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavLink
                                        href="/all-games"
                                        text="All Games"
                                        color="text-foreground!"
                                    />
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        ) : (
                            <></>
                        )}
                    </div>
                </NavigationMenu>
            ) : (
                <NavigationMenu
                    viewport={false}
                    className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"
                >
                    <NavigationMenuList className="flex gap-2 bg-border rounded-lg  shadow-md p-4">
                        {isLoggedIn ? (
                            <></>
                        ) : (
                            <>
                                <NavigationMenuItem>
                                    <NavLink
                                        href="/signin"
                                        text="Sign In"
                                        color="text-primary!"
                                    />
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavLink href="/signup" text="Sign Up" />
                                </NavigationMenuItem>
                            </>
                        )}
                        <NavigationMenuItem>
                            <NavLink href="/search" text="Search" />
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavLink href="/all-games" text="All Games" />
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            )}
        </nav>
    );
}

export default Navbar;
