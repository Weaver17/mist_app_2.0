"use client";
import { CustomAspectRatio } from "../custom/c_aspect-ratio";
import Image from "next/image";

import {
    CustomTooltip,
    CustomTooltipContent,
    CustomTooltipTrigger,
} from "../custom/c_tooltip";
import { CustomButton } from "../custom/c_button";

type AvatarImgProps = {
    src: string;
    alt: string;
    title: string;
};

function AvatarImg({ src, alt, title }: AvatarImgProps) {
    return (
        <div className="h-[50px] w-[50px]">
            <CustomTooltip>
                <CustomTooltipTrigger asChild>
                    <CustomButton
                        className="h-[50px] w-[50px]"
                        size="icon"
                        variant="link"
                    >
                        <CustomAspectRatio ratio={1}>
                            <Image
                                src={src}
                                fill
                                alt={alt}
                                className="object-center"
                            />
                        </CustomAspectRatio>
                    </CustomButton>
                </CustomTooltipTrigger>
                <CustomTooltipContent>
                    <p>{title}</p>
                </CustomTooltipContent>
            </CustomTooltip>
        </div>
    );
}

export default AvatarImg;
