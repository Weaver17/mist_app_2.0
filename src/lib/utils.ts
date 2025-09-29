import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import avatars from "./avatars";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function slugify(username: string): string {
    const slug = username.trim().toLowerCase().replace(/\s+/g, "-");
    const randomNum = Math.floor(Math.random() * 900) + 100;
    return `${slug}${randomNum}`;
}

export function getAvatar(alt: string | undefined) {
    switch (alt) {
        case "pacman":
            return avatars[0];
        case "joystick":
            return avatars[1];
        case "mouse":
            return avatars[2];
        case "modern-controller":
            return avatars[3];
        case "classic-controller":
            return avatars[4];
        case "dpad":
            return avatars[5];
        case "spaceship-green":
            return avatars[6];
        case "spaceship-red":
            return avatars[7];
        case "spaceship-blue":
            return avatars[8];
        case "spaceship-purple":
            return avatars[9];
        case "spaceship-orange":
            return avatars[10];
        default:
            return avatars[0];
    }
}
