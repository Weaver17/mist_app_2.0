"use client";
import React from "react";
import Logo from "./logo";
import Navbar from "./navbar";
import Avatar from "./avatar";
import { useIsMobile } from "@/hooks/use-mobile";

function Header() {
    const isMobile = useIsMobile();

    return (
        <header className="relative w-full p-4 flex justify-between items-center gap-4 max-w-[1380px] mx-auto">
            <Logo />
            <Navbar />
            {isMobile ? <></> : <Avatar />}
        </header>
    );
}

export default Header;
