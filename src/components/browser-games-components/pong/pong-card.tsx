import Link from "next/link";

// import { AspectRatio } from "../custom/components/c_aspect-ratio";
import { H5, Muted } from "@/typography/custom";
// import Image from "next/image";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from "@/components/custom/components/cards/c_card";
import { ShineBorder } from "@/components/custom/components/animated/c_shine-border";

function PongCard() {
    return (
        <Card className="w-[280px] h-[300px] py-2 gap-0! relative">
            <CardHeader className="pr-1! font-special text-lg flex justify-between items-center">
                <H5 className="truncate">Pong</H5>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 p-1!">
                <Link href="/browser-games/pong">
                    <div className="h-30 w-full bg-foreground"></div>
                </Link>

                <CardDescription className="text-xs text-foreground font-semibold h-[80px] overflow-hidden">
                    Brand new, never-before seen, thrilling 2D tennis.
                </CardDescription>
            </CardContent>
            <CardFooter className="mt-auto flex justify-between items-center gap-2">
                <Muted className="text-xs font-semibold">Browser</Muted>
                <Muted className="text-xs font-semibold">Sports</Muted>
            </CardFooter>
            <ShineBorder shineColor="#0284b8" duration={30} borderWidth={2} />
        </Card>
    );
}

export default PongCard;
