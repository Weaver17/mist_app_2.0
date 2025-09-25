import { signInSchema, signUpSchema } from "@/schema/auth";
import z from "zod";

export type TSignInSchema = z.infer<typeof signInSchema>;
export type TSignUpSchema = z.infer<typeof signUpSchema>;

export type User = {
    id: string;
    username: string;
    email: string;
    password: string;
    confirmPassword?: string;
    savedGames?: SavedGame[];
};

export type CurrentUser = {
    email: string;
    password: string;
};

export type SavedGame = {
    id: string;
    description: string;
    developer: string;
    freetogame_profile_url: string;
    game_url: string;
    genre: string;
    game_id: number;
    minimum_system_requirements: Minimum_System_Requirements;
    platform: string;
    publisher: string;
    release_date: string;
    screenshots: Screenshots[];
    short_description: string;
    status: string;
    thumbnail: string;
    title: string;
    user_id: string;
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

type Screenshots = {
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
