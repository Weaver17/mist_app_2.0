"use client";
import React from "react";
import Logo from "./logo";
import Navbar from "./navbar";
import Avatar from "./avatar";
import { useIsMobile } from "@/hooks/use-mobile";

function Header() {
    const isMobile = useIsMobile();

    return (
        <header className="w-full p-4 flex justify-between items-center gap-4">
            <div>
                <Logo />
            </div>
            <div>
                <Navbar />
            </div>
            {isMobile ? (
                <></>
            ) : (
                <div>
                    <Avatar />
                </div>
            )}
        </header>
    );
}

export default Header;
