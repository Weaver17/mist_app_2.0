"use client";
import Image from "next/image";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "../custom/components/c_tooltip";
import { Button } from "../custom/components/buttons/c_button";
import { AspectRatio } from "../custom/components/c_aspect-ratio";

type AvatarImgProps = {
    src: string;
    alt: string;
    title: string;
};

function AvatarImg({ src, alt, title }: AvatarImgProps) {
    return (
        <div className="h-[50px] w-[50px]">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        className="h-[50px] w-[50px] bg-transparent hover:bg-transparent"
                        size="icon"
                        variant="link"
                    >
                        <AspectRatio ratio={1}>
                            <Image
                                src={src}
                                fill
                                alt={alt}
                                className="object-center"
                            />
                        </AspectRatio>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{title}</p>
                </TooltipContent>
            </Tooltip>
        </div>
    );
}

export default AvatarImg;
