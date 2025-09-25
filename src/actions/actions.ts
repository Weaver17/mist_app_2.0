"use server";

import { prisma } from "@/lib/prisma";
import {
    changeUsernameSchema,
    signInSchema,
    signUpSchema,
} from "@/schema/auth";
import z from "zod";

type TCreateUser = z.infer<typeof signUpSchema>;
type TSignIn = z.infer<typeof signInSchema>;
type TChangeUsername = z.infer<typeof changeUsernameSchema>;

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
