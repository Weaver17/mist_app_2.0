import { CustomButton } from "@/components/custom/c_button";
import { CustomCard, CustomCardContent } from "@/components/custom/c_card";
import { H1Custom, H3Custom, PCustom } from "@/typography/custom";
import Link from "next/link";
import React from "react";

function AboutPage() {
    return (
        <div className="p-4 flex flex-col gap-4 w-full mx-auto">
            <div className="border-b border-secondary pb-4 flex flex-col gap-4 w-full mx-auto">
                <H1Custom className="text-center font-special">About</H1Custom>
            </div>
            <div className="flex flex-col gap-12 py-4 border-b border-primary lg:px-8 lg:flex-row">
                <div className="w-full relative lg:w-1/4">
                    <div className="mx-auto max-w-[320px] rounded-sm bg-card/90 blur-lg min-h-[400px]"></div>
                    <div className="absolute flex flex-col gap-4 py-8 max-w-[320px] top-0 left-1/2 -translate-x-1/2 lg:gap-8 lg:py-20">
                        <H3Custom className="text-center! underline! text-sm! md:text-lg!">
                            My Saved Games:
                        </H3Custom>
                        <ul className="space-y-4 text-center font-special whitespace-nowrap">
                            <li>Marvel Heroes</li>
                            <li>Frag Punk</li>
                            <li>League of Legends</li>
                            <li>Overwatch 2</li>
                            <li>Smite</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4 lg:w-3/4">
                    <CustomCard>
                        <CustomCardContent>
                            <div className="flex flex-col pb-2 gap-4 border-b border-primary md:flex-row md:justify-end">
                                <CustomButton asChild variant="link">
                                    <Link href="/">GitHub</Link>
                                </CustomButton>
                                <CustomButton asChild variant="link">
                                    <Link href="/">LinkedIn</Link>
                                </CustomButton>
                                <CustomButton asChild variant="link">
                                    <Link href="/">Elevate Auto Detailing</Link>
                                </CustomButton>
                            </div>
                            <PCustom>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quasi maxime cupiditate
                                aspernatur iste sapiente, rerum, nulla nisi
                                facere laudantium optio recusandae ab sit ad
                                reiciendis odio illo neque sequi explicabo
                                doloremque iure consequuntur, adipisci
                                provident! Repellat illum eius autem libero,
                                eveniet adipisci, ipsa voluptate voluptatibus
                                consequatur labore eaque. Esse sint dolore
                                libero. Expedita quam dolorum amet dolorem, illo
                                minus inventore ipsum impedit, excepturi tempore
                                similique cum ullam a praesentium dignissimos
                                quidem consequatur mollitia cupiditate! Ea
                                magnam, officiis dicta suscipit quos molestias
                                inventore molestiae tempora, amet accusamus
                                alias at, officia adipisci voluptatem. Esse quam
                                libero illum dolorem, voluptate amet quos ut?
                            </PCustom>
                        </CustomCardContent>
                    </CustomCard>
                </div>
            </div>
            <div className="flex flex-col gap-4 md:px-12">
                <CustomCard>
                    <CustomCardContent>
                        <PCustom>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quasi maxime cupiditate aspernatur iste
                            sapiente, rerum, nulla nisi facere laudantium optio
                            recusandae ab sit ad reiciendis odio illo neque
                            sequi explicabo doloremque iure consequuntur,
                            adipisci provident! Repellat illum eius autem
                            libero, eveniet adipisci, ipsa voluptate
                            voluptatibus consequatur labore eaque. Esse sint
                            dolore libero. Expedita quam dolorum amet dolorem,
                            illo minus inventore ipsum impedit, excepturi
                            tempore similique cum ullam a praesentium
                            dignissimos quidem consequatur mollitia cupiditate!
                            Ea magnam, officiis dicta suscipit quos molestias
                            inventore molestiae tempora, amet accusamus alias
                            at, officia adipisci voluptatem. Esse quam libero
                            illum dolorem, voluptate amet quos ut?
                        </PCustom>
                    </CustomCardContent>
                </CustomCard>
            </div>
        </div>
    );
}

export default AboutPage;
