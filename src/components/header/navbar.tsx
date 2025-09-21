"use client";
import React from "react";
import {
    CustomNavigationMenu,
    CustomNavigationMenuList,
    CustomNavigationMenuItem,
    CustomNavigationMenuLink,
} from "../custom/c_navigation-menu";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { CustomButton } from "../custom/c_button";

const MOBILENAVBAR_KEYBOARD_SHORTCUT = "esc";

function Navbar() {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    // Helper to toggle the sidebar.
    const toggleMobileNavbar = React.useCallback(() => {
        return isMobile
            ? setOpenMobile((open) => !open)
            : setOpen((open) => !open);
    }, [isMobile, setOpen, setOpenMobile]);

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
            <CustomNavigationMenu viewport={false} className="relative">
                {open ? (
                    <CustomButton
                        size="icon"
                        variant="ghost"
                        onClick={() => toggleMobileNavbar()}
                    >
                        <X />
                    </CustomButton>
                ) : (
                    <CustomButton
                        size="icon"
                        variant="ghost"
                        onClick={() => toggleMobileNavbar()}
                    >
                        <Menu />
                    </CustomButton>
                )}

                {open ? (
                    <CustomNavigationMenuList className="flex flex-col gap-2 absolute -top-[40px] right-[40px] w-[120px] bg-amber-200">
                        <CustomNavigationMenuItem>
                            <CustomNavigationMenuLink asChild>
                                <Link href="/signin" className="navbar-link">
                                    Sign In
                                </Link>
                            </CustomNavigationMenuLink>
                        </CustomNavigationMenuItem>
                        <CustomNavigationMenuItem>
                            <CustomNavigationMenuLink asChild>
                                <Link href="/signup" className="navbar-link">
                                    Sign Up
                                </Link>
                            </CustomNavigationMenuLink>
                        </CustomNavigationMenuItem>
                        <CustomNavigationMenuItem>
                            <CustomNavigationMenuLink asChild>
                                <Link href="/search" className="navbar-link">
                                    Search
                                </Link>
                            </CustomNavigationMenuLink>
                        </CustomNavigationMenuItem>
                        <CustomNavigationMenuItem>
                            <CustomNavigationMenuLink asChild>
                                <Link href="/all-games" className="navbar-link">
                                    All Games
                                </Link>
                            </CustomNavigationMenuLink>
                        </CustomNavigationMenuItem>
                    </CustomNavigationMenuList>
                ) : null}
            </CustomNavigationMenu>
        </nav>
    );
}

export default Navbar;
