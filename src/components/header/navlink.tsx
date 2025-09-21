import React from "react";
import { CustomNavigationMenuLink } from "../custom/c_navigation-menu";
import Link from "next/link";

type NavListProps = {
    href: string;
    text: string;
    color?: string;
};

function NavLink({ href, text, color }: NavListProps) {
    return (
        <CustomNavigationMenuLink asChild>
            <Link
                href={href}
                className={`navbar-link text-center ${color} hover:bg-transparent! hover:text-secondary! `}
            >
                {text}
            </Link>
        </CustomNavigationMenuLink>
    );
}

export default NavLink;
