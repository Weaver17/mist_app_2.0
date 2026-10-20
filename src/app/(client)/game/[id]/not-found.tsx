import { Button } from "@/components/custom/components/buttons/c_button";
import FadingSidebar from "@/components/profile/fading-sidebar";
import { H1, Muted, P } from "@/typography/custom";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import images from "@/lib/images";
import { Card, CardContent } from "@/components/custom/components/cards/c_card";
import { motion } from "motion/react";

function GameNotFound() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="p-4 flex flex-col gap-4 max-w-[1380px] mx-auto lg:gap-8"
        >
            <div className="border-b border-secondary pb-4  w-full mx-auto">
                <H1 className="text-center font-special">
                    Error 404. Game Not Found
                </H1>
            </div>
            <div className="flex flex-col gap-8 px-4 w-full mx-auto lg:flex-row">
                <div className="w-full relative lg:w-1/3 xl:w-1/4">
                    <FadingSidebar>
                        {/* <AspectRatio
                                    ratio={16 / 9}
                                    className=" rounded-sm z-10!"
                                >
                                    <Image
                                        src={game.thumbnail}
                                        alt={game.title}
                                        fill
                                        className="rounded-sm z-10!"
                                    />
                                </AspectRatio> */}
                        <P className="max-w-[280px] text-center text-sm font-mono font-semibold">
                            Game could not be loaded
                        </P>
                        <div className="flex flex-col gap-2 px-8">
                            <Button variant="default" size="lg" disabled>
                                <Link href="/" target="_blank">
                                    <P>FreeToPlay.com Profile</P>
                                </Link>
                            </Button>
                            <Button variant="secondary" size="lg" disabled>
                                <Link href="/" target="_blank">
                                    <P>Download and Play</P>
                                </Link>
                            </Button>
                        </div>
                        <div className="flex justify-between items-center gap-2 px-12">
                            <P className="font-sm font-mono font-semibold">
                                ????
                            </P>

                            <Button
                                size="sm"
                                variant="outline_plain"
                                className="p-0! px-1.5! border-none! bg-transparent! opacity-50 hover:opacity-100! shadow-none!  dark:bg-zinc-300!  dark:hover:opacity-100"
                                disabled
                            >
                                <Image
                                    src={images.save}
                                    alt="save icon"
                                    width={18}
                                    height={18}
                                    priority
                                />
                            </Button>
                        </div>
                    </FadingSidebar>
                </div>

                <div className="w-full flex flex-col gap-4 lg:w-2/3 lg:ml-auto xl:w-3/4">
                    <Card>
                        <CardContent>
                            <div className="flex flex-col pb-2 gap-4 border-b border-primary md:flex-row-reverse md:justify-between">
                                <div className="flex gap-2 justify-evenly md:flex-col md:w-1/2">
                                    <Muted className="font-semibold text-end">
                                        Platform
                                    </Muted>
                                    <Muted className="font-semibold text-end">
                                        Genre
                                    </Muted>
                                </div>
                                <div className="flex flex-col items-center text-center gap-2 justify-between sm:flex-row md:w-1/2">
                                    <div className="flex flex-col gap-1">
                                        <Muted className="featured-game-info-label">
                                            Publisher:
                                        </Muted>
                                        <P className="featured-game-info">
                                            ???
                                        </P>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Muted className="featured-game-info-label">
                                            Developer:
                                        </Muted>
                                        <P className="featured-game-info">
                                            ???
                                        </P>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Muted className="featured-game-info-label">
                                            Release Date:
                                        </Muted>
                                        <P className="featured-game-info">
                                            ????-??-??
                                        </P>
                                    </div>
                                </div>
                            </div>
                            <div className="my-8">
                                <P className="text-xs font-semibold md:text-lg whitespace-break-spaces">
                                    This is the &quot;Game Not Found&quot;
                                    screen. Meaning there was an error in
                                    finding the info for the game, or the Game
                                    ID number does not match anything in the
                                    database.
                                </P>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="flex flex-col gap-4 w-full mx-auto">
                <Card>
                    <CardContent>
                        <div className="flex flex-col gap-2 justify-between text-center md:flex-row">
                            <div className="flex flex-col gap-1">
                                <Muted className="featured-game-info-label">
                                    Operating System:
                                </Muted>
                                <P className="featured-game-info">????</P>
                            </div>
                            <div className="flex flex-col gap-1">
                                <Muted className="featured-game-info-label">
                                    Graphics:
                                </Muted>
                                <P className="featured-game-info">????</P>
                            </div>
                            <div className="flex flex-col gap-1">
                                <Muted className="featured-game-info-label">
                                    Memory:
                                </Muted>
                                <P className="featured-game-info">????</P>
                            </div>
                            <div className="flex flex-col gap-1">
                                <Muted className="featured-game-info-label">
                                    Processor:
                                </Muted>
                                <P className="featured-game-info">????</P>
                            </div>
                            <div className="flex flex-col gap-1">
                                <Muted className="featured-game-info-label">
                                    Storage:
                                </Muted>
                                <P className="featured-game-info">????</P>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </motion.div>
    );
}

export default GameNotFound;
