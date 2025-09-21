import { Game } from "@/app/types/types";
import GamesList from "../lists/game-list";

type NewestGamesProps = {
    games: Game[];
};

function NewestGames({ games }: NewestGamesProps) {
    return (
        <div className="">
            <GamesList games={games} />
        </div>
    );
}

export default NewestGames;
