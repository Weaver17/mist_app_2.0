"use client";
import React from "react";
import Logo from "../header/logo";
import Link from "next/link";
import {
    CustomNavigationMenu,
    CustomNavigationMenuList,
    CustomNavigationMenuItem,
} from "../custom/c_navigation-menu";
import NavLink from "../header/navlink";
import { useUserContext } from "@/contexts/user-context";

function Footer() {
    const { isLoggedIn } = useUserContext();

    return (
        <div className="relative mt-auto border-t-4 border-primary h-[400px] flex gap-4 justify-between bg-border p-12">
            <Logo />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-300 text-center text-xs font-semibold">
                Developed by Andrew Weaver in 2025 with the help of{" "}
                <Link
                    className="text-secondary hover:underline hover:underline-offset-2"
                    href="https://www.freetogame.com/"
                    target="_blank"
                >
                    freetogame.com
                </Link>
            </div>
            <div className="font-special">
                <CustomNavigationMenu viewport={false} className="">
                    <CustomNavigationMenuList className="flex flex-col gap-2 p-4">
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
                        <CustomNavigationMenuItem>
                            <NavLink href="/about" text="About" />
                        </CustomNavigationMenuItem>
                    </CustomNavigationMenuList>
                </CustomNavigationMenu>
            </div>
        </div>
    );
}

export default Footer;
