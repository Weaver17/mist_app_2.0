"use server";

import { prisma } from "@/lib/prisma";
import { signUpSchema } from "@/schema/auth";
import z from "zod";

type TCreateUser = z.infer<typeof signUpSchema>;

export async function createUser(data: TCreateUser) {
    try {
        console.log("creating user: ", data);
        const safeData = signUpSchema.parse(data);

        if (!safeData) {
            throw new Error("Invalid data");
        }

        if (safeData.password !== safeData.confirmPassword) {
            throw new Error("Passwords do not match");
        }

        console.log(safeData);

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
