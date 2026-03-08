import { Button } from "../custom/components/buttons/c_button";
import Image from "next/image";
import images from "@/lib/images";
import { Game } from "@/types/types";
import { SavedGame } from "../../../generated/prisma-client/client";

type SaveBtnProps = {
    onSaveGameClick: (game: Game | SavedGame) => Promise<void>;
    isSaved: boolean;
    game: Game | SavedGame;
    disabled: boolean;
};

function SaveBtn({ onSaveGameClick, isSaved, game, disabled }: SaveBtnProps) {
    return (
        <Button
            size="sm"
            variant="outline_plain"
            className="p-0! px-1.5! border-none! bg-transparent! opacity-50 hover:opacity-100! shadow-none!  dark:bg-zinc-300!  dark:hover:opacity-100"
            onClick={() => onSaveGameClick(game)}
            disabled={disabled}
        >
            <Image
                src={isSaved ? images.checkmark : images.save}
                alt="save icon"
                width={18}
                height={18}
                priority
            />
        </Button>
    );
}

export default SaveBtn;
