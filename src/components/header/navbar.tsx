"use client";
import React from "react";
import {
    CustomNavigationMenu,
    CustomNavigationMenuList,
    CustomNavigationMenuItem,
} from "../custom/c_navigation-menu";
import { Menu, X } from "lucide-react";
import { CustomButton } from "../custom/c_button";
import NavLink from "./navlink";
import { useIsMobile } from "@/hooks/use-mobile";
import { useUserContext } from "@/contexts/user-context";
import {
    CustomAvatar,
    CustomAvatarFallback,
    CustomAvatarImage,
} from "../custom/c_avatar";
import Link from "next/link";

const MOBILENAVBAR_KEYBOARD_SHORTCUT = "m";

function Navbar() {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React.useState(false);

    const { isLoggedIn, currentUser } = useUserContext();

    // Helper to toggle the sidebar.
    const toggleMobileNavbar = React.useCallback(() => {
        setOpenMobile((open) => !open);
    }, [setOpenMobile]);

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
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

    return (
        <nav className="font-special">
            {isMobile ? (
                <CustomNavigationMenu viewport={false} className="relative">
                    {isMobile && openMobile ? (
                        <CustomButton
                            size="icon"
                            variant="ghost"
                            onClick={() => toggleMobileNavbar()}
                            className="z-[60]"
                        >
                            <X className="size-6" />
                        </CustomButton>
                    ) : (
                        <CustomButton
                            size="icon"
                            variant="ghost"
                            onClick={() => toggleMobileNavbar()}
                            className="z[60]"
                        >
                            <Menu className="size-8" />
                        </CustomButton>
                    )}

                    <div
                        className={`absolute z-50 opacity-0 top-[5px] right-[5px] w-[140px] bg-card border rounded-sm p-4 transition-all duration-300 ease-in-out ${
                            openMobile
                                ? "opacity-100 -translate-y-0"
                                : "-translate-y-50"
                        }`}
                    >
                        {isMobile && openMobile ? (
                            <CustomNavigationMenuList className="flex flex-col items-center justify-center gap-2">
                                {isLoggedIn ? (
                                    <CustomAvatar className="cursor-pointer">
                                        <Link
                                            href={`/profile/${currentUser?.slug}`}
                                        >
                                            <CustomAvatarImage
                                                src="https://www.freetogame.com/g/461/thumbnail.jpg"
                                                alt="Avatar"
                                            />
                                        </Link>
                                        <CustomAvatarFallback className="text-secondary">
                                            AZ
                                        </CustomAvatarFallback>
                                    </CustomAvatar>
                                ) : (
                                    <>
                                        <CustomNavigationMenuItem>
                                            <NavLink
                                                href="/signin"
                                                text="Sign In"
                                                color="text-primary!"
                                            />
                                        </CustomNavigationMenuItem>
                                        <CustomNavigationMenuItem>
                                            <NavLink
                                                href="/signup"
                                                text="Sign Up"
                                                color="text-foreground!"
                                            />
                                        </CustomNavigationMenuItem>
                                    </>
                                )}

                                <CustomNavigationMenuItem>
                                    <NavLink
                                        href="/search"
                                        text="Search"
                                        color="text-foreground!"
                                    />
                                </CustomNavigationMenuItem>
                                <CustomNavigationMenuItem>
                                    <NavLink
                                        href="/all-games"
                                        text="All Games"
                                        color="text-foreground!"
                                    />
                                </CustomNavigationMenuItem>
                            </CustomNavigationMenuList>
                        ) : (
                            <></>
                        )}
                    </div>
                </CustomNavigationMenu>
            ) : (
                <CustomNavigationMenu
                    viewport={false}
                    className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"
                >
                    <CustomNavigationMenuList className="flex gap-2 bg-border rounded-lg  shadow-md p-4">
                        {isLoggedIn ? (
                            <></>
                        ) : (
                            <>
                                <CustomNavigationMenuItem>
                                    <NavLink
                                        href="/signin"
                                        text="Sign In"
                                        color="text-primary!"
                                    />
                                </CustomNavigationMenuItem>
                                <CustomNavigationMenuItem>
                                    <NavLink href="/signup" text="Sign Up" />
                                </CustomNavigationMenuItem>
                            </>
                        )}
                        <CustomNavigationMenuItem>
                            <NavLink href="/search" text="Search" />
                        </CustomNavigationMenuItem>
                        <CustomNavigationMenuItem>
                            <NavLink href="/all-games" text="All Games" />
                        </CustomNavigationMenuItem>
                    </CustomNavigationMenuList>
                </CustomNavigationMenu>
            )}
        </nav>
    );
}

export default Navbar;
