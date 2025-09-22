export const gameUrl = "https://free-to-play-games-database.p.rapidapi.com/api";

export const headers = {
    "x-rapidapi-key": process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY!,
    "x-rapidapi-host": process.env.NEXT_PUBLIC_X_RAPIDAPI_HOST!,
};
//

export const handleServerResponse = (res: Response) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export async function request(
    url: string | URL | Request,
    options: RequestInit | undefined
) {
    const res = await fetch(url, options);
    return handleServerResponse(res);
}

export const getGamesByReleaseDate = () => {
    return request(`${gameUrl}/games?sort-by=release-date`, { headers });
};

export const getGameById = (id: number) => {
    return request(`${gameUrl}/game?id=${id}`, { headers });
};

export const getGamesByPop = () => {
    return request(`${gameUrl}/games?sort-by=popularity`, { headers });
};
