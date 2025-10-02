import { Game } from "@/types/types";
import GameList from "../lists/game-list";
import { H3Custom } from "@/typography/custom";

type SearchPageProps = {
    gamesToShow: Game[];
    filteredGames: Game[];
};

function Search({ gamesToShow, filteredGames }: SearchPageProps) {
    return (
        <>
            {filteredGames && filteredGames.length === 0 ? (
                <H3Custom className="text-center">No games found</H3Custom>
            ) : (
                <GameList games={gamesToShow} />
            )}
        </>
    );
}

export default Search;
