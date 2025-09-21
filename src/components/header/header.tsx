import React from "react";
import Logo from "./logo";
import Navbar from "./navbar";

function Header() {
    return (
        <header className="p-4 flex justify-between items-center gap-4">
            <div>
                <Logo />
            </div>
            <div>
                <Navbar />
            </div>
        </header>
    );
}

export default Header;
