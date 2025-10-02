"use server";

import { prisma } from "@/lib/prisma";

import {
    Screenshots,
    TBetterAuthSignUpSchema,
    TChangeUsernameSchema,
    TSavedGameSchema,
    TSignInSchema,
} from "@/types/types";
import { auth } from "../../lib/auth";
import { headers } from "next/headers";
import { betterAtuhSignUpSchema, signInSchema } from "@/schema/auth";

export async function createUser(
    { name, email, image }: TBetterAuthSignUpSchema,
    password: string,
    confirmPassword: string
) {
    try {
        const safeData = betterAtuhSignUpSchema.parse({
            name,
            email,
            image,
        });

        if (!safeData) {
            throw new Error("Invalid data");
        }

        const existingEmail = await prisma.user.findUnique({
            where: {
                email: safeData.email,
            },
        });

        if (existingEmail) {
            throw new Error("Email already in use");
        }

        const existingName = await prisma.user.findFirst({
            where: {
                name: safeData.name,
            },
        });

        if (existingName) {
            throw new Error("Username already in use");
        }

        if (password !== confirmPassword) {
            throw new Error("Passwords do not match");
        }

        const data = await auth.api.signUpEmail({
            body: {
                name: safeData.name,
                email: safeData.email,
                password: password,
                image: safeData.image,
            },
        });

        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getUserById(id: string) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: id,
            },
            include: {
                savedGames: true,
            },
        });
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function signIn(formData: TSignInSchema) {
    try {
        const safeData = signInSchema.parse(formData);

        if (!safeData) {
            throw new Error("Invalid data");
        }

        const data = await auth.api.signInEmail({
            body: {
                email: safeData.email,
                password: safeData.password,
            },
            headers: await headers(),
        });

        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function signOut() {
    try {
        await auth.api.signOut({
            headers: await headers(),
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function changeUsername(
    email: string,
    newName: TChangeUsernameSchema
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

        const existingName = await prisma.user.findFirst({
            where: {
                name: newName.newName,
            },
        });

        if (existingName) {
            throw new Error("Username already in use");
        }

        const changedUser = await prisma.user.update({
            where: {
                email: email,
            },
            data: {
                name: newName.newName,
            },
        });

        return changedUser;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function fetchSession() {
    try {
        const session = await auth.api.getSession({
            headers: await headers(),
        });
        return session;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function saveGameAction(email: string, data: TSavedGameSchema) {
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
