import z from "zod";

export const signInSchema = z.object({
    email: z.email(),
    password: z.string().min(8),
});

export const signUpSchema = z.object({
    username: z.string().min(4).max(16),
    email: z.email(),
    password: z.string().min(8).max(24),
    confirmPassword: z.string().min(8).max(24),
});

export const changeUsernameSchema = z.object({
    newUsername: z.string().min(4).max(16),
});
