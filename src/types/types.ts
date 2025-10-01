import {
    changeUsernameSchema,
    signInSchema,
    signUpSchema,
} from "@/schema/auth";
import { savedGameSchema } from "@/schema/game-schema";
import z from "zod";

export type TSignInSchema = z.infer<typeof signInSchema>;
export type TSignUpSchema = z.infer<typeof signUpSchema>;
export type TChangeUsernameSchema = z.infer<typeof changeUsernameSchema>;
export type TSavedGameSchema = z.infer<typeof savedGameSchema>;

export type TUser = {
    id?: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    image:
        | "pacman"
        | "joystick"
        | "mouse"
        | "modern-controller"
        | "classic-controller"
        | "dpad"
        | "spaceship-green"
        | "spaceship-red"
        | "spaceship-blue"
        | "spaceship-purple"
        | "spaceship-orange";
    savedGames?: TSavedGame[];
};

export type TSavedGame = {
    saved_id: string;
    description: string;
    developer: string;
    freetogame_profile_url: string;
    game_url: string;
    genre: string;
    id: number;
    minimum_system_requirements: Minimum_System_Requirements;
    platform: string;
    publisher: string;
    release_date: string;
    screenshots: Screenshots[];
    short_description: string;
    status: string;
    thumbnail: string;
    title: string;
    userId: string;
};

export type Game = {
    developer: string;
    freetogame_profile_url: string;
    game_url: string;
    genre: string;
    id: number;
    platform: string;
    publisher: string;
    release_date: string;
    short_description: string;
    thumbnail: string;
    title: string;
};

export type FeaturedGame = {
    description: string;
    developer: string;
    freetogame_profile_url: string;
    game_url: string;
    genre: string;
    id: number;
    minimum_system_requirements: Minimum_System_Requirements;
    platform: string;
    publisher: string;
    release_date: string;
    screenshots: Screenshots[];
    short_description: string;
    status: string;
    thumbnail: string;
    title: string;
};

export type Screenshots = {
    id: number;
    image: string;
};

type Minimum_System_Requirements = {
    graphics: string;
    memory: string;
    os: string;
    processor: string;
    storage: string;
};

export type SelectOption = {
    title: string;
    slug: string;
};

export type TAvatarImg = {
    id: string;
    title: string;
    alt: string;
    src: string;
};
