import { Game } from "@/types/types";
import GamesList from "../lists/game-list";
import { H2Custom } from "@/typography/custom";

type NewestGamesProps = {
    games: Game[];
};

function NewestGames({ games }: NewestGamesProps) {
    return (
        <div className="">
            <H2Custom className="font-special my-4 border-secondary">
                Newest Games
            </H2Custom>
            <GamesList games={games} />
        </div>
    );
}

export default NewestGames;
