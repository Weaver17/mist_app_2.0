"use server";

import { SavedGame } from "@/generated/prisma-client";
import { prisma } from "@/lib/prisma";
import {
    changeUsernameSchema,
    signInSchema,
    signUpSchema,
} from "@/schema/auth";
import { savedGameSchema } from "@/schema/game-schema";
import { Screenshots } from "@/types/types";
import z from "zod";

type TCreateUser = z.infer<typeof signUpSchema>;
type TSignIn = z.infer<typeof signInSchema>;
type TChangeUsername = z.infer<typeof changeUsernameSchema>;
type TSavedGame = z.infer<typeof savedGameSchema>;

export async function createUser(data: TCreateUser) {
    try {
        console.log("creating user...");
        const safeData = signUpSchema.parse(data);

        if (!safeData) {
            throw new Error("Invalid data");
        }

        const existingUser = await prisma.user.findUnique({
            where: {
                email: safeData.email,
            },
        });

        if (existingUser) {
            throw new Error("Email already in use");
        }

        if (safeData.password !== safeData.confirmPassword) {
            throw new Error("Passwords do not match");
        }

        // IMPORTANT: In a real application, you should hash the password before saving it.
        // Libraries like bcrypt are perfect for this.
        const user = await prisma.user.create({
            data: {
                username: safeData.username,
                email: safeData.email,
                password: safeData.password, // This should be a hashed password
            },
        });
        console.log("user created: ", user);
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function signIn(data: TSignIn) {
    try {
        console.log("signing in...");
        const safeData = signInSchema.parse(data);

        if (!safeData) {
            throw new Error("Invalid data");
        }

        const user = await prisma.user.findUnique({
            where: {
                email: safeData.email,
            },
        });

        if (!user) {
            throw new Error("No account associated with that email");
        }

        if (user.password !== safeData.password) {
            throw new Error("Incorrect password");
        }

        console.log("signed in: ", user);
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function changeUsername(
    email: string,
    newUsername: TChangeUsername
) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if (!user) {
            throw new Error("No account associated with that email");
        }

        const changedUser = await prisma.user.update({
            where: {
                email: email,
            },
            data: {
                username: newUsername.newUsername,
            },
        });

        console.log(
            "username changed from: ",
            user.username,
            "to: ",
            changedUser.username
        );
        return changedUser;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function saveGameAction(email: string, data: TSavedGame) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
            include: {
                savedGames: true,
            },
        });

        if (!user) {
            throw new Error("No account associated with that email");
        }

        const { minimum_system_requirements, screenshots } = data;

        await prisma.user.update({
            where: {
                email: email,
            },
            data: {
                savedGames: {
                    create: {
                        description: data.description,
                        developer: data.developer,
                        freetogame_profile_url: data.freetogame_profile_url,
                        game_url: data.game_url,
                        genre: data.genre,
                        game_id: data.id,

                        minimum_system_requirements: {
                            create: {
                                graphics: minimum_system_requirements.graphics,
                                memory: minimum_system_requirements.memory,
                                os: minimum_system_requirements.os,
                                processor:
                                    minimum_system_requirements.processor,
                                storage: minimum_system_requirements.storage,
                            },
                        },
                        platform: data.platform,
                        publisher: data.publisher,
                        release_date: data.release_date,
                        screenshots: {
                            create: screenshots.map(
                                (screenshot: Screenshots) => ({
                                    id: screenshot.id,
                                    image: screenshot.image,
                                })
                            ),
                        },
                        short_description: data.short_description,
                        status: data.status,
                        thumbnail: data.thumbnail,
                        title: data.title,
                    },
                },
            },
        });

        console.log(user.savedGames[0]);
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
