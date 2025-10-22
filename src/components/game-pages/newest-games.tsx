import { Game } from "@/types/types";
import GamesList from "../lists/game-list";
import { H2 } from "@/typography/custom";
import LoadingSpinner from "../loading/loading-spinner";
import { motion } from "motion/react";

type NewestGamesProps = {
    games: Game[];
};

function NewestGames({ games }: NewestGamesProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className=""
        >
            <H2 className="font-special my-4 border-secondary">Newest Games</H2>
            {games.length === 0 ? (
                <LoadingSpinner />
            ) : (
                <GamesList games={games} />
            )}
        </motion.div>
    );
}

export default NewestGames;
