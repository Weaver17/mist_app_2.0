"use server";

import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";
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

        const userSlug = slugify(safeData.username);

        // IMPORTANT: In a real application, you should hash the password before saving it.
        // Libraries like bcrypt are perfect for this.
        const user = await prisma.user.create({
            data: {
                slug: userSlug,
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

export async function getUserBySlug(slug: string) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                slug: slug,
            },
        });
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
                        id: data.id,

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

export const getSavedGamesAction = async (email: string) => {
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

        return user.savedGames;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const unsaveGameAction = async (email: string, gameId: number) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if (!user) {
            throw new Error("No account associated with that email");
        }

        const game = await prisma.savedGame.findFirst({
            where: {
                id: gameId,
                userId: user.id,
            },
            include: {
                minimum_system_requirements: true,
                screenshots: true,
            },
        });

        if (!game) {
            throw new Error("Game not found");
        }

        await prisma.$transaction([
            prisma.screenshot.deleteMany({
                where: {
                    savedGameId: game.saved_id,
                },
            }),
            prisma.minimumSystemRequirements.delete({
                where: {
                    savedGameId: game.saved_id,
                },
            }),
            prisma.savedGame.delete({
                where: {
                    id: game.id,
                },
            }),
        ]);
    } catch (error) {
        console.error(error);
        throw error;
    }
};
