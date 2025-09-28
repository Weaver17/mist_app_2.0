import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function slugify(username: string): string {
    const slug = username.trim().toLowerCase().replace(/\s+/g, "-");
    const randomNum = Math.floor(Math.random() * 900) + 100;
    return `${slug}${randomNum}`;
}
