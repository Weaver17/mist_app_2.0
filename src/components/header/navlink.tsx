import React from "react";
import Link from "next/link";
import { NavigationMenuLink } from "../custom/components/c_navigation-menu";

type NavListProps = {
    href: string;
    text: string;
    color?: string;
};

function NavLink({ href, text, color }: NavListProps) {
    return (
        <NavigationMenuLink
            className="focus:bg-transparent! focus:text-secondary! focus-visible:ring-transparent! focus-visible:outline-1!"
            asChild
        >
            <Link
                href={href}
                className={`navbar-link text-center ${color}  hover:bg-transparent! hover:text-secondary!`}
            >
                {text}
            </Link>
        </NavigationMenuLink>
    );
}

export default NavLink;
