"use server";

import { prisma } from "@/lib/prisma";
import { signInSchema, signUpSchema } from "@/schema/auth";
import z from "zod";

type TCreateUser = z.infer<typeof signUpSchema>;
type TSignIn = z.infer<typeof signInSchema>;

export async function createUser(data: TCreateUser) {
    try {
        console.log("creating user...");
        const safeData = signUpSchema.parse(data);

        if (!safeData) {
            throw new Error("Invalid data");
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
                password: safeData.password, // This should be a hashed password
            },
        });

        if (!user) {
            throw new Error("Incorrect Email or Password");
        }

        console.log("signed in: ", user);
        return user;
    } catch (error) {
        console.error(error);
    }
}
