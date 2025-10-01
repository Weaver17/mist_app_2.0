import z from "zod";

export const signInSchema = z.object({
    email: z.email(),
    password: z.string().min(8),
});

export const signUpSchema = z.object({
    name: z.string().min(4).max(24),
    email: z.email(),
    password: z.string().min(8).max(24),
    confirmPassword: z.string().min(8).max(24),
    image: z.enum([
        "pacman",
        "joystick",
        "mouse",
        "modern-controller",
        "classic-controller",
        "dpad",
        "spaceship-green",
        "spaceship-red",
        "spaceship-blue",
        "spaceship-purple",
        "spaceship-orange",
    ]),
});

export const changeUsernameSchema = z.object({
    newName: z.string().min(4).max(16),
});
