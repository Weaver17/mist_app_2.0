import z from "zod";

export const savedGameSchema = z.object({
    description: z.string(),
    developer: z.string(),
    freetogame_profile_url: z.url(),
    game_url: z.url(),
    genre: z.string(),
    id: z.number(),
    minimum_system_requirements: z.object({
        graphics: z.string(),
        memory: z.string(),
        os: z.string(),
        processor: z.string(),
        storage: z.string(),
    }),
    platform: z.string(),
    publisher: z.string(),
    release_date: z.string(),
    screenshots: z.array(
        z.object({
            id: z.number(),
            image: z.string(),
        })
    ),
    short_description: z.string(),
    status: z.string(),
    thumbnail: z.string(),
    title: z.string(),
});
