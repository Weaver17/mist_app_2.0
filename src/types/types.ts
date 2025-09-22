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
