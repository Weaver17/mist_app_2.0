"use client";
import React from "react";
import {
    CustomNavigationMenu,
    CustomNavigationMenuList,
    CustomNavigationMenuItem,
} from "../custom/c_navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { CustomButton } from "../custom/c_button";
import NavLink from "./navlink";

const MOBILENAVBAR_KEYBOARD_SHORTCUT = "esc";

function Navbar() {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React.useState(false);

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
                            <X />
                        </CustomButton>
                    ) : (
                        <CustomButton
                            size="icon"
                            variant="ghost"
                            onClick={() => toggleMobileNavbar()}
                            className="z[60]"
                        >
                            <Menu />
                        </CustomButton>
                    )}

                    <div
                        className={`absolute opacity-0 top-[5px] right-[5px] w-[140px] bg-card border rounded-sm p-4 transition-all duration-300 ease-in-out ${
                            openMobile
                                ? "opacity-100 translate-x-0"
                                : "translate-x-full"
                        }`}
                    >
                        {isMobile && openMobile ? (
                            <CustomNavigationMenuList className="flex flex-col items-center justify-center gap-2">
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
                        ) : null}
                    </div>
                </CustomNavigationMenu>
            ) : (
                <CustomNavigationMenu viewport={false} className="relative">
                    <CustomNavigationMenuList className="flex gap-2 bg-border rounded-lg p-4 shadow-md">
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
