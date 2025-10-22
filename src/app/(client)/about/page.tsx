import { Button } from "@/components/custom/components/buttons/c_button";
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/custom/components/cards/c_card";
import FadingSidebar from "@/components/profile/fading-sidebar";
import { H1, H3, P } from "@/typography/custom";
import Link from "next/link";
import React from "react";

function AboutPage() {
    return (
        <div className="client-page">
            <div className="border-b border-secondary pb-4 flex flex-col gap-4 w-full mx-auto">
                <H1 className="text-center font-special">About</H1>
            </div>
            <div className="flex flex-col gap-12 py-4 border-b border-primary lg:px-8 lg:flex-row">
                <div className="w-full relative lg:w-1/4">
                    <FadingSidebar>
                        <H3 className="text-center! underline! text-sm! md:text-lg!">
                            My Saved Games:
                        </H3>
                        <ul className="space-y-4 text-center font-special whitespace-nowrap">
                            <li>
                                <Link href="/game/599">Marvel Rivals</Link>
                            </li>
                            <li>
                                <Link href="/game/604">Frag Punk</Link>
                            </li>
                            <li>
                                <Link href="/game/286">League of Legends</Link>
                            </li>
                            <li>
                                <Link href="/game/540">Overwatch 2</Link>
                            </li>
                            <li>
                                <Link href="/game/217">Smite</Link>
                            </li>
                        </ul>
                    </FadingSidebar>
                </div>
                <div className="w-full flex flex-col gap-4 lg:w-3/4">
                    <Card>
                        <CardContent>
                            <div className="flex flex-col pb-2 gap-4 border-b border-primary md:flex-row md:justify-end">
                                <Button asChild variant="link">
                                    <Link
                                        href="https://github.com/Weaver17"
                                        target="_blank"
                                    >
                                        GitHub
                                    </Link>
                                </Button>
                                <Button asChild variant="link">
                                    <Link
                                        href="https://www.linkedin.com/in/andrew-weaver-1725-profile/"
                                        target="_blank"
                                    >
                                        LinkedIn
                                    </Link>
                                </Button>
                                <Button asChild variant="link">
                                    <Link
                                        href="https://elevate-auto-detailing.com/"
                                        target="_blank"
                                    >
                                        Elevate Auto Detailing
                                    </Link>
                                </Button>
                            </div>
                            <P>
                                Hello there! My name is Andrew Weaver and I
                                originally created this web page for a final
                                project for TripleTen&apos;s Full Stack
                                Engineering bootcamp. They had me use Node.js
                                and Vite + React to lauch it on the Google
                                Cloud. Since graduating, I learned Typescript
                                and Next.js and also starting using Prisma ORM
                                and shadcn components. I enjoyed them and
                                decided to port my MIST site over to Next.js and
                                Vercel. I did some styling updates and
                                implemented BetterAuth, but the site is mostly
                                the same, so it only took a week or two, and
                                only a tiny bit of help from AI. The links above
                                take you to my GitHub and LinkedIn pages and I
                                also own my own car detailing business, so if
                                anyone is around Columbus, Ohio, feel free to
                                check it out!
                            </P>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="flex flex-col gap-4 md:px-12">
                <Card>
                    <CardContent>
                        <CardHeader className="py-4 border-b border-primary">
                            <Button asChild variant="link">
                                <Link
                                    href="https://www.freetogame.com/"
                                    target="_blank"
                                >
                                    FreeToGame.com
                                </Link>
                            </Button>
                        </CardHeader>
                        <P>
                            FreeToGame.com is essentially this webpage except it
                            is way better in every way, but this one is nice,
                            too. It is is a gaming platform that brings together
                            the best Free-to-Play Multiplayer Online Games and
                            MMO Games into one convenient place. Whether
                            you&apos;re into MMORPGs, MOBAs, FPS, or strategy
                            games, FreeToGame offers a comprehensive gaming
                            experience tailored to your interests. FreeToGame
                            also offers a free public API that can be accessed
                            without any restrictions or the need to create an
                            account. This Free-To-Play Games Database API
                            provides developers and enthusiasts with valuable
                            data to enhance their gaming projects.
                        </P>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default AboutPage;
